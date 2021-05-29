import { QueryClient, useMutation } from "react-query";
import { decreaseProductQtyOnCart } from "../../API/CartAPI";

const useDecreaseProductQtyOnCart = () => {
  const queryClient = new QueryClient();

  return useMutation(decreaseProductQtyOnCart, {
    onSuccess: () => {
      queryClient.invalidateQueries("carts");
    },
  });
};

export default useDecreaseProductQtyOnCart;
