import { LinkProps } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React from "react";
import { Link } from "react-router-dom";

type LinkNavigationProps = LinkProps & {
  to: string;
  children: React.ReactNode;
};

const LinkNavigation: React.FC<LinkNavigationProps> = ({
  to,
  children,
  ...props
}) => {
  const LinkNavigation = chakra(Link);

  return (
    <LinkNavigation to={to} _hover={{ color: "blue.500" }} {...props}>
      {children}
    </LinkNavigation>
  );
};

export default LinkNavigation;
