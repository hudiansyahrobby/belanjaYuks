import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import useFavorites from "../../../hooks/Favorite/useFavorites";
import { ProductData } from "../../../types/ProductType";
import AlertMessage from "../../atoms/AlertMessage";
import Card from "../../atoms/Card";
import Layout from "../../atoms/Layout";
import LinkNavigation from "../../atoms/LinkNavigation";
import Loading from "../../atoms/Loading";
import Title from "../../atoms/typography/Title";

const FavoriteTemplate = () => {
  const {
    isLoading,
    data: favorites,
    isError,
    error,
    isFetching,
  } = useFavorites();
  const customError: any = error;
  const appError = customError?.response?.data?.message;

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (
    <Layout>
      <Box mt="120px">
        <Title textAlign="center">Your Favorites</Title>
        {isError ? (
          <AlertMessage
            title="Something Went Wrong"
            description={appError}
            status="error"
          />
        ) : (
          <SimpleGrid
            columns={{ sm: 2, md: 4, xl: 5 }}
            spacing="20px"
            mx="20px"
            my="30px"
            justifyItems="center"
          >
            {favorites?.products?.map((product: ProductData) => {
              return (
                <Card
                  key={product.id}
                  isLoading={isLoading}
                  to={`/products/${product.id}`}
                  title={product.name}
                  image={product.images[0]}
                  buttonText="See Products"
                >
                  <VStack spacing="5px" align="left" mt="5px">
                    <Text fontWeight="thin">${product.price}</Text>
                    <Flex alignItems="center">
                      <AiOutlineShop />{" "}
                      <LinkNavigation
                        ml="8px"
                        to={`/shop?shopId=${product.seller.id}`}
                      >
                        {product.seller.name}
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
              );
            })}
          </SimpleGrid>
        )}
      </Box>
    </Layout>
  );
};

export default FavoriteTemplate;
