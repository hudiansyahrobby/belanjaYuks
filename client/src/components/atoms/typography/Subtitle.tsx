import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

type SubtitleProps = TextProps & {
  children: React.ReactNode;
};

const Subtitle: React.FC<SubtitleProps> = ({ children, ...props }) => {
  return (
    <Text
      fontWeight="semibold"
      color="gray.600"
      lineHeight="tall"
      {...props}
      role="subtitle"
    >
      {children}
    </Text>
  );
};

export default Subtitle;
