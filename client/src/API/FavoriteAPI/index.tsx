import axios from "../../axios";

export const getFavorites = async () => {
  const { data } = await axios.get("/favorites");
  return data.data;
};

export const toggleFavorite = async (productId: number) => {
  const { data } = await axios.post(`/favorites/${productId}`);
  return data.data;
};
