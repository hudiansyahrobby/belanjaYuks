import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import Card from "../../atoms/Card";
import Layout from "../../atoms/Layout";
import LinkNavigation from "../../atoms/LinkNavigation";
import MenuSelect from "../../atoms/MenuSelect";
import Title from "../../atoms/typography/Title";
import FilterBox from "../../molecules/FilterBox";

const ProductsTemplate = () => {
  return (
    <Layout>
      <Grid
        mt="130px"
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} mt="120px">
          <FilterBox />
        </GridItem>
        <GridItem colSpan={4}>
          <Box>
            <Title textAlign="center">Product List</Title>
            <Flex justifyContent="flex-end" mt="10px">
              <MenuSelect />
            </Flex>
            <HStack spacing="20px" my="30px">
              <Card
                to="/products/1"
                title="Keyboard Warrior"
                image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                buttonText="See Products"
              >
                <VStack spacing="5px" align="left" mt="5px">
                  <Text fontWeight="thin">$5.43</Text>
                  <Flex alignItems="center">
                    <AiOutlineShop />{" "}
                    <LinkNavigation ml="8px" to="/">
                      Toko Uncle Moto
                    </LinkNavigation>
                  </Flex>
                  <StarRatings
                    rating={5}
                    starRatedColor="#FBBF24"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                    name="rating"
                  />
                </VStack>
              </Card>

              <Card
                to="/products/1"
                title="Keyboard Warrior"
                image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                buttonText="See Products"
              >
                <VStack spacing="5px" align="left" mt="5px">
                  <Text fontWeight="thin">$5.43</Text>
                  <Flex alignItems="center">
                    <AiOutlineShop />{" "}
                    <LinkNavigation ml="8px" to="/">
                      Toko Uncle Moto
                    </LinkNavigation>
                  </Flex>
                  <StarRatings
                    rating={5}
                    starRatedColor="#FBBF24"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                    name="rating"
                  />
                </VStack>
              </Card>

              <Card
                to="/products/1"
                title="Keyboard Warrior"
                image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                buttonText="See Products"
              >
                <VStack spacing="5px" align="left" mt="5px">
                  <Text fontWeight="thin">$5.43</Text>
                  <Flex alignItems="center">
                    <AiOutlineShop />{" "}
                    <LinkNavigation ml="8px" to="/">
                      Toko Uncle Moto
                    </LinkNavigation>
                  </Flex>
                  <StarRatings
                    rating={5}
                    starRatedColor="#FBBF24"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                    name="rating"
                  />
                </VStack>
              </Card>

              <Card
                to="/products/1"
                title="Keyboard Warrior"
                image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                buttonText="See Products"
              >
                <VStack spacing="5px" align="left" my="5px">
                  <Text fontWeight="thin">$5.43</Text>
                  <Flex alignItems="center">
                    <AiOutlineShop />{" "}
                    <LinkNavigation ml="8px" to="/">
                      Toko Uncle Moto
                    </LinkNavigation>
                  </Flex>
                  <StarRatings
                    rating={5}
                    starRatedColor="#FBBF24"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                    name="rating"
                  />
                </VStack>
              </Card>

              <Card
                to="/products/1"
                title="Keyboard Warrior"
                image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                buttonText="See Products"
              >
                <VStack spacing="5px" align="left" mt="5px">
                  <Text fontWeight="thin">$5.43</Text>
                  <Flex alignItems="center">
                    <AiOutlineShop />{" "}
                    <LinkNavigation ml="8px" to="/">
                      Toko Uncle Moto
                    </LinkNavigation>
                  </Flex>
                  <StarRatings
                    rating={5}
                    starRatedColor="#FBBF24"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                    name="rating"
                  />
                </VStack>
              </Card>
            </HStack>
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
