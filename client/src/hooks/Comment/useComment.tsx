import { useQuery } from "react-query";
import { getComment } from "../../API/CommentAPI";

const useComment = ({
  productId,
  commentId,
}: {
  productId: string;
  commentId: string;
}) => {
  return useQuery(
    ["comments", commentId],
    () => getComment({ commentId, productId }),
    {
      enabled: !!commentId,
    }
  );
};

export default useComment;
