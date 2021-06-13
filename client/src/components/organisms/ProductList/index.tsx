import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Title from "../../atoms/typography/Title";
import ProductsCard from "../../molecules/ProductsCard";

const ProductList = () => {
  return (
    <Box mt="100px" mx="20px">
      <Title textAlign="center">Product List</Title>
      <ProductsCard />
    </Box>
  );
};

export default ProductList;
