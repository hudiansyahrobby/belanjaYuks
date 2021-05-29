import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import InputText from "../../atoms/InputText";
import Title from "../../atoms/typography/Title";

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      mb="50px"
      maxWidth="container.md"
      mx="auto"
    >
      <Title my="20px" textAlign="center">
        Forgot Your Password ?
      </Title>

      <InputText
        register={{ ...register("email") }}
        required={true}
        error={errors.email?.message}
        label="Email Address"
        placeholder="Enter your email address"
        type="email"
      />

      <Button>Forget Password</Button>
    </Box>
  );
};

export default ForgotPasswordForm;
