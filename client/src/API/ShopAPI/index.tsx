import axios from "../../axios";
import { ShopData } from "../../types/ShopType";

export const getShops = async () => {
  const { data } = await axios.get("/shops");
  return data.shops;
};

export const addShop = async (shop: ShopData) => {
  const { data } = await axios.post("/shops", shop);
  return data.data;
};

export const updateShop = async (shop: ShopData) => {
  const { data } = await axios.put("/shops", shop);
  return data.data;
};

export const deleteShop = async () => {
  const { data } = await axios.delete("/shops");
  return data.data;
};

export const getShopById = async (shopId: number) => {
  const { data } = await axios.get(`/shops/${shopId}`);
  return data.data;
};

export const getProductByShopId = async (shopId: number) => {
  const { data } = await axios.get(`/shops/products/${shopId}`);
  return data.data;
};
