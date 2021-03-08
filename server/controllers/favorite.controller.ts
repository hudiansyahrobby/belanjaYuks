import { Response } from 'express';
import Favorite from '../models/favorite.model';
import Product from '../models/product.model';
import {
    findUserFavorite,
    getFavoriteItemById,
    removeFromFavorite,
    addToFavorite,
} from '../services/favorite.services';
import { getProductbyId } from '../services/product.services';

export const toggle = async (req: any, res: Response) => {
    const { id: userId } = req.user;
    const { productId } = req.params;

    try {
        const favorites = await findUserFavorite(userId);
        // check if user favorites is not null
        if (favorites) {
            const favoriteItems = await getFavoriteItemById(favorites, productId);
            if (favoriteItems.length !== 0) {
                // If favorite items exist on favorite list, remove it
                await removeFromFavorite(favorites, productId);
                const deletedfavoriteItem = await getProductbyId(productId);
                return res
                    .status(200)
                    .json({ message: 'Item successfully deleted from favorites', favorite: deletedfavoriteItem });
            } else {
                // If favorite items do not exist on favorite list, add it
                await addToFavorite(favorites, productId);
                const newfavoriteItem = await getProductbyId(productId);
                return res
                    .status(200)
                    .json({ message: 'Item successfully added to favorites', favorite: newfavoriteItem });
            }
        } else {
            const createdFavorite = await Favorite.create({ userId });
            await createdFavorite.$add('products', [productId]);
            return res.status(200).json({ message: 'Item successfully added to favorites', favorite: createdFavorite });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const get = async (req: any, res: Response) => {
    const { id: userId } = req.user;

    try {
        const userFavorites = await Favorite.findOne({
            where: { userId },
            include: [
                {
                    model: Product,
                    through: { attributes: [] },
                },
            ],
        });
        return res.status(200).json({ userFavorites });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
