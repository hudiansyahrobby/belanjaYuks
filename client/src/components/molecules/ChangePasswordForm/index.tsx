import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import InputPassword from "../../atoms/InputPassword";
import InputText from "../../atoms/InputText";
import Title from "../../atoms/typography/Title";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Box as="form" onSubmit={onSubmit} mb="50px" width="container.md" mx="auto">
      <Title my="20px" textAlign="center">
        Change Your Password
      </Title>

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

      <Button>Change Password</Button>
    </Box>
  );
};

export default ChangePasswordForm;
