import { useQuery } from "react-query";
import { getFavorites } from "../../API/FavoriteAPI";

const useFavorites = () => {
  return useQuery("favorites", getFavorites);
};

export default useFavorites;
