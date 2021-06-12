import { useQuery } from "react-query";
import { getAllHistories } from "../../API/CheckoutAPI";

const useAllHistories = () => {
  return useQuery("histories", getAllHistories);
};

export default useAllHistories;
