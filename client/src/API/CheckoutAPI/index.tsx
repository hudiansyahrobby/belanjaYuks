import axios from "../../axios";
import { v4 as uuidv4 } from "uuid";
import { CartData } from "../../types/CartType";

export const getProvinces = async () => {
  const { data } = await axios.get("/provinces");
  return data.provinces;
};

export const getCityByProvince = async (provinceId: string) => {
  const { data } = await axios.get(`/provinces/${provinceId}`);
  return data.cities;
};

export const getShippingCost = async (
  origin: string,
  destination: string,
  weight: number
) => {
  const { data } = await axios.get(
    `/checkout/cost?origin=${origin}&destination=${destination}&weight=${weight}`
  );
  return data.cost[0].costs;
};

export const getTransactionToken = async (transaction: {
  price: number;
  product: CartData[];
}) => {
  const { price, product } = transaction;
  const orderId = uuidv4();
  const order = {
    orderId,
    price,
    product,
  };
  const { data } = await axios.post("/checkout/pay", order);
  return data;
};
