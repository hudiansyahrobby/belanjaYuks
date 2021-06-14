import { Box } from "@chakra-ui/layout";
import React from "react";
import Layout from "../../components/atoms/Layout";
import SellerDashboardTemplate from "../../components/templates/SellerDashboardTemplate";

const SellerDashboard = () => {
  return (
    <Layout>
      <Box mt="120px">
        <SellerDashboardTemplate />
      </Box>
    </Layout>
  );
};

export default SellerDashboard;
