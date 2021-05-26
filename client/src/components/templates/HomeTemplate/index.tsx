import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Card from "../../atoms/Card";
import Layout from "../../atoms/Layout";
import LinkNavigation from "../../atoms/LinkNavigation";
import Title from "../../atoms/typography/Title";
import Cards from "../../molecules/Cards";
import Hero from "../../organisms/Hero";
import { AiOutlineShop } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import { Button } from "@chakra-ui/button";

const HomeTemplate = () => {
  return (
    <Layout>
      <Hero />
      <Box mt="100px">
        <Title>Product Categories</Title>
        <Cards />
      </Box>

      <Box mt="100px">
        <Flex alignItems="center">
          <Title>Best Products</Title>
          <LinkNavigation to="/" ml="20px">
            See Others
          </LinkNavigation>
        </Flex>
        <HStack spacing="20px" my="30px">
          <Card
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Buy Now"
          />
          <Card
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Buy Now"
          />
          <Card
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Buy Now"
          />
          <Card
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Buy Now"
          />
          <Card
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Buy Now"
          />
        </HStack>
      </Box>

      <Box mt="100px">
        <Flex alignItems="center">
          <Title>Best Shops</Title>
          <LinkNavigation to="/" ml="20px">
            See Others
          </LinkNavigation>
        </Flex>
        <HStack spacing="20px" my="30px">
          <Card
            title="Toko Uncle Moto"
            image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Visit Shop"
          />

          <Card
            title="Toko Uncle Moto"
            image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Visit Shop"
          />

          <Card
            title="Toko Uncle Moto"
            image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Visit Shop"
          />

          <Card
            title="Toko Uncle Moto"
            image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Visit Shop"
          />

          <Card
            title="Toko Uncle Moto"
            image="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et libero placeat sed voluptate laboriosam adipisci modi quidem autem consectetur. Ad accusamus vitae qui animi delectus exercitationem ducimus consectetur deserunt beatae."
            buttonText="Visit Shop"
          />
        </HStack>
      </Box>

      <Box mt="100px">
        <Title textAlign="center">Product List</Title>
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

export default HomeTemplate;
