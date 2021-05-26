import { chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Image } from "../../../assets/images/login.svg";
import Layout from "../../atoms/Layout";
import LoginForm from "../../molecules/LoginForm";

const LoginTemplate = () => {
  const LoginImage = chakra(Image);

  return (
    <Layout>
      <SimpleGrid columns={2} spacing={10} alignItems="center" my="20">
        <LoginForm />

        <Flex alignItems="center" justifyContent="center" mt="50px">
          <LoginImage width="full" height="70vh" />
        </Flex>
      </SimpleGrid>
    </Layout>
  );
};

export default LoginTemplate;
