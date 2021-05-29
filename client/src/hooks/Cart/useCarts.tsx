import { useQuery } from "react-query";
import { getCarts } from "../../API/CartAPI";

const useCarts = () => {
  return useQuery("carts", getCarts);
};

export default useCarts;
