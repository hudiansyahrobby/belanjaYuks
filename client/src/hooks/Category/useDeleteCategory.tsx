import { QueryClient, useMutation } from "react-query";
import { deleteCategory } from "../../API/CategoryAPI";

const useDeleteCategory = () => {
  const queryClient = new QueryClient();
  return useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
    },
  });
};

export default useDeleteCategory;
