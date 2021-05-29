import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LinkNavigation from "../../atoms/LinkNavigation";
import Title from "../../atoms/typography/Title";
import BestProductsCard from "../../molecules/BestProductsCard";

interface ProductListProps {}

const BestProductList: React.FC<ProductListProps> = ({}) => {
  return (
    <Box mt="100px" mx="20px">
      <Flex alignItems="center">
        <Title>Best Products</Title>
        <LinkNavigation to="/" ml="20px">
          See Others
        </LinkNavigation>
      </Flex>
      <BestProductsCard />
    </Box>
  );
};

export default BestProductList;
