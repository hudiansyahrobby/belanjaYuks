import { useQuery } from "react-query";
import { getProvinces } from "../../API/CheckoutAPI";

const useProvinces = () => {
  return useQuery("provinces", getProvinces);
};

export default useProvinces;
