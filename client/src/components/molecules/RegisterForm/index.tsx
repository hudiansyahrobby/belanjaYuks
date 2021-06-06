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
import InputPassword from "../../atoms/InputPassword";
import InputText from "../../atoms/InputText";
import LinkNavigation from "../../atoms/LinkNavigation";
import SocialButton from "../../atoms/SocialButton";
import Title from "../../atoms/typography/Title";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationValidation } from "../../../validations/authValidation";
import { RegisterData } from "../../../types/UserType";
import useSignup from "../../../hooks/Auth/useSignup";

const RegisterForm = () => {
  const { isLoading, mutateAsync } = useSignup();

  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationValidation),
  });

  const onSignup = handleSubmit(async (registerData: RegisterData) => {
    await mutateAsync(registerData, {
      onSuccess: () => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      },
      onError: (error) => {
        const appError: any = error;
        toast({
          title: "Failed Creating Account.",
          description: appError.response.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  });

  return (
    <Box as="form" onSubmit={onSignup} noValidate>
      <Title my="20px">Create Your Account</Title>
      <Flex mb="15px">
        <Text fontSize="15px">Already have an account ? </Text>
        <LinkNavigation to="/login" ml="5px" fontSize="15px" color="blue.500">
          Login
        </LinkNavigation>
      </Flex>

      <SocialButton />

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 0, lg: 10 }}
        alignItems="center"
      >
        <InputText
          register={{ ...register("firstName") }}
          required={true}
          error={errors.firstName?.message}
          label="First Name"
          placeholder="Enter your first name"
          type="text"
        />
        <InputText
          register={{ ...register("lastName") }}
          required={true}
          error={errors.lastName?.message}
          label="Last Name"
          placeholder="Enter your last name"
          type="text"
        />
      </SimpleGrid>
      <InputText
        register={{ ...register("email") }}
        required={true}
        helperText="We'll never share your email."
        error={errors.email?.message}
        label="Email Address"
        placeholder="Enter your email address"
        type="email"
      />

      <InputPassword
        register={{ ...register("password") }}
        required={true}
        helperText="Password must be at least one uppercase letter, one lowercase letter, one number and one special character"
        error={errors.password?.message}
        label="Password"
        placeholder="Enter your password"
      />

      <InputPassword
        register={{ ...register("passwordConfirmation") }}
        required={true}
        helperText="Password must be the same as on password field"
        error={errors.passwordConfirmation?.message}
        label="Confirmation Password"
        placeholder="Enter your password again"
      />
      <Button isLoading={isLoading} type="submit">
        Sign Up
      </Button>
    </Box>
  );
};

export default RegisterForm;
