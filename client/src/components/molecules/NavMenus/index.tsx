import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { link } from "../../../constants/link";
import NavMenu from "../../atoms/NavMenu";

const NavMenus = () => {
  return (
    <>
      {link.map(({ link, title }) => (
        <NavMenu link={link} title={title} />
      ))}
      <>
        <Button mx="4" as={Link} to="/signup">
          Sign Up
        </Button>
        <Button variant="outline" as={Link} to="/login">
          Log in
        </Button>
      </>
    </>
  );
};

export default NavMenus;
