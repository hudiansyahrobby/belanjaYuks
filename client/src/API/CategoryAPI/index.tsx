import axios from "../../axios";
import { CategoryData } from "../../types/CategoryType";

export const getCategories = async () => {
  const { data } = await axios.get("/categories");
  return data.categories;
};

export const addCategory = async (categoryData: Pick<CategoryData, "name">) => {
  const { data } = await axios.post("/categories", categoryData);
  return data.category;
};

export const updateCategory = async (category: CategoryData) => {
  const { data } = await axios.post(`/categories/${category.id}`, {
    name: category.name,
  });
  return data.data;
};

export const deleteCategory = async (categoryId: number) => {
  const { data } = await axios.post(`/categories/${categoryId}`);
  return data.data;
};
