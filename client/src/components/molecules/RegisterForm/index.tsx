import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import InputPassword from "../../atoms/InputPassword";
import InputText from "../../atoms/InputText";
import LinkNavigation from "../../atoms/LinkNavigation";
import SocialButton from "../../atoms/SocialButton";
import Title from "../../atoms/typography/Title";

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Box as="form" onSubmit={onSubmit}>
      <Title my="20px">Create Your Account</Title>
      <Flex mb="15px">
        <Text fontSize="15px">Already have an account ? </Text>
        <LinkNavigation to="/login" ml="5px" fontSize="15px" color="blue.500">
          Login
        </LinkNavigation>
      </Flex>

      <SocialButton />

      <SimpleGrid columns={2} spacing={10} alignItems="center">
        <InputText
          register={{ ...register("firstName") }}
          required={true}
          error={errors.firstName?.message}
          label="First Name"
          placeholder="Enter your first name"
          type="text"
        />
        <InputText
          register={{ ...register("lastname") }}
          required={true}
          error={errors.lastname?.message}
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
        register={{ ...register("confirmationPassword") }}
        required={true}
        helperText="Password must be the same as on password field"
        error={errors.confirmationPassword?.message}
        label="Confirmation Password"
        placeholder="Enter your password again"
      />
      <Button>Sign Up</Button>
    </Box>
  );
};

export default RegisterForm;
