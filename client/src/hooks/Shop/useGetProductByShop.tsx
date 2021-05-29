import { useQuery } from "react-query";
import { getShopById } from "../../API/ShopAPI";

const useGetProductByShop = (shopId: number) => {
  return useQuery(["shop-products", shopId], () => getShopById(shopId));
};

export default useGetProductByShop;
