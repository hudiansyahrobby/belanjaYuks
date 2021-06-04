import Shop from '../models/shop.model';
import ShopType from '../interfaces/Shop';
import User from '../models/user.model';
import Product from '../models/product.model';
import Category from '../models/category.model';
import { Op } from 'sequelize';

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
                attributes: ['firstName', 'lastName'],
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
                attributes: ['firstName', 'lastName'],
            },
        ],
    });
};

export const getShopByName = (name: string) => {
    return Shop.findOne({
        where: {
            name: {
                [Op.iLike]: name,
            },
        },
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

export const updateUserShop = (updatedShop: ShopType, userId: string) => {
    return Shop.update(updatedShop, {
        where: { userId },
        returning: true,
    });
};

export const deleteUserShop = (userId: string) => {
    return Shop.destroy({ where: { userId } });
};

export const deleteShopById = (shopId: string) => {
    return Shop.destroy({ where: { id: shopId } });
};
