import { QueryClient, useMutation } from "react-query";
import { useHistory } from "react-router";
import { deleteShop } from "../../API/ShopAPI";

const useDeleteShop = () => {
  const history = useHistory();
  const queryClient = new QueryClient();
  return useMutation(deleteShop, {
    onSuccess: () => {
      queryClient.invalidateQueries("shops");
      history.push("/shops");
    },
  });
};

export default useDeleteShop;
