import { useQuery } from "react-query";
import { getMyShopProductPagination } from "../../API/ShopAPI";

const useProductShopPagination = (page: number = 0) => {
  return useQuery(["products", page], () => getMyShopProductPagination(page), {
    keepPreviousData: true,
  });
};

export default useProductShopPagination;
