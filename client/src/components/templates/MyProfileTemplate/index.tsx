import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../../atoms/Layout";
import ProfileContent from "../../organisms/ProfileContent";
import ProfileHeader from "../../organisms/ProfileHeader";

const MyProfileTemplate = () => {
  return (
    <Layout>
      <Box mt="120px" mx={{ base: "20px", lg: "auto" }} maxWidth="container.lg">
        <ProfileHeader />

        <ProfileContent />
      </Box>
    </Layout>
  );
};

export default MyProfileTemplate;
