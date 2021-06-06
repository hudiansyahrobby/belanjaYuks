import { CategoryData } from "./CategoryType";
import { ShopData } from "./ShopType";

export interface ProductData {
  id: string;
  name: string;
  quantity: number;
  price: number;
  description: string;
  isSecond: boolean;
  images: string;
  categories: Array<CategoryData> | Array<string> | string;
  seller: Pick<ShopData, "id" | "name" | "location">;
}
