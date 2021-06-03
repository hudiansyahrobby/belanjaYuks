import { Flex, Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import Subtitle from "../../atoms/typography/Subtitle";

const ProfileAvatar = () => {
  return (
    <Flex alignItems="center">
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="2xl" />
      <Box ml="40px">
        <Text
          as="h1"
          color="gray.700"
          fontSize={{ base: "20px", sm: "24px", md: "4xl" }}
          fontWeight="extrabold"
        >
          Wim Mostmans
        </Text>
        <Subtitle fontSize={{ base: "15px" }}>Jakarta, Indonesia</Subtitle>
      </Box>
    </Flex>
  );
};

export default ProfileAvatar;
