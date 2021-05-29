import { QueryClient, useMutation } from "react-query";
import { useHistory } from "react-router";
import { addShop } from "../../API/ShopAPI";

const useAddShop = () => {
  const queryClient = new QueryClient();
  const history = useHistory();

  return useMutation(addShop, {
    onSuccess: () => {
      queryClient.invalidateQueries("shops");
      history.push("/shops");
    },
  });
};

export default useAddShop;
