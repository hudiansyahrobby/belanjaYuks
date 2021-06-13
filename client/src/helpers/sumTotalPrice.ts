import { ProductHistory } from "../types/HistoryType";

export const sumTotalPrice = (products: ProductHistory[]) => {
  if (products === undefined) {
    return;
  }
  return products.reduce(
    (accumulator, currentValue) => accumulator + +currentValue.totalPrice,
    0
  );
};
