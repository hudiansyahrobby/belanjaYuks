import { Box, Button, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import StarRatings from "react-star-ratings";
import useAddComment from "../../../hooks/Comment/useAddComment";
import useComment from "../../../hooks/Comment/useComment";
import useComments from "../../../hooks/Comment/useComments";
import useUpdateComment from "../../../hooks/Comment/useUpdateComment";
import { CommentType } from "../../../types/CommentType";
import { commentValidation } from "../../../validations/commentValidation";
import AlertMessage from "../../atoms/AlertMessage";
import InputText from "../../atoms/InputText";
import Loading from "../../atoms/Loading";

interface CommentFormProps {
  commentId: string;
  onClose: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ commentId, onClose }) => {
  const { id: productId }: any = useParams();

  const { mutateAsync, isLoading: isUpdateLoading } = useUpdateComment(
    productId
  );

  const {
    mutateAsync: addComment,
    isLoading: isAddCommentLoading,
  } = useAddComment();

  const {
    isLoading: isCommentLoading,
    data,
    isError: isCommentError,
    error: commentError,
  } = useComment({ productId, commentId });

  const getCommentError = (commentError as any)?.response.data?.message;

  const { refetch } = useComments(productId);

  const [rating, setRating] = React.useState(0);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(commentValidation),
  });

  React.useEffect(() => {
    if (data?.comment) {
      setValue("content", data.comment.content);
      setValue("rating", data.comment.rating);
      setRating(data.comment.rating);
    }
  }, [data?.comment, setValue]);

  const onUpdate = handleSubmit(
    async (commentData: Omit<CommentType, "id" | "productId">) => {
      const updatedComment = {
        ...commentData,
        productId,
        id: commentId,
      };

      await mutateAsync(updatedComment, {
        onSuccess: (success) => {
          refetch();
          onClose();
          toast({
            title: "Update Comment",
            description: success.message,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        },
        onError: (error) => {
          const appError: any = error;
          toast({
            title: "Failed Updating Comment",
            description: appError.response.data.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        },
      });
    }
  );

  const onCreate = handleSubmit(
    async (commentData: Omit<CommentType, "id">) => {
      const newComment = {
        ...commentData,
        productId,
      };

      await addComment(newComment, {
        onSuccess: (success) => {
          refetch();
          onClose();
          toast({
            title: "Add New Comment",
            description: success.message,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        },
        onError: (error) => {
          const appError: any = error;
          toast({
            title: "Failed Adding New Comment",
            description: appError.response.data.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        },
      });
    }
  );

  const changeRating = (newRating: number) => {
    setValue("rating", newRating);
    setRating(newRating);
  };

  return (
    <Box
      as="form"
      onSubmit={!!commentId ? onUpdate : onCreate}
      noValidate
      mb="20px"
    >
      {isCommentLoading ? (
        <Loading />
      ) : (
        <>
          {isCommentError ? (
            <AlertMessage
              title="Error"
              description={getCommentError}
              status="error"
            />
          ) : (
            <>
              <Box textAlign="center">
                <StarRatings
                  rating={rating}
                  changeRating={changeRating}
                  starHoverColor="#FBBF24"
                  starRatedColor="#FBBF24"
                  numberOfStars={5}
                  starDimension="40px"
                  starSpacing="1px"
                  name="rating"
                />
              </Box>
              <InputText
                register={{ ...register("content") }}
                required={true}
                error={errors.content?.message}
                label="Your Comment"
                placeholder="Enter your comment"
                type="text"
              />

              <Button
                width="full"
                isLoading={!!commentId ? isUpdateLoading : isAddCommentLoading}
                type="submit"
              >
                {!!commentId ? "Update" : "Add"}
              </Button>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default CommentForm;
