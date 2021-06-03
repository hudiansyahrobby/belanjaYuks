import { Box } from "@chakra-ui/layout";
import React from "react";
import Layout from "../../components/atoms/Layout";
import CreateShopTemplate from "../../components/templates/CreateShopTemplate";

const CreateShop = () => {
  return (
    <Layout>
      <Box mt="120px">
        <CreateShopTemplate />
      </Box>
    </Layout>
  );
};

export default CreateShop;
