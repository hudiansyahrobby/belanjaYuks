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

export const addShop = async (shop: ShopData) => {
  const { data } = await axios.post("/shops", shop);
  return data.shop;
};

export const updateShop = async (shop: ShopData) => {
  const { data } = await axios.put("/shops", shop);
  return data.shop;
};

export const deleteShop = async () => {
  const { data } = await axios.delete("/shops");
  return data.shop;
};

export const deleteShopById = async (shopId: number) => {
  const { data } = await axios.delete(`/shops/${shopId}`);
  return data.shop;
};

export const getShopById = async (shopId: number) => {
  const { data } = await axios.get(`/shops/${shopId}`);
  return data.shop;
};

export const getProductByShopId = async (shopId: number) => {
  const { data } = await axios.get(`/shops/products/${shopId}`);
  return data.products;
};
