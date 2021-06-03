import {
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
} from "@chakra-ui/react";
import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Select from "react-select";

type InputSelectProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  placeholder: string;
  isLoading: boolean;
  options: Array<{
    value: string;
    label: string;
  }>;
  error: string | undefined;
  register: UseFormRegisterReturn;
};

const InputSelect: React.FC<InputSelectProps> = (props) => {
  const {
    name,
    label,
    placeholder,
    isLoading,
    options,
    error,
    register,
  } = props;

  const SelectInput = chakra(Select);
  const [select, setSelect] = React.useState<string>("");

  return (
    <FormControl isInvalid={!!error} my="10px">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup width="full">
        <SelectInput
          {...register}
          width="full"
          maxMenuHeight={200}
          placeholder={placeholder}
          isLoading={isLoading}
          onChange={(option: any) => {
            if (option) {
              setSelect(option.value);
              //   setValue("categoryId", option.value);
            } else {
              setSelect("");
              //   setValue("categoryId", "");
            }
          }}
          cacheOptions
          defaultOptions
          options={options}
          value={
            options
              ? options.find((option) => {
                  return option.value === select;
                })
              : ""
          }
        />
      </InputGroup>

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputSelect;
