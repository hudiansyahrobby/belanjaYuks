import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface HeroImageProps {
  image: string;
  title: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ image, title }) => {
  return (
    <Image
      borderRadius="3xl"
      width="full"
      src={image}
      alt={title}
      fallbackSrc="https://via.placeholder.com/150"
    />
  );
};

export default HeroImage;
