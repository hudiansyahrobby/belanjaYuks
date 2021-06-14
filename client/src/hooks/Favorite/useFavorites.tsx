import { useQuery } from "react-query";
import { getFavorites } from "../../API/FavoriteAPI";

const useFavorites = (isAuthenticated: boolean) => {
  return useQuery("favorites", getFavorites, {
    enabled: isAuthenticated,
  });
};

export default useFavorites;
