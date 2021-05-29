import { QueryClient, useMutation } from "react-query";
import { useHistory } from "react-router";
import { deleteProductById } from "../../API/ProductAPI";

const useDeleteProduct = () => {
  const history = useHistory();
  const queryClient = new QueryClient();
  return useMutation(deleteProductById, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      history.push("/products");
    },
  });
};

export default useDeleteProduct;
