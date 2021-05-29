import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Logo from "../../atoms/Logo";
import NavMenus from "../NavMenus";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      py="4"
      px="8"
      position="fixed"
      boxShadow="md"
      zIndex={50}
      width="full"
      bgColor="white"
      top="0"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo title="BelanjaYuks" />
      <Box>
        <NavMenus />
      </Box>
    </Flex>
  );
};
export default Navbar;
