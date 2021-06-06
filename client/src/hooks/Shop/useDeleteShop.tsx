import { QueryClient, useMutation } from "react-query";
import { deleteShop } from "../../API/ShopAPI";
import useLogout from "../Auth/useLogout";

const useDeleteShop = () => {
  const queryClient = new QueryClient();
  const { mutateAsync: logout } = useLogout();

  return useMutation(deleteShop, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      logout();
    },
  });
};

export default useDeleteShop;
