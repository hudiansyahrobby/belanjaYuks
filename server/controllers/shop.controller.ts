import { Request, Response } from 'express';
import ShopType from '../interfaces/Shop';
import {
    createNewShop,
    deleteShopById,
    getAllShops,
    getShopById,
    getShopProducts,
    getUserShop,
    getShopByName,
    updateShopById,
} from '../services/shop.services';
import { getPagination } from '../helpers/getPagination';
import { getSort } from '../helpers/getSort';
import { getPaginationData } from '../helpers/getPaginationData';
import { Op } from 'sequelize';
import { changeUserRole } from '../services/user.services';
import { deleteImages, uploadImages } from '../helpers/images';

export const create = async (req: any, res: Response) => {
    const { id: userId } = req.user;
    const { name, images, description } = req.body;

    try {
        const isUserHasShop = await getUserShop(userId);

        if (isUserHasShop) {
            return res.status(400).json({ message: 'This user has had a shop' });
        }

        const isShopExist = await getShopByName(name);

        if (isShopExist) {
            return res.status(400).json({ message: 'Shop with this name has exist' });
        }

        const imageURL = await uploadImages(images);

        const shopData: ShopType = {
            description,
            name,
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

export const getShopProduct = async (req: Request, res: Response) => {
    const { page, size, sort } = req.query;
    const { shopId } = req.params;

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
    const { shopId } = req.params;
    const { id: userId } = req.user;
    const { name, images, description } = req.body;

    try {
        const shop = await getShopById(shopId);

        if (!shop) {
            return res.status(404).json({ message: 'Shop not found' });
        }

        if (shop.userId !== userId) {
            return res.status(400).json({ message: "This shop doesn't belong to yours" });
        }

        await deleteImages(shop.images);

        const imageURL = await uploadImages(images);

        const shopData: ShopType = {
            description,
            name,
            images: imageURL,
            userId,
        };

        const [_, _updatedShop] = await updateShopById(shopData, shopId);

        return res.status(200).json({ message: 'Shop successfully updated', shop: _updatedShop[0] });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const remove = async (req: any, res: Response) => {
    const { shopId } = req.params;
    const { id: userId } = req.user;

    try {
        const shop = await getShopById(shopId);

        if (!shop) {
            return res.status(404).json({ message: 'Shop not found' });
        }

        if (shop.userId !== userId) {
            return res.status(400).json({ message: "This shop doesn't belong to yours" });
        }

        await deleteShopById(shopId);

        await changeUserRole('buyer', userId);
        return res.status(200).json({ message: 'Shop successfully deleted', shop });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
