import { QueryClient, useMutation } from "react-query";
import { deleteProductOnCart } from "../../API/CartAPI";

const useDeleteFromCart = () => {
  const queryClient = new QueryClient();

  return useMutation(deleteProductOnCart, {
    onSuccess: () => {
      queryClient.invalidateQueries("carts");
    },
  });
};

export default useDeleteFromCart;
