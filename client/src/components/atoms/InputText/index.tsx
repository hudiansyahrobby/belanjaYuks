import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { InputProps } from "@chakra-ui/react";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputTextProps = InputProps & {
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string | undefined;
  helperText?: string;
  required: boolean;
};

const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  type,
  register,
  helperText,
  error,
  required,
  ...rest
}) => {
  return (
    <FormControl
      id={register.name}
      isInvalid={!!error}
      my="10px"
      isRequired={required}
    >
      <FormLabel>{label}</FormLabel>
      <Input
        {...register}
        {...rest}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        variant="filled"
        isInvalid={!!error}
        errorBorderColor="red.300"
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputText;
