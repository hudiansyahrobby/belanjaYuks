import { Image } from "@chakra-ui/image";
import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import CircleButton from "../../atoms/CircleButton";
import LinkNavigation from "../../atoms/LinkNavigation";
import ChangeQuantityButton from "../ChangeQuantityButton";
import { RiDeleteBin6Line } from "react-icons/ri";

interface CartCardProps {
  image: string;
  title: string;
  price: number;
}

const CartCard: React.FC<CartCardProps> = ({ image, title, price }) => {
  return (
    <SimpleGrid columns={2} w="500px" mt="30px">
      <Image
        borderRadius="3xl"
        width="full"
        src={image}
        alt={title}
        fallbackSrc="https://via.placeholder.com/150"
      />
      <VStack ml="20px" spacing="8px" align="left">
        <LinkNavigation to="/" fontWeight="extrabold" fontSize="20px">
          {title}
        </LinkNavigation>
        <Text fontWeight="semibold" fontSize="17px" color="gray.800" mb="10px">
          ${price}
        </Text>
        <Flex justifyContent="space-between">
          <ChangeQuantityButton quantity={2} />
          <CircleButton
            icon={<RiDeleteBin6Line />}
            variant="outline"
            backgroundColor="gray.200"
          />
        </Flex>
      </VStack>
    </SimpleGrid>
  );
};

export default CartCard;
