import { QueryClient, useMutation } from "react-query";
import { addProductToCart } from "../../API/CartAPI";

const useAddToCart = () => {
  const queryClient = new QueryClient();

  return useMutation(addProductToCart, {
    onSuccess: () => {
      queryClient.invalidateQueries("carts");
    },
  });
};

export default useAddToCart;
