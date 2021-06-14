import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import { useParams } from "react-router";
import useComments from "../../../hooks/Comment/useComments";
import useDeleteComments from "../../../hooks/Comment/useDeleteComments";
import ModalItem from "../../atoms/Modal";
import CommentForm from "../CommentForm";

interface CommentPopOverProps {
  commentId: string;
}
const CommentPopOver: React.FC<CommentPopOverProps> = ({ commentId }) => {
  const { id }: any = useParams();

  const {
    isLoading: isDeleteLoading,
    mutateAsync: deleteComment,
  } = useDeleteComments(id);

  const { refetch } = useComments(id);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDelete = async () => {
    await deleteComment(
      { productId: id, commentId },
      {
        onSuccess: (success) => {
          refetch();
          onClose();
          toast({
            title: "Delete Comment",
            description: success.message,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        },
        onError: (error) => {
          const appError: any = error;
          toast({
            title: "Failed Deleting Comment",
            description: appError.response.data.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        },
      }
    );
  };

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label="Option"
          backgroundColor="white"
          _hover={{}}
          icon={<FaEllipsisH color="black" size="20px" />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Comment Options</PopoverHeader>
        <PopoverBody>
          <Button
            onClick={onOpen}
            leftIcon={<BsPencil />}
            width="full"
            backgroundColor="yellow.500"
            _hover={{ backgroundColor: "yellow.600" }}
          >
            Edit
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Comment</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <CommentForm commentId={commentId} onClose={onClose} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </PopoverBody>
        <PopoverBody>
          <ModalItem
            buttonTitle="Delete"
            isLoading={isDeleteLoading}
            onClick={onDelete}
            width="full"
            leftIcon={<BsTrash />}
            backgroundColor="red.500"
            _hover={{ backgroundColor: "red.600" }}
            modalTitle="Delete Comment"
          >
            <Text>Are you sure do you want to delete this comment ? </Text>
          </ModalItem>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CommentPopOver;
