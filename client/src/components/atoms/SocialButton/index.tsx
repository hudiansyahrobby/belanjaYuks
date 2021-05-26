import { SimpleGrid, Button } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

interface SocialButtonProps {}

const SocialButton: React.FC<SocialButtonProps> = ({}) => {
  return (
    <SimpleGrid columns={2} spacing={5} alignItems="center" my="30px">
      <Button
        leftIcon={<FaFacebook />}
        backgroundColor="blue.600"
        _hover={{ backgroundColor: "blue.700" }}
      >
        Signup With Facebook
      </Button>
      <Button
        leftIcon={<FaGoogle />}
        backgroundColor="red.500"
        _hover={{ backgroundColor: "red.700" }}
      >
        Signup With Google
      </Button>
    </SimpleGrid>
  );
};

export default SocialButton;
