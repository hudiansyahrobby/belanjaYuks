import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = ({ price }) => {
  return (
    <Flex>
      <Text fontWeight="extrabold" color="gray.600" fontSize="xl">
        $
      </Text>
      <Heading fontSize="4xl">{price}</Heading>
    </Flex>
  );
};

export default Price;
