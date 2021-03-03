import { Request, Response } from 'express';
import Product from '../models/product.model';
import ProductTypes from '../interfaces/Product';

export const create = async (req: Request, res: Response) => {
    const { name, quantity, price, description, isSecond } = req.body;

    try {
        const newProduct: ProductTypes = {
            name,
            quantity,
            price,
            description,
            isSecond,
        };
        const product = await Product.create(newProduct);

        return res.status(201).json({ message: 'Product successfully created', product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const get = async (req: Request, res: Response) => {
    try {
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDetail = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const update = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const remove = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
