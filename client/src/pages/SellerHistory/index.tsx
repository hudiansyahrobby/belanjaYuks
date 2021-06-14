import { Box } from "@chakra-ui/layout";
import React from "react";
import Layout from "../../components/atoms/Layout";
import SellerHistoryTemplate from "../../components/templates/SellerHistoryTemplate";

const SellerHistory = () => {
  return (
    <Layout>
      <Box mt="100px">
        <SellerHistoryTemplate />
      </Box>
    </Layout>
  );
};

export default SellerHistory;
