import axios from "../../axios";

export const getCarts = async () => {
  const { data } = await axios.get("/carts");
  return data.data;
};

export const addProductToCart = async (productId: number) => {
  const { data } = await axios.post(`/carts/${productId}`);
  return data.data;
};

export const decreaseProductQtyOnCart = async (productId: number) => {
  const { data } = await axios.put(`/carts/${productId}`);
  return data.data;
};

export const deleteProductOnCart = async (productId: number) => {
  const { data } = await axios.delete(`/carts/${productId}`);
  return data.data;
};
