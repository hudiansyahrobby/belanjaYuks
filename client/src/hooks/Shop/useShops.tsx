import { useInfiniteQuery } from "react-query";
import { getShops } from "../../API/ShopAPI";

const useShops = () => {
  return useInfiniteQuery("shops", getShops, {
    getNextPageParam: (lastPage, pages) => {
      const hasNextPage = lastPage.currentPage + 1 < lastPage.totalPages;
      let nextPage = false;
      if (hasNextPage) {
        nextPage = lastPage.currentPage + 1;
      }

      return nextPage;
    },
  });
};

export default useShops;
