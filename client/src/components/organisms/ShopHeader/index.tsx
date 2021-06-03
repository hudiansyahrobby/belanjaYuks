import { Flex } from "@chakra-ui/react";
import React from "react";
import ProfileAvatar from "../../molecules/ProfileAvatar";

const ShopHeader = () => {
  return (
    <Flex
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <ProfileAvatar />
    </Flex>
  );
};

export default ShopHeader;
