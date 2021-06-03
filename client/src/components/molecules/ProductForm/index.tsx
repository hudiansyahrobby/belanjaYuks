import { Box, Button } from "@chakra-ui/react";
import queryString from "query-string";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import InputImages from "../../atoms/InputImages";
import InputSelect from "../../atoms/InputSelect";
import InputText from "../../atoms/InputText";
import TextEditor from "../../atoms/TextEditor";
import Title from "../../atoms/typography/Title";

const ProductForm = () => {
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

  const isSecondOptions = [
    {
      value: "True",
      label: "True",
    },
    {
      value: "False",
      label: "False",
    },
  ];

  const categoryOptions = [
    {
      value: "nike",
      label: "Nike",
    },
    {
      value: "adidas",
      label: "Adidas",
    },
  ];
  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      mb="50px"
      maxWidth="container.md"
      mx="auto"
    >
      <Title my="20px" textAlign="center">
        {!!edit ? "Edit Product" : "Create Product"}
      </Title>

      <InputText
        register={{ ...register("name") }}
        required={true}
        error={errors.name?.message}
        label="Name"
        placeholder="Enter your product name"
        type="text"
      />

      <InputText
        register={{ ...register("quantity") }}
        required={true}
        error={errors.quantity?.message}
        label="Quantity"
        placeholder="Enter your product quantity"
        type="number"
      />

      <InputText
        register={{ ...register("price") }}
        required={true}
        error={errors.name?.message}
        label="Price"
        placeholder="Enter your product price"
        type="number"
      />

      <InputSelect
        name="isSecond"
        label="Is Second"
        placeholder="Is the product second?"
        isLoading
        options={isSecondOptions}
        error={errors.isSecond?.message}
        register={{ ...register("isSecond") }}
      />

      <InputSelect
        name="categories"
        label="Categories"
        placeholder="Choose Product Category"
        isLoading
        options={categoryOptions}
        error={errors.categories?.message}
        register={{ ...register("categories") }}
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
        {!!edit ? "Edit Product" : "Create Product"}
      </Button>
    </Box>
  );
};

export default ProductForm;
