import { Request, Response } from 'express';
import Cart from '../models/cart.model';
import {
    removeFromCart,
    addToCart,
    createCart,
    findUserCart,
    getAllCartItems,
    getCartItemById,
} from '../services/cart.services';
import { getProductbyId } from '../services/product.services';

export const create = async (req: any, res: Response) => {
    const { id: userId } = req.user;
    const { productId } = req.params;

    async function addItem(schema: Cart, status: string, newQuantity?: number) {
        let quantity: number;
        if (status === 'new') {
            quantity = 1;
        } else {
            quantity = newQuantity as number;
        }
        await addToCart(schema, productId, quantity);
        const newCartItem = await getCartItemById(schema, productId);
        return newCartItem;
    }
    try {
        const cart = await findUserCart(userId);

        if (cart) {
            const cartItem: any = await getCartItemById(cart, productId);

            if (cartItem.length !== 0) {
                const newQuantity = cartItem[0].ProductCart.quantity + 1;
                const updatedCart = await addItem(cart, 'old', newQuantity);
                return res.status(200).json({ message: 'Item successfully added to cart', cart: updatedCart });
            } else {
                const newCartItem = await addItem(cart, 'new');
                return res.status(200).json({ message: 'Item successfully added to cart', cart: newCartItem });
            }
        } else {
            const createdCart = await createCart(userId);
            const newCartItem = await addItem(createdCart, 'new');
            return res.status(200).json({ message: 'Item successfully added to cart', cart: newCartItem });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const get = async (req: any, res: Response) => {
    const { id: userId } = req.user;
    try {
        const userCart = await getAllCartItems(userId);

        return res.status(200).json({ carts: userCart });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const update = async (req: any, res: Response) => {
    const { id: userId } = req.user;
    const { productId } = req.params;

    try {
        const cart = await findUserCart(userId);

        async function decreaseQtyItem(schema: Cart, newQuantity: number) {
            await addToCart(schema, productId, newQuantity);
            const updatedCart = await getCartItemById(schema, productId);
            return updatedCart;
        }

        if (cart) {
            const cartItem: any = await getCartItemById(cart, productId);

            if (cartItem.length !== 0) {
                const newQuantity = cartItem[0].ProductCart.quantity - 1;
                if (newQuantity === 0) {
                    await removeFromCart(cart, productId);
                    const deletedCart = getProductbyId(productId);
                    return res.status(200).json({ message: 'Item successfully deleted from cart', cart: deletedCart });
                } else {
                    const updatedCart = await decreaseQtyItem(cart, newQuantity);
                    return res.status(200).json({ message: 'Item quantity successfully decreased', cart: updatedCart });
                }
            } else {
                return res.status(404).json({ message: 'Item do not exist in cart', cart: cartItem });
            }
        } else {
            return res.status(404).json({ message: 'User do not have cart yet', cart });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const remove = async (req: any, res: Response) => {
    const { id: userId } = req.user;
    const { productId } = req.params;

    try {
        const cart = await findUserCart(userId);

        if (cart) {
            const cartItem: any = await getCartItemById(cart, productId);

            if (cartItem.length !== 0) {
                await removeFromCart(cart, productId);
                const deletedCart = getProductbyId(productId);

                return res.status(200).json({ message: 'Item successfully deleted from cart', cart: deletedCart });
            } else {
                return res.status(404).json({ message: 'Item do not exist in cart', cart: cartItem });
            }
        } else {
            return res.status(404).json({ message: 'User do not have cart yet', cart });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
