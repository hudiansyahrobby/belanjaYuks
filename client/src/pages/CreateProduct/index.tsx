import { Box } from "@chakra-ui/layout";
import React from "react";
import Layout from "../../components/atoms/Layout";
import CreateProductTemplate from "../../components/templates/CreateProductTemplate";

const CreateProduct = () => {
  return (
    <Layout>
      <Box mt="120px">
        <CreateProductTemplate />
      </Box>
    </Layout>
  );
};

export default CreateProduct;
