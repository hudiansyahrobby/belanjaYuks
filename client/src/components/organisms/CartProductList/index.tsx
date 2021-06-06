import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "swiper/components/scrollbar/scrollbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import useCarts from "../../../hooks/Cart/useCarts";
import { CartData } from "../../../types/CartType";
import AlertMessage from "../../atoms/AlertMessage";
import LinkNavigation from "../../atoms/LinkNavigation";
import Title from "../../atoms/typography/Title";
import CardItem from "../../molecules/CardItem";

const CartProductList = () => {
  const { isLoading, data: carts, isError: isCartsError } = useCarts();

  if (isCartsError) {
    return (
      <AlertMessage
        title="Error"
        description="Something Went Wrong"
        status="error"
      />
    );
  }

  return (
    <Box mt="100px" mx="20px">
      <Flex alignItems="center">
        <Title>Cart</Title>
        {carts?.products.length > 0 && (
          <LinkNavigation to="/" ml="20px">
            See Others
          </LinkNavigation>
        )}
      </Flex>

      <Box my="30px">
        {carts?.products.length > 0 ? (
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
            {carts?.products?.map((product: CartData) => {
              return (
                <SwiperSlide key={product.id}>
                  <CardItem isLoading={isLoading} product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Text>Cart is empty</Text>
        )}
      </Box>
    </Box>
  );
};

export default CartProductList;
