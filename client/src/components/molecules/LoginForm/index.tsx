import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import useLogin from "../../../hooks/Auth/useLogin";
import { LoginData } from "../../../types/UserType";
import InputPassword from "../../atoms/InputPassword";
import InputText from "../../atoms/InputText";
import LinkNavigation from "../../atoms/LinkNavigation";
import Title from "../../atoms/typography/Title";

const LoginForm = () => {
  const { isLoading, mutateAsync } = useLogin();

  const toast = useToast();

  const { register, handleSubmit } = useForm();

  const onLogin = handleSubmit(async (loginData: LoginData) => {
    await mutateAsync(loginData, {
      onSuccess: () => {
        toast({
          title: "Login Successfully.",
          description: "Your email and password are correct",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      },
      onError: (error) => {
        const appError: any = error;
        toast({
          title: "Failed Login",
          description: appError.response.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  });

  return (
    <Box as="form" onSubmit={onLogin} noValidate>
      <Title my="20px">Login To Your Account</Title>
      <Flex mb="15px">
        <Text fontSize="15px">Do not have an account ? </Text>
        <LinkNavigation to="/signup" ml="5px" fontSize="15px" color="blue.500">
          Signup
        </LinkNavigation>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={5}
        alignItems="center"
        my="30px"
      >
        <Button
          leftIcon={<FaFacebook />}
          backgroundColor="blue.600"
          _hover={{ backgroundColor: "blue.700" }}
        >
          Login With Facebook
        </Button>
        <Button
          leftIcon={<FaGoogle />}
          backgroundColor="red.500"
          _hover={{ backgroundColor: "red.700" }}
        >
          Login With Google
        </Button>
      </SimpleGrid>

      <InputText
        register={{ ...register("email") }}
        required={true}
        label="Email Address"
        placeholder="Enter your email address"
        type="email"
      />

      <InputPassword
        register={{ ...register("password") }}
        required={true}
        label="Password"
        placeholder="Enter your password"
      />

      <LinkNavigation
        to="/forgot-password"
        ml="5px"
        fontSize="15px"
        color="blue.500"
        display="block"
        mb="15px"
      >
        Forget Password ?
      </LinkNavigation>

      <Button type="submit" isLoading={isLoading}>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
