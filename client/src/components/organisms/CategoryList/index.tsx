import { Box } from "@chakra-ui/react";
import React from "react";
import Title from "../../atoms/typography/Title";
import CategoriesCard from "../../molecules/CategoriesCard";

interface CategoryListProps {}

const CategoryList: React.FC<CategoryListProps> = ({}) => {
  return (
    <Box mt="100px" mx="20px">
      <Title>Product Categories</Title>
      <CategoriesCard />
    </Box>
  );
};

export default CategoryList;
