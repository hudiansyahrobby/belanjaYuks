import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

type TitleProps = HeadingProps & {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <Heading
      as="h1"
      color="gray.700"
      fontSize="4xl"
      fontWeight="extrabold"
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default Title;
