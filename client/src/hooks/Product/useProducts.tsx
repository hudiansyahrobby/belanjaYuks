import { useInfiniteQuery } from "react-query";
import { getProducts } from "../../API/ProductAPI";

const useProducts = () => {
  return useInfiniteQuery("products", getProducts, {
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

export default useProducts;
