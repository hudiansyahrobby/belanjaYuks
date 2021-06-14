import { useQuery } from "react-query";
import { getShopHistories } from "../../API/CheckoutAPI";

const useShopHistory = () => {
  return useQuery("histories-shop", getShopHistories);
};

export default useShopHistory;
