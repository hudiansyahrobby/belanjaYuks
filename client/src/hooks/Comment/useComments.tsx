import { useQuery } from "react-query";
import { getComments } from "../../API/CommentAPI";

const useComments = (productId: string) => {
  return useQuery(["comments", productId], () => getComments(productId));
};

export default useComments;
