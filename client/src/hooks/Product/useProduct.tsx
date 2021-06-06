import { QueryClient, useQuery } from "react-query";
import { getProductById } from "../../API/ProductAPI";
import { ProductData } from "../../types/ProductType";

const useProduct = (productId: string) => {
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

export default useProduct;
