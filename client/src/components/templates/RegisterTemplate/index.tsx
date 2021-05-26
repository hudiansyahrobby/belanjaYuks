import { chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Image } from "../../../assets/images/login.svg";
import Layout from "../../atoms/Layout";
import RegisterForm from "../../molecules/RegisterForm";

const RegisterTemplate = () => {
  const LoginImage = chakra(Image);

  return (
    <Layout>
      <SimpleGrid columns={2} spacing={10} alignItems="center" my="20">
        <RegisterForm />
        <Flex alignItems="center" justifyContent="center">
          <LoginImage width="full" height="70vh" />
        </Flex>
      </SimpleGrid>
    </Layout>
  );
};

export default RegisterTemplate;
