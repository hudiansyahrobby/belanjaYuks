import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal,
  ButtonProps,
} from "@chakra-ui/react";
import React, { BaseSyntheticEvent } from "react";

type ModalItemProps = ButtonProps & {
  buttonTitle: string;
  modalTitle: string;
  children: React.ReactNode;
  onClick: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  isLoading: boolean;
};

const ModalItem: React.FC<ModalItemProps> = ({
  buttonTitle,
  children,
  modalTitle,
  onClick,
  isLoading,
  ...rest
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} {...rest} isLoading={isLoading}>
        {buttonTitle}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              onClick={onClose}
              colorScheme="blackAlpha"
              variant="outline"
            >
              Close
            </Button>
            <Button
              colorScheme="whatsapp"
              onClick={() => {
                onClick();
                onClose();
              }}
              isLoading={isLoading}
            >
              {buttonTitle}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalItem;
