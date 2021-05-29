import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import CardSkeleton from "../CardSkeleton";
import LinkNavigation from "../LinkNavigation";
import Subtitle from "../typography/Subtitle";

interface CardProps {
  title: string;
  image: string;
  subtitle?: string;
  buttonText?: string;
  children?: React.ReactNode;
  to: string;
  isLoading?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  buttonText,
  children,
  to,
  isLoading,
}) => {
  if (isLoading) {
    return <CardSkeleton />;
  }

  return (
    <Box width={{ sm: "200px", xl: "230px" }}>
      <Image
        borderRadius="3xl"
        width="full"
        src={image}
        alt={title}
        fallbackSrc="https://via.placeholder.com/100"
      />
      <LinkNavigation
        display="block"
        to={to}
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
            {subtitle?.substring(0, 200)}...
          </Subtitle>
        </>
      )}

      {children}

      {buttonText && (
        <Button mt="10px" as={Link} to={to}>
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default Card;
