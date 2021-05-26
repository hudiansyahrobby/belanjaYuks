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

const FavoriteTemplate = () => {
  return (
    <Layout>
      <Box mt="120px">
        <Title textAlign="center">Your Favorites</Title>
        <HStack spacing="20px" my="30px">
          <Card
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
    </Layout>
  );
};

export default FavoriteTemplate;
