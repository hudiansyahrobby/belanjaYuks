import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Layout from "../../atoms/Layout";
import Title from "../../atoms/typography/Title";
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
        {/* <GridItem
          rowSpan={{ base: 1, md: 2 }}
          colSpan={{ base: 5, md: 1 }}
          mt={{ md: "120px" }}
        >
          <FilterBox />
        </GridItem> */}
        <GridItem rowSpan={1} colSpan={5} mt={{ base: "30px", md: 0 }}>
          <Box>
            <Title textAlign="center">Product List</Title>
            {/* <Flex justifyContent="flex-end" mt="20px">
              <MenuSelect />
            </Flex> */}
            <ProductsCard />
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default ProductsTemplate;
