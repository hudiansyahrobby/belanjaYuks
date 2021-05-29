import { QueryClient, useQuery } from "react-query";
import { getProductById } from "../../API/ProductAPI";
import { ProductData } from "../../types/ProductType";

const useShop = (productId: number) => {
  const queryClient: any = new QueryClient();
  return useQuery(["products", productId], () => getProductById(productId), {
    initialData: () => {
      return queryClient
        .getQueryData("products")
        ?.find((product: ProductData) => product.id === productId);
    },
    enabled: !!productId,
  });
};

export default useShop;
