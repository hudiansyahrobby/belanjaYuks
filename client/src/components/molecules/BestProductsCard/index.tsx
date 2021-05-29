import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import SwiperCore, { A11y, Scrollbar } from "swiper";
import "swiper/components/scrollbar/scrollbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import useProducts from "../../../hooks/Product/useProducts";
import { ProductData } from "../../../types/ProductType";
import AlertMessage from "../../atoms/AlertMessage";
import Card from "../../atoms/Card";
import LinkNavigation from "../../atoms/LinkNavigation";

SwiperCore.use([Scrollbar, A11y]);

const BestProductsCard = () => {
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
    <Box my="30px">
      <Swiper
        spaceBetween={50}
        navigation
        scrollbar={{ draggable: true }}
        style={{ paddingBottom: "20px" }}
        breakpoints={{
          200: {
            slidesPerView: 2,
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
            spaceBetween: 40,
          },
        }}
      >
        {products?.pages?.map((_products) => {
          return _products.results.map((product: ProductData) => (
            <SwiperSlide key={product.id}>
              <Card
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
            </SwiperSlide>
          ));
        })}
      </Swiper>
    </Box>
  );
};

export default BestProductsCard;
