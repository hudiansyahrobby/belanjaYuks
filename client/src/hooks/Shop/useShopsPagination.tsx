import { useQuery } from "react-query";
import { getShopsPagination } from "../../API/ShopAPI";

const useShopsPagination = (page: number = 0) => {
  return useQuery(["shops", page], () => getShopsPagination(page), {
    keepPreviousData: true,
  });
};

export default useShopsPagination;
