import { Box } from "@chakra-ui/layout";
import React from "react";
import Layout from "../../components/atoms/Layout";
import AdminDashboardTemplate from "../../components/templates/AdminDashboardTemplate";

const AdminDashboard = () => {
  return (
    <Layout>
      <Box mt="120px">
        <AdminDashboardTemplate />
      </Box>
    </Layout>
  );
};

export default AdminDashboard;
