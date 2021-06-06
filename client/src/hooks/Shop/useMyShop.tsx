import { useQuery } from "react-query";
import { getMyShop } from "../../API/ShopAPI";

const useShop = (isEdit: boolean) => {
  return useQuery("myshop", getMyShop, {
    enabled: isEdit,
  });
};

export default useShop;
