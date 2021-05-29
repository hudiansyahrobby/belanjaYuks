import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LinkNavigation from "../../atoms/LinkNavigation";
import Title from "../../atoms/typography/Title";
import ShopCard from "../../molecules/ShopCard";

const ShopList = () => {
  return (
    <Box mt="100px" mx="20px">
      <Flex alignItems="center">
        <Title>Best Shops</Title>
        <LinkNavigation to="/" ml="20px">
          See Others
        </LinkNavigation>
      </Flex>
      <ShopCard />
    </Box>
  );
};

export default ShopList;
