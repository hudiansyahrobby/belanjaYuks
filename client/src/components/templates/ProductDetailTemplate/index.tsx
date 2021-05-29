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
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Layout from "../../atoms/Layout";
import ProductDetailHeader from "../../molecules/ProductDetailHeader";
import CommentCards from "../../organisms/CommentCards";

const ProductsDetailTemplate = () => {
  return (
    <Layout>
      <SimpleGrid
        columns={2}
        spacing={10}
        maxWidth="1000px"
        mx="auto"
        mt="100px"
      >
        <Box>
          <Image
            borderRadius="3xl"
            width="full"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Hero"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
        <ProductDetailHeader />
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda quo id vitae dolor excepturi corrupti impedit ab earum
                voluptas illum. Aliquam atque nulla debitis consequuntur
                possimus. Facere, quisquam. Alias harum voluptatem eos, ullam
                nesciunt velit repellat nisi. Quidem quam doloribus facere, sit
                laudantium adipisci distinctio quia, qui, nisi sint ea?
              </Text>

              <Text fontSize="15px" mt="20px">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda quo id vitae dolor excepturi corrupti impedit ab earum
                voluptas illum. Aliquam atque nulla debitis consequuntur
                possimus. Facere, quisquam. Alias harum voluptatem eos, ullam
                nesciunt velit repellat nisi. Quidem quam doloribus facere, sit
                laudantium adipisci distinctio quia, qui, nisi sint ea?
              </Text>
            </TabPanel>
            <TabPanel>
              <CommentCards />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default ProductsDetailTemplate;
