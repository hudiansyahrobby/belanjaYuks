import Shop from '../models/shop.model';
import ShopType from '../interfaces/Shop';
import User from '../models/user.model';
import Product from '../models/product.model';
import Category from '../models/category.model';

export const getUserShop = (userId: number) => {
    return Shop.findOne({
        where: { userId },
    });
};

export const createNewShop = (newShop: ShopType) => {
    return Shop.create(newShop);
};

export const getAllShops = (searchCondition: any, limit: number, offset: number, orderBy: any) => {
    return Shop.findAndCountAll({
        where: searchCondition,
        limit,
        offset,
        order: [orderBy as any],
        attributes: { exclude: ['userId'] },
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    });
};

export const getShopById = (id: string) => {
    return Shop.findOne({
        where: { id },
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    });
};

export const getShopByName = (name: string) => {
    return Shop.findOne({
        where: { name },
    });
};

export const getShopProducts = (shopId: string, limit: number, offset: number, orderBy: any) => {
    return Product.findAndCountAll({
        where: {
            shopId,
        },
        limit,
        offset,
        order: [orderBy as any],
        include: [
            {
                model: Shop,
                attributes: ['name'],
            },
            {
                model: Category,
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                through: { attributes: [] },
            },
        ],
    });
};

export const updateShopById = (updatedShop: ShopType, id: string) => {
    return Shop.update(updatedShop, {
        where: { id },
        returning: true,
    });
};

export const deleteShopById = (id: string) => {
    return Shop.destroy({ where: { id } });
};
