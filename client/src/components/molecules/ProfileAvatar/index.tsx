import { Flex, Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import Subtitle from "../../atoms/typography/Subtitle";

type ProfileAvatarProps = {
  name: string;
  subtitle: string;
  image?: string;
};
const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  name,
  subtitle,
  image,
}) => {
  return (
    <Flex alignItems="center">
      <Avatar name={name} size="2xl" src={image} />
      <Box ml="40px">
        <Text
          as="h1"
          color="gray.700"
          fontSize={{ base: "20px", sm: "24px", md: "4xl" }}
          fontWeight="extrabold"
        >
          {name}
        </Text>
        <Subtitle fontSize={{ base: "15px" }}>{subtitle}</Subtitle>
      </Box>
    </Flex>
  );
};

export default ProfileAvatar;
