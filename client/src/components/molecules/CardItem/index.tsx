import { VStack, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import Card from "../../atoms/Card";
import LinkNavigation from "../../atoms/LinkNavigation";
import StarRatings from "react-star-ratings";
import { ProductData } from "../../../types/ProductType";

interface CardItemProps {
  product: ProductData;
  isLoading: boolean;
}

const CardItem: React.FC<CardItemProps> = ({ product, isLoading }) => {
  return (
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
  );
};

export default CardItem;
