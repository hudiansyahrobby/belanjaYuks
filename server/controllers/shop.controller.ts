import { Request, Response } from 'express';
import ShopType from '../interfaces/Shop';
import {
    createNewShop,
    deleteUserShop,
    getAllShops,
    getShopById,
    getShopProducts,
    getUserShop,
    getShopByName,
    updateUserShop,
    deleteShopById,
} from '../services/shop.services';
import { getPagination } from '../helpers/getPagination';
import { getSort } from '../helpers/getSort';
import { getPaginationData } from '../helpers/getPaginationData';
import { Op } from 'sequelize';
import { changeUserRole } from '../services/user.services';
import { deleteImages, uploadImages } from '../helpers/images';

export const create = async (req: any, res: Response) => {
    const { id: userId, ...user } = req.user;
    const { images } = req.body;
    try {
        if (user.role === 'admin') {
            return res.status(400).json({ message: "You're an admin, you can't have shop" });
        }

        const isUserHasShop = await getUserShop(userId);

        if (isUserHasShop) {
            return res.status(400).json({ message: 'This user already has shop, delete first' });
        }

        const imageURL = await uploadImages(images);

        const shopData: ShopType = {
            ...req.body,
            images: imageURL,
            userId,
        };

        await changeUserRole('seller', userId);

        const _newShop = await createNewShop(shopData);

        return res.status(201).json({ message: 'Shop created successfully', shop: _newShop });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const get = async (req: Request, res: Response) => {
    const { page, size, search, sort } = req.query;

    const _page = parseInt(page as string);
    const _size = parseInt(size as string);

    const { limit, offset } = getPagination(_page, _size);

    const searchCondition = search ? { name: { [Op.iLike]: `%${search}%` } } : undefined;
    const orderBy = !!sort ? getSort(sort as string) : ['createdAt', 'DESC'];

    try {
        const response = await getAllShops(searchCondition, limit, offset, orderBy);

        const shops = getPaginationData(response, _page, limit);

        return res.status(200).json({ shops });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getMyShop = async (req: any, res: Response) => {
    const user = req.user;

    try {
        const shop = await getShopById(user.myShop.id);

        if (!shop) {
            return res.status(404).json({ message: 'Shop not found' });
        }

        return res.status(200).json({ shop });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getShopProduct = async (req: Request, res: Response) => {
    const { page, size, sort } = req.query;
    const { shopId } = req.params;

    const isShopExist = await getShopById(shopId);

    if (!isShopExist) {
        return res.status(404).json({ message: 'Shop not found' });
    }

    const _page = parseInt(page as string);
    const _size = parseInt(size as string);

    const { limit, offset } = getPagination(_page, _size);

    const orderBy = !!sort ? getSort(sort as string) : ['createdAt', 'DESC'];

    try {
        const response = await getShopProducts(shopId, limit, offset, orderBy);

        const products = getPaginationData(response, _page, limit);

        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getMyShopProduct = async (req: any, res: Response) => {
    const { page, size, sort } = req.query;
    const user = req.user;
    const shopId = user.myShop.id;

    const _page = parseInt(page as string);
    const _size = parseInt(size as string);

    const { limit, offset } = getPagination(_page, _size);

    const orderBy = !!sort ? getSort(sort as string) : ['createdAt', 'DESC'];

    try {
        const response = await getShopProducts(shopId, limit, offset, orderBy);

        const products = getPaginationData(response, _page, limit);

        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDetail = async (req: Request, res: Response) => {
    const { shopId } = req.params;

    try {
        const shop = await getShopById(shopId);

        if (!shop) {
            return res.status(404).json({ message: 'Shop not found', shop });
        }

        return res.status(200).json({ shop });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const update = async (req: any, res: Response) => {
    const { id: userId } = req.user;
    const { name, images, description } = req.body;

    try {
        const userShop = await getUserShop(userId);

        if (!userShop) {
            return res.status(404).json({ message: 'You do not have any shop' });
        }

        await deleteImages(userShop.images);

        const imageURL = await uploadImages(images);

        const shopData: ShopType = {
            description,
            name,
            images: imageURL,
            userId,
        };

        const [_, _updatedShop] = await updateUserShop(shopData, userId);

        return res.status(200).json({ message: 'Shop successfully updated', shop: _updatedShop[0] });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const removeMyShop = async (req: any, res: Response) => {
    const { id: userId } = req.user;

    try {
        const shop = await getUserShop(userId);

        if (!shop) {
            return res.status(404).json({ message: 'You do not have any shop' });
        }

        await deleteUserShop(userId);

        await changeUserRole('buyer', userId);
        return res.status(200).json({ message: 'Shop successfully deleted', shop });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const removeShopById = async (req: any, res: Response) => {
    const { shopId } = req.params;

    try {
        const shop = await getShopById(shopId);

        if (!shop) {
            return res.status(404).json({ message: `Shop with ID ${shopId} not found` });
        }

        await deleteShopById(shopId);

        await changeUserRole('buyer', shop.userId);
        return res.status(200).json({ message: 'Shop successfully deleted', shop });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
