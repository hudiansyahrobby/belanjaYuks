import { Response } from 'express';
import Favorite from '../models/favorite.model';
import Product from '../models/product.model';
import Shop from '../models/shop.model';
import {
    findUserFavorite,
    getFavoriteItemById,
    removeFromFavorite,
    addToFavorite,
    createFavorite,
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
                const deletedfavoriteItem = await await getFavoriteItemById(favorites, productId);
                return res
                    .status(200)
                    .json({ message: 'Item successfully deleted from favorites', favorite: deletedfavoriteItem });
            } else {
                // If favorite items do not exist on favorite list, add it
                await addToFavorite(favorites, productId);
                const newfavoriteItem = await getFavoriteItemById(favorites, productId);
                return res
                    .status(200)
                    .json({ message: 'Item successfully added to favorites', favorite: newfavoriteItem });
            }
        } else {
            const createdFavorite = await createFavorite(userId);
            await addToFavorite(createdFavorite, productId);
            const newFavoriteItem = await getFavoriteItemById(favorites, productId);

            return res.status(200).json({ message: 'Item successfully added to favorites', favorite: newFavoriteItem });
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
                    include: [
                        {
                            model: Shop,
                            attributes: ['id', 'name', 'location'],
                        },
                    ],
                },
            ],
        });
        return res.status(200).json({ favorites: userFavorites });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
