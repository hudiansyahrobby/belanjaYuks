import { CategoryData } from "./CategoryType";

export interface ProductData {
  id: number;
  name: string;
  quantity: number;
  price: number;
  description: string;
  isSecond: boolean;
  images: string;
  categories: Array<CategoryData>;
}
