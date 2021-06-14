import { Link } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface NavMenuProps {
  link: string;
  title: string;
}
const NavMenu: React.FC<NavMenuProps> = ({ link, title }) => {
  return (
    <Link
      as={NavLink}
      exact
      to={link}
      activeStyle={{ color: "blue.600" }}
      _hover={{
        textDecoration: "none",
        color: "blue.600",
      }}
      fontWeight="bold"
      px={3}
    >
      {title}
    </Link>
  );
};
export default NavMenu;
