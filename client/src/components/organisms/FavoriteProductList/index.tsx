import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "swiper/components/scrollbar/scrollbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import useFavorites from "../../../hooks/Favorite/useFavorites";
import { CartData } from "../../../types/CartType";
import AlertMessage from "../../atoms/AlertMessage";
import LinkNavigation from "../../atoms/LinkNavigation";
import Title from "../../atoms/typography/Title";
import CardItem from "../../molecules/CardItem";

const FavoriteProductList = () => {
  const {
    isLoading,
    data: favorites,
    isError: isFavoritesError,
  } = useFavorites();

  if (isFavoritesError) {
    return (
      <AlertMessage
        title="Error"
        description="Something Went Wrong"
        status="error"
      />
    );
  }

  return (
    <Box mx="20px">
      <Flex alignItems="center">
        <Title>Favorites</Title>
        {favorites?.products?.length > 0 && (
          <LinkNavigation to="/favorites" ml="20px">
            See Others
          </LinkNavigation>
        )}
      </Flex>

      <Box my="30px">
        {favorites?.products?.length > 0 ? (
          <Swiper
            spaceBetween={50}
            navigation
            scrollbar={{ draggable: true }}
            style={{ paddingBottom: "20px" }}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              660: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1050: {
                slidesPerView: 5,
                spaceBetween: 200,
              },
            }}
          >
            {favorites?.products?.map((product: CartData) => {
              return (
                <SwiperSlide key={product.id}>
                  <CardItem isLoading={isLoading} product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Text>Favorite item is empty</Text>
        )}
      </Box>
    </Box>
  );
};

export default FavoriteProductList;
