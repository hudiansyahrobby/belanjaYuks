import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { getPagination } from '../helpers/getPagination';
import { getPaginationData } from '../helpers/getPaginationData';
import { getSort } from '../helpers/getSort';
import {
    createProduct,
    getAllProducts,
    getProductbyId,
    updateProductById,
    deleteProductById,
    addCategories,
    deleteCategories,
    getProductByCategory,
} from '../services/product.services';
import { deleteImageOnCloudinary, uploadToCloudinary } from '../helpers/initCloudinary';
import { getPublicId } from '../helpers/getPublicId';
import ProductType from '../interfaces/Product';
import { deleteImages, uploadImages } from '../helpers/images';

export const create = async (req: any, res: Response) => {
    const { myShop } = req.user;
    const { categories, images, ...data } = req.body;

    try {
        const imageURL = await uploadImages(images);

        const newProduct: ProductType = {
            ...data,
            images: imageURL,
            shopId: myShop.id,
        };

        const createdProduct = await createProduct(newProduct);
        await addCategories(createdProduct, categories);

        const _newProduct = await getProductbyId(createdProduct.id);

        return res.status(201).json({ message: 'Product successfully created', product: _newProduct });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    const { page, size, search, sort } = req.query;

    const _page = parseInt(page as string);
    const _size = parseInt(size as string);

    const { limit, offset } = getPagination(_page, _size);

    const searchCondition = search ? { name: { [Op.iLike]: `%${search}%` } } : undefined;
    const orderBy = !!sort ? getSort(sort as string) : ['createdAt', 'DESC'];

    try {
        const response = await getAllProducts(searchCondition, limit, offset, orderBy);

        const products = getPaginationData(response, _page, limit);

        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
    const { page, size, sort } = req.query;
    const { categoryId } = req.params;
    const _page = parseInt(page as string);
    const _size = parseInt(size as string);
    const { limit, offset } = getPagination(_page, _size);

    const orderBy = !!sort ? getSort(sort as string) : ['createdAt', 'DESC'];
    try {
        const response = await getProductByCategory(categoryId, limit, offset, orderBy);
        const products = getPaginationData(response, _page, limit);
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDetail = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const product = await getProductbyId(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found', product });
        }

        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const update = async (req: any, res: Response) => {
    const { productId } = req.params;
    const { categories, images, ...data } = req.body;
    const { myShop } = req.user;

    try {
        const product = await getProductbyId(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await deleteImages(product.images);
        const imageURL = await uploadImages(images);

        const productData: ProductType = {
            ...data,
            images: imageURL,
            shopId: myShop.id,
        };

        await deleteCategories(product, product.categories);
        await addCategories(product, categories);
        await updateProductById(productData, productId);

        const updatedProduct = await getProductbyId(productId);
        return res.status(200).json({ message: 'Product successfully updated', product: updatedProduct });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const remove = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const product = await getProductbyId(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const public_ids = getPublicId(product.images);

        for (const public_id of public_ids) {
            await deleteImageOnCloudinary(public_id);
        }

        await deleteProductById(productId);

        return res.status(200).json({ message: 'Product deleted successfully', product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
