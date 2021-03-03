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
} from '../repositories/product.repository';
import { deleteImageOnCloudinary, uploadToCloudinary } from '../helpers/initCloudinary';
import { getPublicId } from '../helpers/getPublicId';
import ProductType from '../interfaces/Product';

export const create = async (req: Request, res: Response) => {
    try {
        // Upload and Delete Images
        const imageURL = [];
        const files = req.body.images;
        for (const file of files) {
            const path = `public/${file}`;
            const newPath = await uploadToCloudinary(path);
            imageURL.push(newPath);
            fs.unlinkSync(path);
        }

        const newProduct = {
            ...req.body,
            images: imageURL,
        };

        const _newProduct = await createProduct(newProduct);
        return res.status(201).json({ message: 'Product successfully created', product: _newProduct });
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
        const response = await getAllProducts(searchCondition, limit, offset, orderBy);

        const products = getPaginationData(response, _page, limit);

        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDetail = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
        const product = await getProductbyId(id as string);

        if (!product) {
            return res.status(404).json({ message: 'Product not found', product });
        }

        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const update = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
        const product = await getProductbyId(id as string);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Delete images on Cloudinary
        const public_ids = getPublicId(product.images);

        for (const public_id of public_ids) {
            await deleteImageOnCloudinary(public_id);
        }

        // Reupload images on cloudinary

        const imageURL = [];
        const files = req.body.images;
        for (const file of files) {
            const path = `public/${file}`;
            const newPath = await uploadToCloudinary(path);
            imageURL.push(newPath);
            fs.unlinkSync(path);
        }

        const updatedProduct: ProductType = req.body;

        const _product = await updateProductById(updatedProduct, id as string);

        return res.status(200).json({ message: 'Product updated successfully', product: _product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const remove = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
        const product = await getProductbyId(id as string);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const public_ids = getPublicId(product.images);

        for (const public_id of public_ids) {
            await deleteImageOnCloudinary(public_id);
        }

        await deleteProductById(id as string);

        return res.status(200).json({ message: 'Productt deleted successfully', product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
