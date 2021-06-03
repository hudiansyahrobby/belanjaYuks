import React from "react";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import Subtitle from "../../atoms/typography/Subtitle";
import ProfileAvatar from "../../molecules/ProfileAvatar";

const ProfileHeader = () => {
  return (
    <Flex
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <ProfileAvatar />

      <Button
        mt={{ base: "30px", md: 0 }}
        width={{ base: "full", md: "max-content" }}
      >
        Create Shop
      </Button>
    </Flex>
  );
};

export default ProfileHeader;
