import { QueryClient, useQuery } from "react-query";
import { getShopById } from "../../API/ShopAPI";

const useShop = (shopId: number) => {
  const queryClient: any = new QueryClient();
  return useQuery(["shops", shopId], () => getShopById(shopId), {
    initialData: () => {
      return queryClient
        .getQueryData("shops")
        ?.find((shopId: any) => shopId.id === shopId);
    },
    enabled: !!shopId,
  });
};

export default useShop;
