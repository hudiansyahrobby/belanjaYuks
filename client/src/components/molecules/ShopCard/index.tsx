import { Box } from "@chakra-ui/react";
import React from "react";
import "swiper/components/scrollbar/scrollbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import useShops from "../../../hooks/Shop/useShops";
import { ShopData } from "../../../types/ShopType";
import AlertMessage from "../../atoms/AlertMessage";
import Card from "../../atoms/Card";

const ShopCard = () => {
  const { isLoading, data: shops, isError: isShopsError } = useShops();

  if (isShopsError) {
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
            spaceBetween: 40,
          },
        }}
      >
        {shops?.pages?.map((_shops) => {
          return _shops.results.map((shop: ShopData) => (
            <SwiperSlide key={shop.id}>
              <Card
                key={shop.id}
                isLoading={isLoading}
                to={`/shop?shopId=${shop.id}`}
                title={shop.name}
                image={shop.images}
                subtitle={shop.description}
                buttonText="Visit Shop"
              />
            </SwiperSlide>
          ));
        })}
      </Swiper>
    </Box>
  );
};

export default ShopCard;
