import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Layout from "../../atoms/Layout";
import ProductDetailHeader from "../../molecules/ProductDetailHeader";
import CommentCards from "../../organisms/CommentCards";
import useProduct from "../../../hooks/Product/useProduct";
import { useParams } from "react-router";
import { ProductData } from "../../../types/ProductType";
import Loading from "../../atoms/Loading";
import AlertMessage from "../../atoms/AlertMessage";
import ReactHtmlParser from "react-html-parser";

const ProductsDetailTemplate = () => {
  let params: any = useParams();
  const productId = params.id;

  const { isLoading, data, isError, error } = useProduct(productId);
  const product: ProductData = data;

  const customError: any = error;
  const appError = customError?.response?.data?.message;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      {isError ? (
        <Box mx="20px" mt={{ base: "150px", md: "100px" }}>
          <AlertMessage title="Error" description={appError} status="error" />
        </Box>
      ) : (
        <Box mx="20px">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            maxWidth="1000px"
            mx="auto"
            mt={{ base: "150px", md: "100px" }}
          >
            <Box>
              <Image
                borderRadius="3xl"
                width="full"
                src={product.images[0]}
                alt="Hero"
                fallbackSrc="https://via.placeholder.com/150"
              />
            </Box>
            <ProductDetailHeader product={product} />
          </SimpleGrid>

          <Container my="40px" maxW="container.lg" minHeight="300px">
            <Tabs>
              <TabList>
                <Tab
                  _selected={{
                    color: "gray.800",
                    borderBottomColor: "gray.800",
                  }}
                >
                  Detail
                </Tab>
                <Tab
                  _selected={{
                    color: "gray.800",
                    borderBottomColor: "gray.800",
                  }}
                >
                  Comments
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Text fontSize="15px">
                    {ReactHtmlParser(product.description)}
                  </Text>
                </TabPanel>
                <TabPanel>
                  <CommentCards />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </Box>
      )}
    </Layout>
  );
};

export default ProductsDetailTemplate;
