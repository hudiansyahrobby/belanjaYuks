import { Box, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Image } from "../../../assets/images/login.svg";
import Layout from "../../atoms/Layout";
import LoginForm from "../../molecules/LoginForm";

const LoginTemplate = () => {
  const LoginImage = chakra(Image);

  return (
    <Layout>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        mx="20px"
        alignItems="center"
        my="20"
      >
        <LoginForm />

        <Flex
          alignItems="center"
          justifyContent="center"
          mt="50px"
          display={{ base: "none", md: "block" }}
        >
          <LoginImage width="full" height="70vh" />
        </Flex>
      </SimpleGrid>
    </Layout>
  );
};

export default LoginTemplate;
