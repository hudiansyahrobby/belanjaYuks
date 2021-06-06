import { QueryClient, useMutation } from "react-query";
import { addShop } from "../../API/ShopAPI";
import useLogout from "../Auth/useLogout";

const useAddShop = () => {
  const queryClient = new QueryClient();
  const { mutateAsync: logout } = useLogout();

  return useMutation(addShop, {
    onSuccess: () => {
      queryClient.invalidateQueries("shops");
      logout();
    },
  });
};

export default useAddShop;
