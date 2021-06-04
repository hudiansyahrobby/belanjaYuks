import { Box } from "@chakra-ui/layout";
import React from "react";
import Layout from "../../components/atoms/Layout";
import AdminShopListTemplate from "../../components/templates/AdminShopListTemplate";

const AdminShopList = () => {
  return (
    <Layout>
      <Box mt="120px">
        <AdminShopListTemplate />
      </Box>
    </Layout>
  );
};

export default AdminShopList;
