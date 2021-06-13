import { Button } from "@chakra-ui/button";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Price from "../../atoms/typography/Price";
import Subtitle from "../../atoms/typography/Subtitle";
import Title from "../../atoms/typography/Title";

interface HeroContentProps {
  title: string;
  subtitle: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ title, subtitle }) => {
  return (
    <VStack spacing="18px" align="start">
      <Title>{title}</Title>
      <Price price={59.99} />
      <Box w={{ md: "md" }}>
        <Subtitle>{subtitle}</Subtitle>
      </Box>
      <Button
        leftIcon={<FaShoppingCart />}
        as={Link}
        to="/products/a376ebe9-18f8-4850-af5d-ff6c87e58a1e"
      >
        Buy Now
      </Button>
      <Flex alignItems="center">
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
        <Text color="gray.500" fontSize="sm" marginLeft="15px">
          5 other people bought it today
        </Text>
      </Flex>
    </VStack>
  );
};

export default HeroContent;
