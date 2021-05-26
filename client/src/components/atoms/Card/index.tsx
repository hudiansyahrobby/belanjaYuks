import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import LinkNavigation from "../LinkNavigation";
import Subtitle from "../typography/Subtitle";

interface CardProps {
  title: string;
  image: string;
  subtitle?: string;
  buttonText?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  buttonText,
  children,
}) => {
  return (
    <Box width="250px">
      <Image
        borderRadius="3xl"
        width="full"
        src={image}
        alt={title}
        fallbackSrc="https://via.placeholder.com/150"
      />
      <LinkNavigation
        display="block"
        to="/"
        fontSize="18px"
        mt="15px"
        fontWeight="semibold"
        textAlign={!buttonText ? "center" : "left"}
      >
        {title}
      </LinkNavigation>

      {subtitle && (
        <>
          <Subtitle fontSize="sm" fontWeight="thin" mt="10px">
            {subtitle}
          </Subtitle>
        </>
      )}

      {children}

      {buttonText && <Button mt="10px">{buttonText}</Button>}
    </Box>
  );
};

export default Card;
