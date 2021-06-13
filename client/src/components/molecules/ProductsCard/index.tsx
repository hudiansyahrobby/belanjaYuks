import { Flex, SimpleGrid, Text, VStack, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import useProducts from "../../../hooks/Product/useProducts";
import { ProductData } from "../../../types/ProductType";
import AlertMessage from "../../atoms/AlertMessage";
import Card from "../../atoms/Card";
import LinkNavigation from "../../atoms/LinkNavigation";
import { useInView } from "react-intersection-observer";

const ProductsCard = () => {
  const {
    isLoading,
    data: products,
    isError: isProductsError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProducts();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isProductsError) {
    return (
      <AlertMessage
        title="Error"
        description="Something Went Wrong"
        status="error"
      />
    );
  }
  console.log(products?.pages);
  return (
    <>
      {products?.pages[0]?.results?.length > 0 ? (
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
                image={product.images[0]}
                buttonText="See Products"
              >
                <VStack spacing="5px" align="left" mt="5px">
                  <Text fontWeight="thin">${product.price}</Text>
                  <Flex alignItems="center">
                    <AiOutlineShop />{" "}
                    <LinkNavigation ml="8px" to={`/shops/${product.seller.id}`}>
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
      ) : (
        <Text textAlign="center" mt="30px">
          Product is empty
        </Text>
      )}
      <Button
        ref={ref}
        variant="outline"
        mx="auto"
        display="block"
        my="40px"
        colorScheme="telegram"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        isLoading={isFetchingNextPage}
      >
        {hasNextPage ? "Load More" : "Nothing more to load"}
      </Button>
    </>
  );
};

export default ProductsCard;
