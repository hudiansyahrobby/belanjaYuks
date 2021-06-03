import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import LinkNavigation from "../../atoms/LinkNavigation";
import BestProductsCard from "../../molecules/BestProductsCard";

const ProfileContent = () => {
  return (
    <>
      <Flex alignItems="center" mt="30px">
        <Text fontSize="28px" fontWeight="bold">
          Carts
        </Text>
        <LinkNavigation to="/" ml="20px">
          See Others
        </LinkNavigation>
      </Flex>
      <BestProductsCard />

      <Flex alignItems="center" mt="50px">
        <Text fontSize="28px" fontWeight="bold">
          Favorites
        </Text>
        <LinkNavigation to="/" ml="20px">
          See Others
        </LinkNavigation>
      </Flex>
      <BestProductsCard />
    </>
  );
};

export default ProfileContent;
