import { useQuery } from "react-query";
import { getUserHistory } from "../../API/CheckoutAPI";

const useAllHistories = () => {
  return useQuery("user-histories", getUserHistory);
};

export default useAllHistories;
