import { CategoryData } from "./CategoryType";
import { ShopData } from "./ShopType";

export interface ProductData {
  id: number;
  name: string;
  quantity: number;
  price: number;
  description: string;
  isSecond: boolean;
  images: string;
  categories: Array<CategoryData>;
  seller: Pick<ShopData, "id" | "name">;
}
