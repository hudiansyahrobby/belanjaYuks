import { QueryClient, useMutation } from "react-query";
import { useHistory } from "react-router";
import { updateProductById } from "../../API/ProductAPI";

const useUpdateProduct = () => {
  const history = useHistory();
  const queryClient = new QueryClient();
  return useMutation(updateProductById, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      history.push("/seller/products");
    },
  });
};

export default useUpdateProduct;
