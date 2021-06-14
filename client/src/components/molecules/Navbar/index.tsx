import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../../atoms/Logo";
import NavMenus from "../NavMenus";
import SidebarMenu from "../SidebarMenu";

const Navbar: React.FC = () => {
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
      <SidebarMenu />
      <Box display={{ base: "none", lg: "block" }}>
        <NavMenus />
      </Box>
    </Flex>
  );
};
export default Navbar;
