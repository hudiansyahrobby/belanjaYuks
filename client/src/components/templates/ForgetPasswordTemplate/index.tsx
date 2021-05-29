import { Box, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Image } from "../../../assets/images/forgot_password.svg";
import Layout from "../../atoms/Layout";
import ForgotPasswordForm from "../../molecules/ForgotPasswordForm";

const ForgetPasswordTemplate = () => {
  const ForgotPasswordImage = chakra(Image);

  return (
    <Layout>
      <Box mx="20px">
        <Flex alignItems="center" justifyContent="center" mt="100px">
          <ForgotPasswordImage width="full" height="300px" />
        </Flex>
        <ForgotPasswordForm />
      </Box>
    </Layout>
  );
};

export default ForgetPasswordTemplate;
