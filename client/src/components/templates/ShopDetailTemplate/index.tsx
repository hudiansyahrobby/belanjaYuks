import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../../atoms/Layout";
import ShopContent from "../../organisms/ShopContent";
import ShopHeader from "../../organisms/ShopHeader";

const ShopDetailTemplate = () => {
  return (
    <Layout>
      <Box mt="120px" mx={{ base: "20px", lg: "auto" }} maxWidth="container.lg">
        <ShopHeader />

        <ShopContent />
      </Box>
    </Layout>
  );
};

export default ShopDetailTemplate;
