import Cart from '../models/cart.model';
import Product from '../models/product.model';
import Shop from '../models/shop.model';

export const createCart = (userId: string) => {
    return Cart.create({ userId });
};

export const getAllCartItems = (userId: string) => {
    return Cart.findOne({
        where: { userId },
        include: [
            {
                model: Product,
                through: { as: 'productCart', attributes: ['quantity'] },
                include: [
                    {
                        model: Shop,
                    },
                ],
            },
        ],
    });
};

export const findUserCart = (userId: string) => {
    return Cart.findOne({ where: { userId } });
};

export const getCartItemById = (schema: Cart, productId: string) => {
    return schema.$get('products', { where: { id: productId } });
};

export const removeFromCart = (schema: Cart, productId: string) => {
    return schema.$remove('products', [productId]);
};

export const addToCart = (schema: Cart, productId: string, quantity: number) => {
    return schema.$add('products', [productId], { through: { quantity } });
};
