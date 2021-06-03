import { Box, Button } from "@chakra-ui/react";
import queryString from "query-string";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import InputImages from "../../atoms/InputImages";
import InputText from "../../atoms/InputText";
import TextEditor from "../../atoms/TextEditor";
import Title from "../../atoms/typography/Title";

const ShopForm = () => {
  const { search } = useLocation();
  const { edit } = queryString.parse(search);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
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
        {!!edit ? "Edit Shop" : "Create Shop"}
      </Title>

      <InputText
        register={{ ...register("name") }}
        required={true}
        error={errors.name?.message}
        label="Name"
        placeholder="Enter your shop name"
        type="text"
      />

      <InputImages
        register={{ ...register("images") }}
        name="images"
        label="Upload Images"
        error={errors.name?.message}
        getValue={getValues}
        setValue={setValue}
      />

      <TextEditor
        register={{ ...register("description") }}
        error={errors.description?.message}
        setValue={setValue}
        name="description"
        placeholder="Description..."
        label="Description"
        getValue={getValues}
      />

      <Button mt={{ base: "100px", sm: "70px" }} type="submit">
        {!!edit ? "Edit Shop" : "Create Shop"}
      </Button>
    </Box>
  );
};

export default ShopForm;
