import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../molecules/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" px="0" mt="14">
        {children}
      </Container>
    </>
  );
};

export default Layout;
