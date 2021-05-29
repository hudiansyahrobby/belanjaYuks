import { HStack, VStack, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import Card from "../../atoms/Card";
import LinkNavigation from "../../atoms/LinkNavigation";
import StarRatings from "react-star-ratings";
import useProducts from "../../../hooks/Product/useProducts";
import AlertMessage from "../../atoms/AlertMessage";
import { ProductData } from "../../../types/ProductType";

const ProductsCard = () => {
  const { isLoading, data: products, isError: isProductsError } = useProducts();

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
    <SimpleGrid
      columns={{ sm: 2, md: 4, xl: 5 }}
      spacing="20px"
      my="30px"
      justifyItems="center"
    >
      {products?.pages?.map((_products) => {
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
      <Card
        key="adaoudhiuawhdi"
        isLoading={isLoading}
        to={`/products/${1}`}
        title="asndadn"
        image="aushduahdi"
        buttonText="See Products"
      >
        <VStack spacing="5px" align="left" mt="5px">
          <Text fontWeight="thin">$432</Text>
          <Flex alignItems="center">
            <AiOutlineShop />{" "}
            <LinkNavigation ml="8px" to={`/shop?shopId=`}>
              asdhaud
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
        key="adaoudhasdadiuawhdi"
        isLoading={isLoading}
        to={`/products/${1}`}
        title="asndadn"
        image="aushduahdi"
        buttonText="See Products"
      >
        <VStack spacing="5px" align="left" mt="5px">
          <Text fontWeight="thin">$432</Text>
          <Flex alignItems="center">
            <AiOutlineShop />{" "}
            <LinkNavigation ml="8px" to={`/shop?shopId=`}>
              asdhaud
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
        key="adwafagaoudhiuawhdi"
        isLoading={isLoading}
        to={`/products/${1}`}
        title="asndadn"
        image="aushduahdi"
        buttonText="See Products"
      >
        <VStack spacing="5px" align="left" mt="5px">
          <Text fontWeight="thin">$432</Text>
          <Flex alignItems="center">
            <AiOutlineShop />{" "}
            <LinkNavigation ml="8px" to={`/shop?shopId=`}>
              asdhaud
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
        key="adaouasdasgdhiuawhdi"
        isLoading={isLoading}
        to={`/products/${1}`}
        title="asndadn"
        image="aushduahdi"
        buttonText="See Products"
      >
        <VStack spacing="5px" align="left" mt="5px">
          <Text fontWeight="thin">$432</Text>
          <Flex alignItems="center">
            <AiOutlineShop />{" "}
            <LinkNavigation ml="8px" to={`/shop?shopId=`}>
              asdhaud
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
    </SimpleGrid>
  );
};

export default ProductsCard;
