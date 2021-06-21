import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = ({ price }) => {
  return (
    <Flex role="price">
      <Text fontWeight="extrabold" color="gray.600" fontSize="xl">
        $
      </Text>
      <Heading fontSize="4xl">{price}</Heading>
    </Flex>
  );
};

export default Price;
