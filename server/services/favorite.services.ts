import Favorite from '../models/favorite.model';

export const createFavorite = (userId: string) => {
    return Favorite.create({ userId });
};

export const findUserFavorite = (userId: string) => {
    return Favorite.findOne({ where: { userId } });
};

export const getFavoriteItemById = (schema: any, productId: string) => {
    return schema.$get('products', { where: { id: productId } });
};

export const removeFromFavorite = (schema: any, productId: string) => {
    return schema.$remove('products', [productId]);
};

export const addToFavorite = (schema: any, productId: string) => {
    return schema.$add('products', [productId]);
};
