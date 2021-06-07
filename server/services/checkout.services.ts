import axios from 'axios';
import { config } from 'dotenv';

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
