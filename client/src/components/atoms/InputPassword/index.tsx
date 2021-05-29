import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

interface InputPasswordProps {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string | undefined;
  helperText?: string;
  required: boolean;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  placeholder,
  register,
  helperText,
  error,
  required,
}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl
      id={register.name}
      isInvalid={!!error}
      isRequired={required}
      my="10px"
    >
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          {...register}
          placeholder={placeholder}
          type={show ? "text" : "password"}
          autoComplete="off"
          variant="filled"
        />

        <InputRightElement
          children={
            <Button variant="ghost" onClick={handleClick}>
              <IconContext.Provider
                value={{
                  color: "black",
                  size: "23px",
                }}
              >
                <div>{show ? <AiFillEye /> : <AiFillEyeInvisible />}</div>
              </IconContext.Provider>
            </Button>
          }
        />
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default InputPassword;
