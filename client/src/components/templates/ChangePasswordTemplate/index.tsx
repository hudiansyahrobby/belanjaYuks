import { Box, chakra, Flex } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Image } from "../../../assets/images/change_password.svg";
import Layout from "../../atoms/Layout";
import ChangePasswordForm from "../../molecules/ChangePasswordForm";

const ChangePasswordTemplate = () => {
  const ChangePasswordImage = chakra(Image);

  return (
    <Layout>
      <Box mx="20px">
        <Flex alignItems="center" justifyContent="center" mt="100px">
          <ChangePasswordImage width="full" height="300px" />
        </Flex>
        <ChangePasswordForm />
      </Box>
    </Layout>
  );
};

export default ChangePasswordTemplate;
