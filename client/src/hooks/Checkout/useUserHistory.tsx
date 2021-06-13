import { useQuery } from "react-query";
import { getUserHistory } from "../../API/CheckoutAPI";

const useUserHistory = () => {
  return useQuery("user-histories", getUserHistory);
};

export default useUserHistory;
