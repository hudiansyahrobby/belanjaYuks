import { QueryClient, useMutation } from "react-query";
import { updateComments } from "../../API/CommentAPI";

const useUpdateComment = (productId: string) => {
  const queryClient = new QueryClient();
  return useMutation(updateComments, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", productId]);
    },
  });
};

export default useUpdateComment;
