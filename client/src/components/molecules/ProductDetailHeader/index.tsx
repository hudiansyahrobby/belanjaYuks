import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { GiBoxUnpacking } from "react-icons/gi";
import StarRatings from "react-star-ratings";
import LinkNavigation from "../../atoms/LinkNavigation";
import Price from "../../atoms/typography/Price";
import ChangeQuantityButton from "../ChangeQuantityButton";

interface ProductDetailHeaderProps {}

const ProductDetailHeader: React.FC<ProductDetailHeaderProps> = ({}) => {
  return (
    <VStack spacing="8px" align="flex-start">
      <Heading as="h1" fontSize="27px">
        Casual Shoes
      </Heading>
      <Flex alignItems="flex-end">
        <Box>
          <StarRatings
            rating={5}
            starRatedColor="#FBBF24"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
            name="rating"
          />
        </Box>

        <Text color="gray.400" ml="10px" lineHeight="20px">
          (4.5) 5 reviews
        </Text>
      </Flex>

      <Price price={5.43} />
      <Divider />
      <Flex alignItems="center">
        <AiOutlineShop />{" "}
        <LinkNavigation ml="8px" to="/">
          Toko Uncle Moto
        </LinkNavigation>
      </Flex>

      <Flex alignItems="center">
        <GiBoxUnpacking />{" "}
        <Text ml="8px" to="/" fontSize="15px">
          Delivered From Jakarta
        </Text>
      </Flex>
      <Box py="15px">
        <ChangeQuantityButton quantity={1} />
      </Box>
      <Button>Add To Cart</Button>
    </VStack>
  );
};

export default ProductDetailHeader;
