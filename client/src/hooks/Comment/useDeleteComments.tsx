import { QueryClient, useMutation } from "react-query";
import { deleteCommentById } from "../../API/CommentAPI";

const useDeleteComments = (productId: string) => {
  const queryClient = new QueryClient();
  return useMutation(deleteCommentById, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", productId]);
    },
  });
};

export default useDeleteComments;
