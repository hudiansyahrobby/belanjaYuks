import { Box } from "@chakra-ui/layout";
import React from "react";
import Layout from "../../components/atoms/Layout";
import MyHistoryTemplate from "../../components/templates/MyHistoryTemplate";

const MyHistory = () => {
  return (
    <Layout>
      <Box mt="100px">
        <MyHistoryTemplate />
      </Box>
    </Layout>
  );
};

export default MyHistory;
