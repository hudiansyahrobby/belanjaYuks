import { QueryClient, useMutation } from "react-query";
import { deleteShopById } from "../../API/ShopAPI";

const useDeleteShopById = () => {
  const queryClient = new QueryClient();
  return useMutation(deleteShopById, {
    onSuccess: () => {
      queryClient.invalidateQueries("shops");
    },
  });
};

export default useDeleteShopById;
