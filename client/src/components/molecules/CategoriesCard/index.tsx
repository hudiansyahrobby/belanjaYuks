import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Card from "../../atoms/Card";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperCore, { Scrollbar, A11y } from "swiper";
import useCategories from "../../../hooks/Category/useCategories";
import { CategoryData } from "../../../types/CategoryType";
import AlertMessage from "../../atoms/AlertMessage";

SwiperCore.use([Scrollbar, A11y]);

const CategoriesCard = () => {
  const { isLoading, isError, data, error } = useCategories();

  const customError: any = error;
  const appError = customError?.response.data?.message;

  return (
    <Box my="30px">
      {isError ? (
        <AlertMessage
          title="Something Went Wrong"
          description={appError}
          status="error"
        />
      ) : (
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
          {data?.map(({ id, name, images }: CategoryData) => (
            <SwiperSlide key={id}>
              <Card
                to={`/products?categoryId=${id}`}
                title={name}
                image={images[0]}
                isLoading={isLoading}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default CategoriesCard;
