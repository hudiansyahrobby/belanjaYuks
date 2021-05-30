import axios from "../../axios";

export const getFavorites = async () => {
  const { data } = await axios.get("/favorites");
  return data.favorites;
};

export const toggleFavorite = async (productId: number) => {
  const { data } = await axios.post(`/favorites/${productId}`);
  console.log(data);
  return data;
};
