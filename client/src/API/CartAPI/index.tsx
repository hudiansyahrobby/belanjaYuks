import axios from "../../axios";

export const getCarts = async () => {
  const { data } = await axios.get("/carts");
  console.log(data.carts);
  return data.carts;
};

export const addProductToCart = async (productId: string) => {
  const { data } = await axios.post(`/carts/${productId}`);
  return data;
};

export const decreaseProductQtyOnCart = async (productId: string) => {
  const { data } = await axios.put(`/carts/${productId}`);
  return data;
};

export const deleteProductOnCart = async (productId: string) => {
  const { data } = await axios.delete(`/carts/${productId}`);
  return data;
};
