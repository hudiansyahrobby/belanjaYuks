import { QueryClient, useMutation } from "react-query";
import { useHistory } from "react-router";
import { addProduct } from "../../API/ProductAPI";

const useAddProduct = () => {
  const queryClient = new QueryClient();
  const history = useHistory();

  return useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      history.push("/products");
    },
  });
};

export default useAddProduct;
