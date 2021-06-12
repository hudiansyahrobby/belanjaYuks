import { QueryClient, useMutation } from "react-query";
import { createHistory } from "../../API/CheckoutAPI";

const useAddHistory = () => {
  const queryClient = new QueryClient();
  return useMutation(createHistory, {
    onSuccess: () => {
      queryClient.invalidateQueries("histories");
      queryClient.invalidateQueries("user-histories");
    },
  });
};

export default useAddHistory;
