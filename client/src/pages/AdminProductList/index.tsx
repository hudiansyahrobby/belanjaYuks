import { Box } from "@chakra-ui/layout";
import React from "react";
import Layout from "../../components/atoms/Layout";
import AdminProductListTemplate from "../../components/templates/AdminProductListTemplate";

const AdminProductList = () => {
  return (
    <Layout>
      <Box mt="120px">
        <AdminProductListTemplate />
      </Box>
    </Layout>
  );
};

export default AdminProductList;
