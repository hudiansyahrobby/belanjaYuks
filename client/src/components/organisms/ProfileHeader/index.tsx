import React from "react";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import Subtitle from "../../atoms/typography/Subtitle";

const ProfileHeader = () => {
  return (
    <Flex
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex alignItems="center">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="2xl"
        />
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
