import { useInfiniteQuery } from "react-query";
import { getProductByShopId } from "../../API/ShopAPI";

const useGetProductByShop = (shopId: number) => {
  return useInfiniteQuery(
    ["shop-products", shopId],
    () => getProductByShopId(shopId),
    {
      getNextPageParam: (lastPage, pages) => {
        const hasNextPage = lastPage.currentPage + 1 < lastPage.totalPages;
        let nextPage = false;
        if (hasNextPage) {
          nextPage = lastPage.currentPage + 1;
        }

        return nextPage;
      },
    }
  );
};

export default useGetProductByShop;
