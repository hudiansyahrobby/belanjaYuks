import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Card from "../../atoms/Card";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperCore, { Scrollbar, A11y } from "swiper";

SwiperCore.use([Scrollbar, A11y]);

const CategoriesCard = () => {
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
        <SwiperSlide>
          <Card
            to="/products?categoryId=1"
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            to="/products?categoryId=1"
            title="Sepatu A"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            to="/products?categoryId=1"
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            to="/products?categoryId=1"
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            to="/products?categoryId=1"
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            to="/products?categoryId=1"
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            to="/products?categoryId=1"
            title="Sepatu Sport"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default CategoriesCard;
