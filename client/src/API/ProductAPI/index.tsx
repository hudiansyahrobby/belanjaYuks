import axios from "../../axios";
import { ProductData } from "../../types/ProductType";

export const getProducts = async () => {
  const { data } = await axios.get("/products");
  return data.products;
};

export const getProductById = async (productId: number) => {
  const { data } = await axios.get(`/products/${productId}`);
  return data.data;
};

export const addProduct = async (productData: Omit<ProductData, "id">) => {
  const { data } = await axios.post(`/products`, productData);
  return data.data;
};

export const updateProductById = async (product: ProductData) => {
  const { data } = await axios.put(`/products/${product.id}`, product);
  return data.data;
};

export const deleteProductById = async (productId: number) => {
  const { data } = await axios.delete(`/products/${productId}`);
  return data.data;
};
