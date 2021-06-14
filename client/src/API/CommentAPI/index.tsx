import axios from "../../axios";
import { CommentType } from "../../types/CommentType";

export const addComment = async ({
  productId,
  ...comments
}: Omit<CommentType, "id">) => {
  const { data } = await axios.post(
    `/products/${productId}/comments`,
    comments
  );
  return data;
};

export const getComments = async (productId: string) => {
  const { data } = await axios.get(`/products/${productId}/comments`);
  return data;
};

export const getComment = async ({
  productId,
  commentId,
}: {
  productId: string;
  commentId: string;
}) => {
  const { data } = await axios.get(
    `/products/${productId}/comments/${commentId}`
  );
  console.log("DATAKU", data);
  return data;
};

export const updateComments = async ({
  id,
  productId,
  ...comments
}: CommentType) => {
  const { data } = await axios.put(
    `/products/${productId}/comments/${id}`,
    comments
  );
  return data;
};

export const deleteCommentById = async ({
  productId,
  commentId,
}: {
  productId: string;
  commentId: string;
}) => {
  const { data } = await axios.delete(
    `/products/${productId}/comments/${commentId}`
  );
  return data;
};
