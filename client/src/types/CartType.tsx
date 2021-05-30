import { ProductData } from "./ProductType";

export type CartData = ProductData & {
  productCart: {
    quantity: number;
  };
};
