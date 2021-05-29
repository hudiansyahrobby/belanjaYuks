import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Title from "../../atoms/typography/Title";
import ProductsCard from "../../molecules/ProductsCard";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = ({}) => {
  return (
    <Box mt="100px" mx="20px">
      <Title textAlign="center">Product List</Title>
      <ProductsCard />
      <Button
        variant="outline"
        mx="auto"
        display="block"
        my="40px"
        colorScheme="telegram"
      >
        Load More
      </Button>
    </Box>
  );
};

export default ProductList;
