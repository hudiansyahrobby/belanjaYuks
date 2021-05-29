import { QueryClient, useMutation } from "react-query";
import { useHistory } from "react-router";
import { updateCategory } from "../../API/CategoryAPI";

const useUpdateCategory = () => {
  const history = useHistory();
  const queryClient = new QueryClient();
  return useMutation(updateCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
      history.push("/categories");
    },
  });
};

export default useUpdateCategory;
