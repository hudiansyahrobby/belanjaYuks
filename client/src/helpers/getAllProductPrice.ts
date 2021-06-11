import { CartData } from "../types/CartType";

export const getAllProductPrice = (products: CartData[]) => {
  let price = 0;
  products?.map(
    (product) => (price = +product.price * +product.productCart.quantity)
  );
  return price.toFixed(2);
};
