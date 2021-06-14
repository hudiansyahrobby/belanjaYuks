import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";
import { useParams } from "react-router";
import useComments from "../../../hooks/Comment/useComments";
import { GetCommentType } from "../../../types/CommentType";
import AlertMessage from "../../atoms/AlertMessage";
import Loading from "../../atoms/Loading";
import CommentCard from "../../molecules/CommentCard";
import CommentForm from "../../molecules/CommentForm";

const CommentCards = () => {
  const { id }: any = useParams();

  const { data, isLoading, error, isError } = useComments(id);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const commentError = (error as any)?.response.data?.message;

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);
  return (
    <>
      <Button
        onClick={onOpen}
        mb="20px"
        display="block"
        marginLeft="auto"
        marginRight="0"
      >
        Add Comment
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CommentForm commentId="" onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>

      {isError ? (
        <AlertMessage title="Error" description={commentError} status="error" />
      ) : (
        <VStack align="left" spacing="30px">
          {data?.comments?.map(
            ({
              id,
              content,
              updatedAt,
              rating,
              commentedBy: { firstName, lastName, id: userId },
            }: GetCommentType) => (
              <CommentCard
                key={id}
                id={id}
                rating={rating}
                name={`${firstName} ${lastName}`}
                content={content}
                time={updatedAt}
                userId={userId}
              />
            )
          )}
        </VStack>
      )}
    </>
  );
};

export default CommentCards;
