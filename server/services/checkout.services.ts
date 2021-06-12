import axios from 'axios';
import { config } from 'dotenv';
// @ts-ignore
import midtransClient from 'midtrans-client';
import { Sequelize } from 'sequelize-typescript';
import { Cart } from '../interfaces/Cart';
import HistoryType from '../interfaces/History';
import History from '../models/history.model';
import Product from '../models/product.model';
import User from '../models/user.model';

config();

const BASE_URL = process.env.RAJA_ONGKIR_URL;
const API_KEY = process.env.RAJA_ONGKIR_API_KEY;

export const getAllProvinces = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/province`, {
            headers: {
                key: API_KEY,
            },
        });

        const provinces = data.rajaongkir.results;
        return provinces;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const getCityByProvince = async (provinceId: string) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/city?province=${provinceId}`, {
            headers: {
                key: API_KEY,
            },
        });

        const cities = data.rajaongkir.results;
        return cities;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const getCost = async (origin: string, destination: string, weight: number) => {
    try {
        const { data } = await axios.post(
            `${BASE_URL}/cost`,
            { origin, destination, weight, courier: 'jne' },
            {
                headers: {
                    key: API_KEY,
                },
            },
        );

        const cost = data.rajaongkir.results;
        return cost;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const getTransactionToken = async (
    orderId: string,
    price: number,
    user: { firstName: string; lastName: string; email: string },
    products: Cart[],
) => {
    const { email, firstName, lastName } = user;
    try {
        let snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: process.env.MIDTRANS_API_KEY,
        });

        let parameter = {
            transaction_details: {
                order_id: orderId,
                gross_amount: price,
            },
            item_details: products.map((product) => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: product.productCart.quantity,
                };
            }),
            credit_card: {
                secure: true,
            },
            customer_details: {
                first_name: firstName,
                last_name: lastName,
                email,
            },
        };

        const transaction = await snap.createTransaction(parameter);
        return transaction;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const getAllHistories = () => {
    return History.findAll({
        // attributes: [[Sequelize.literal('COUNT(products.price * qty)'), 'result']],
        include: [
            {
                model: Product,
                through: { as: 'checkout', attributes: ['qty'] },
                attributes: ['id', 'name', 'images', [Sequelize.literal('products.price * qty'), 'totalPrice']],
            },
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName'],
            },
        ],
        // group: [
        //     'History.id',
        //     'products.id',
        //     'products->checkout.qty',
        //     'products->checkout.productId',
        //     'products->checkout.historyId',
        //     'user.id',
        // ],
    });
};

export const getMyHistory = (userId: string) => {
    return History.findAll({
        where: { userId },
        include: [
            {
                model: Product,
                through: { as: 'checkout', attributes: ['qty'] },
                attributes: ['id', 'name', 'images', [Sequelize.literal('products.price * qty'), 'totalPrice']],
            },
        ],
    });
};

export const createNewHistory = (userId: string) => {
    return History.create({ userId });
};

export const addProductsToHistory = async (schema: History, products: Array<{ productId: string; qty: number }>) => {
    products.map(async (product) => {
        await schema.$add('products', product.productId, {
            through: { qty: product.qty },
        });
    });
};
