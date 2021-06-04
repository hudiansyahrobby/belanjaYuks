import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import ProfileAvatar from "../../molecules/ProfileAvatar";

const ProfileHeader = () => {
  const userItem = localStorage.getItem("user");

  if (!userItem) {
    return <Redirect to="/dashboard" />;
  }

  const user = JSON.parse(userItem);
  const name = user.firstName + " " + user.lastName;

  return (
    <Flex
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <ProfileAvatar name={name} subtitle={user.email} />

      <Button
        as={Link}
        to="/shops/create"
        mt={{ base: "30px", md: 0 }}
        width={{ base: "full", md: "max-content" }}
      >
        Create Shop
      </Button>
    </Flex>
  );
};

export default ProfileHeader;
