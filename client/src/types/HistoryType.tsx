export interface ProductHistory {
  id: string;
  name: string;
  images: Array<string>;
  totalPrice: string;
  checkout: {
    qty: number;
  };
}

export interface HistoryData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  products: ProductHistory[];
}
