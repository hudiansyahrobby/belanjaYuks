import { Box } from "@chakra-ui/layout";
import React from "react";
import Layout from "../../components/atoms/Layout";
import AdminHistoryTemplate from "../../components/templates/AdminHistoryTemplate";

const AdminHistory = () => {
  return (
    <Layout>
      <Box mt="100px">
        <AdminHistoryTemplate />
      </Box>
    </Layout>
  );
};

export default AdminHistory;
