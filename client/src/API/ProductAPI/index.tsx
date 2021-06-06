import axios from "../../axios";

export const getProducts = async () => {
  const { data } = await axios.get("/products");
  return data.products;
};

export const getProductById = async (productId: string) => {
  const { data } = await axios.get(`/products/${productId}`);
  return data.product;
};

export const addProduct = async (productData: FormData) => {
  const { data } = await axios.post(`/products`, productData);
  return data.data;
};

export const updateProductById = async (product: any) => {
  // const { data } = await axios.put(`/products/${product.id}`, product);
  console.log("PRODUCT", product);
  const { data } = await axios.put(
    `/products/${product.productId}`,
    product.product
  );
  return data.data;
};

export const deleteProductById = async (productId: string) => {
  const { data } = await axios.delete(`/products/${productId}`);
  return data.data;
};
