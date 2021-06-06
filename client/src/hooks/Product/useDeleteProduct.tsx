import { QueryClient, useMutation } from "react-query";
import { deleteProductById } from "../../API/ProductAPI";

const useDeleteProduct = () => {
  const queryClient = new QueryClient();
  return useMutation(deleteProductById, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};

export default useDeleteProduct;
