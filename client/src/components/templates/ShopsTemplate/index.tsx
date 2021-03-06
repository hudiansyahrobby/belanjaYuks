import { Button } from "@chakra-ui/button";
import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import useShops from "../../../hooks/Shop/useShops";
import { ShopData } from "../../../types/ShopType";
import AlertMessage from "../../atoms/AlertMessage";
import Card from "../../atoms/Card";
import Layout from "../../atoms/Layout";
import Title from "../../atoms/typography/Title";

const ShopsTemplate = () => {
  const {
    isLoading,
    data: shops,
    isError: isShopsError,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useShops();

  const appError = (error as any)?.response.data?.message;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <Layout>
      <Grid
        mt={{ base: "100px", md: "130px" }}
        h="200px"
        mx="20px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={5} mt={{ base: "30px", md: 0 }}>
          <Box>
            <Title textAlign="center">Shop List</Title>
            {/* <Flex justifyContent="flex-end" mt="20px">
              <MenuSelect />
            </Flex> */}

            {isShopsError ? (
              <AlertMessage
                title="Something Went Wrong"
                description={appError}
                status="error"
              />
            ) : (
              <>
                <SimpleGrid
                  columns={{ sm: 2, md: 4, xl: 5 }}
                  spacing="20px"
                  my="30px"
                  justifyItems="center"
                >
                  {shops?.pages?.map((_shops) => {
                    return _shops.results.map((shop: ShopData) => (
                      <Card
                        key={shop.id}
                        isLoading={isLoading}
                        to={`/shops/${shop.id}`}
                        title={shop.name}
                        image={shop.images[0]}
                        subtitle={shop.description}
                        buttonText="Visit Shop"
                      />
                    ));
                  })}
                </SimpleGrid>

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
            )}
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default ShopsTemplate;
