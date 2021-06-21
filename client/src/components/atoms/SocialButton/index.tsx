import { SimpleGrid, Button } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialButton = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={5}
      alignItems="center"
      my="30px"
      role="social-button"
    >
      <Button
        leftIcon={<FaFacebook />}
        backgroundColor="blue.600"
        _hover={{ backgroundColor: "blue.700" }}
        role="facebook-button"
      >
        Signup With Facebook
      </Button>
      <Button
        leftIcon={<FaGoogle />}
        backgroundColor="red.500"
        _hover={{ backgroundColor: "red.700" }}
        role="google-button"
      >
        Signup With Google
      </Button>
    </SimpleGrid>
  );
};

export default SocialButton;
