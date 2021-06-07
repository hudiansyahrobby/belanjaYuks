import { Request, Response } from 'express';
import { getAllProvinces, getCityByProvince, getCost } from '../services/checkout.services';

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
