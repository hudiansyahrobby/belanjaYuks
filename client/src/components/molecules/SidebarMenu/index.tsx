import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";
import NavDrawers from "../NavDrawers";

const SidebarMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Icon
        as={MdMenu}
        w="40px"
        h="40px"
        display={{ lg: "none" }}
        onClick={onOpen}
        _hover={{ cursor: "pointer" }}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Belanja Yuks</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
            <NavDrawers />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
