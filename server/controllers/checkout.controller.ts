import { Request, Response } from 'express';
import User from '../interfaces/User';
import {
    addProductsToHistory,
    createNewHistory,
    getAllProvinces,
    getCityByProvince,
    getCost,
    getMyHistory,
    getTransactionToken,
} from '../services/checkout.services';

export const getProvinces = async (req: Request, res: Response) => {
    try {
        const provinces = await getAllProvinces();
        return res.status(200).json({ message: 'OK', provinces });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCities = async (req: Request, res: Response) => {
    const { provinceId } = req.params;
    try {
        const cities = await getCityByProvince(provinceId);
        return res.status(200).json({ message: 'OK', cities });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getShippingCost = async (req: Request, res: Response) => {
    const { destination, origin, weight } = req.query;
    const _weight = parseInt(weight as string);
    try {
        const cost = await getCost(origin as string, destination as string, _weight);
        return res.status(200).json({ message: 'OK', cost });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const payProduct = async (req: any, res: Response) => {
    const { orderId, price, products } = req.body;
    const user: User = req.user;

    try {
        const _user = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        };
        const transaction = await getTransactionToken(orderId, price, _user, products);
        return res.status(200).json({ message: 'OK', transaction });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getHistory = async (req: any, res: Response) => {
    const user: User = req.user;

    try {
        const histories = await getMyHistory(user.id);
        return res.status(200).json({ message: 'OK', histories });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createHistory = async (req: any, res: Response) => {
    const user = req.user;
    const { products } = req.body;

    try {
        const history = await createNewHistory(user.id);
        await addProductsToHistory(history, products);
        return res.status(201).json({ message: 'Checkout success', history });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
