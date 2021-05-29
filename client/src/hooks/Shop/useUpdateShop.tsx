import { QueryClient, useMutation } from "react-query";
import { useHistory } from "react-router";
import { updateShop } from "../../API/ShopAPI";

const useUpdateShop = () => {
  const history = useHistory();
  const queryClient = new QueryClient();
  return useMutation(updateShop, {
    onSuccess: () => {
      queryClient.invalidateQueries("shops");
      history.push("/shops");
    },
  });
};

export default useUpdateShop;
