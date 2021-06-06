import axios from "../../axios";
import { ShopData } from "../../types/ShopType";

export const getShops = async () => {
  const { data } = await axios.get("/shops");
  return data.shops;
};

export const getShopsPagination = async (page: number) => {
  const { data } = await axios.get(`/shops?page=${page}`);
  return data.shops;
};

export const getMyShopProductPagination = async (page: number) => {
  const { data } = await axios.get(`/shops/products?page=${page}`);
  return data.products;
};

export const addShop = async (shop: FormData) => {
  const { data } = await axios.post("/shops", shop);
  return data;
};

export const updateShop = async (shop: FormData) => {
  const { data } = await axios.put("/shops", shop);
  return data;
};

export const deleteShop = async () => {
  const { data } = await axios.delete("/shops");
  return data;
};

export const deleteShopById = async (shopId: string) => {
  const { data } = await axios.delete(`/shops/${shopId}`);
  return data;
};

export const getShopById = async (shopId: string) => {
  const { data } = await axios.get(`/shops/${shopId}`);
  return data.shop;
};

export const getMyShop = async () => {
  const { data } = await axios.get(`/shops/me`);
  return data.shop;
};

export const getProductByShopId = async (shopId: string) => {
  const { data } = await axios.get(`/shops/products/${shopId}`);
  return data.products;
};
