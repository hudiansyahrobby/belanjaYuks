import { Button } from "@chakra-ui/button";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Layout from "../../atoms/Layout";
import MenuSelect from "../../atoms/MenuSelect";
import Title from "../../atoms/typography/Title";
import FilterBox from "../../molecules/FilterBox";
import ProductsCard from "../../molecules/ProductsCard";

const ProductsTemplate = () => {
  return (
    <Layout>
      <Grid
        mt={{ base: "100px", md: "130px" }}
        h="200px"
        mx="20px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={{ base: 1, md: 2 }}
          colSpan={{ base: 5, md: 1 }}
          mt={{ md: "120px" }}
        >
          <FilterBox />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={{ base: 5, md: 4 }}
          mt={{ base: "30px", md: 0 }}
        >
          <Box>
            <Title textAlign="center">Product List</Title>
            <Flex justifyContent="flex-end" mt="20px">
              <MenuSelect />
            </Flex>
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
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default ProductsTemplate;
