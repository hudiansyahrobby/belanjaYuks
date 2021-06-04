import { Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { useParams } from "react-router";
import StarRatings from "react-star-ratings";
import useGetProductByShop from "../../../hooks/Shop/useGetProductByShop";
import { ProductData } from "../../../types/ProductType";
import AlertMessage from "../../atoms/AlertMessage";
import Card from "../../atoms/Card";
import LinkNavigation from "../../atoms/LinkNavigation";

const ProductShopCard = () => {
  const params: any = useParams();
  const { shopId } = params;

  const {
    isLoading,
    data: products,
    isError: isProductsError,
  } = useGetProductByShop(shopId);

  if (isProductsError) {
    return (
      <AlertMessage
        title="Error"
        description="Something Went Wrong"
        status="error"
      />
    );
  }
  return (
    <>
      {products?.pages[0].results.length > 0 ? (
        <>
          <SimpleGrid
            columns={{ sm: 2, md: 4, xl: 5 }}
            spacing="20px"
            my="30px"
            justifyItems="center"
          >
            {products?.pages?.map((_products: any) => {
              return _products.results.map((product: ProductData) => (
                <Card
                  key={product.id}
                  isLoading={isLoading}
                  to={`/products/${product.id}`}
                  title={product.name}
                  image={product.images}
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
              ));
            })}
          </SimpleGrid>
          <Button
            variant="outline"
            mx="auto"
            display="block"
            my="40px"
            colorScheme="telegram"
          >
            Load More
          </Button>
        </>
      ) : (
        <Text textAlign="center">Product is empty</Text>
      )}
    </>
  );
};

export default ProductShopCard;
