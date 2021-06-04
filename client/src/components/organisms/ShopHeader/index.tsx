import { Flex } from "@chakra-ui/react";
import React from "react";
import ProfileAvatar from "../../molecules/ProfileAvatar";

type ShopHeaderProps = {
  name: string;
  subtitle: string;
  image: string;
};

const ShopHeader: React.FC<ShopHeaderProps> = ({ name, subtitle, image }) => {
  return (
    <Flex
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <ProfileAvatar subtitle={subtitle} name={name} image={image} />
    </Flex>
  );
};

export default ShopHeader;
