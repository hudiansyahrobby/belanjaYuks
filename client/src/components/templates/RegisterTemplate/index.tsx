import { chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Image } from "../../../assets/images/signup.svg";
import Layout from "../../atoms/Layout";
import RegisterForm from "../../molecules/RegisterForm";

const RegisterTemplate = () => {
  const RegisterImage = chakra(Image);

  return (
    <Layout>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        alignItems="center"
        my="20"
        mx="20px"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          display={{ base: "none", md: "flex" }}
        >
          <RegisterImage width="full" height="70vh" />
        </Flex>
        <RegisterForm />
      </SimpleGrid>
    </Layout>
  );
};

export default RegisterTemplate;
