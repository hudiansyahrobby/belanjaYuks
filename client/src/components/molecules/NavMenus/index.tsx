import { Button, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  buyerLink,
  guestLink,
  sellerLink,
  adminLink,
} from "../../../constants/link";
import useAuthenticated from "../../../hooks/Auth/useAuthenticated";
import useLogout from "../../../hooks/Auth/useLogout";
import NavMenu from "../../atoms/NavMenu";

const NavMenus = () => {
  const { isAuthenticated, role } = useAuthenticated();
  const { isError, error, isLoading, mutateAsync } = useLogout();

  const onLogout = async () => {
    await mutateAsync();
  };

  const toast = useToast();
  if (isError) {
    const appError: any = error;
    toast({
      title: "Failed Logout",
      description: appError.response.data.message,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <>
      {!isAuthenticated &&
        guestLink.map(({ link, title }) => (
          <NavMenu link={link} title={title} key={title} />
        ))}

      {role === "buyer" &&
        buyerLink.map(({ link, title }) => (
          <NavMenu link={link} title={title} key={title} />
        ))}

      {role === "seller" &&
        sellerLink.map(({ link, title }) => (
          <NavMenu link={link} title={title} key={title} />
        ))}

      {role === "admin" &&
        adminLink.map(({ link, title }) => (
          <NavMenu link={link} title={title} key={title} />
        ))}

      {!isAuthenticated ? (
        <>
          <Button mx="4" as={Link} to="/signup">
            Sign Up
          </Button>
          <Button variant="outline" as={Link} to="/login">
            Log in
          </Button>
        </>
      ) : (
        <Button mx="4" isLoading={isLoading} onClick={onLogout}>
          Logout
        </Button>
      )}
    </>
  );
};

export default NavMenus;
