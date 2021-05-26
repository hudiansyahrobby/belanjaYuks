import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputTextProps {
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string | undefined;
  helperText?: string;
  required: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  type,
  register,
  helperText,
  error,
  required,
}) => {
  return (
    <FormControl
      id={register.name}
      isInvalid={!!error}
      isRequired={required}
      my="10px"
    >
      <FormLabel>{label}</FormLabel>
      <Input
        {...register}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        variant="filled"
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default InputText;