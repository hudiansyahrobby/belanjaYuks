import { Box, Button, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import queryString from "query-string";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router";
import { capitalizeEachWord } from "../../../helpers/capitalizeEachWord";
import useCategories from "../../../hooks/Category/useCategories";
import useAddProduct from "../../../hooks/Product/useAddProduct";
import useProduct from "../../../hooks/Product/useProduct";
import useUpdateProduct from "../../../hooks/Product/useUpdateProduct";
import { CategoryData } from "../../../types/CategoryType";
import { ProductData } from "../../../types/ProductType";
import { productValidation } from "../../../validations/productValidation";
import AlertMessage from "../../atoms/AlertMessage";
import InputImages from "../../atoms/InputImages";
import InputSelect from "../../atoms/InputSelect";
import InputText from "../../atoms/InputText";
import Loading from "../../atoms/Loading";
import TextEditor from "../../atoms/TextEditor";
import Title from "../../atoms/typography/Title";

const ProductForm = () => {
  const { search } = useLocation();
  const { edit, productId } = queryString.parse(search);

  const {
    data: product,
    isLoading: isProductLoading,
    isError: isProductError,
    error: productError,
  } = useProduct(productId as string);

  const customError: any = productError;
  const appError = customError?.response?.data?.message;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productValidation),
  });
  console.log(product);
  React.useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("quantity", product.quantity);
      // setValue("images", product.images[0]);
      setValue("quantity", product.quantity);
      setValue("price", product.price);
      setValue("description", product.description);
      setValue("isSecond", product.isSecond.toString());
      setValue("categories", product.categories[0].id);
    }
  }, [product, setValue]);

  const toast = useToast();
  const { isLoading, mutateAsync } = useAddProduct();
  const {
    isLoading: isUpdateProductLoading,
    mutateAsync: updateProduct,
  } = useUpdateProduct();

  const { isLoading: isCategoriesLoading, data: categories } = useCategories();

  const onCreateProduct = async (data: FormData) => {
    await mutateAsync(data, {
      onSuccess: (success) => {
        toast({
          title: "Product created.",
          description: success?.message,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      },
      onError: (error) => {
        const appError: any = error;
        toast({
          title: "Failed Creating Product",
          description: appError?.response?.data?.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  };

  const onUpdateProduct = async (data: FormData) => {
    const updatedProduct = {
      product: data,
      productId,
    };
    await updateProduct(updatedProduct, {
      onSuccess: (success) => {
        toast({
          title: "Product Updated Successfully",
          description: success?.message,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      },
      onError: (error) => {
        const appError: any = error;
        toast({
          title: "Failed Updating Product",
          description: appError?.response?.data?.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  };
  const onSubmit = handleSubmit(async (productData: ProductData) => {
    const {
      name,
      description,
      images,
      isSecond,
      categories,
      price,
      quantity,
    } = productData;

    const form = new FormData();
    form.append("name", name);
    form.append("description", description);
    form.append("price", JSON.stringify(price));
    form.append("isSecond", JSON.stringify(isSecond));
    form.append("quantity", JSON.stringify(quantity));
    form.append("categories[]", categories as string);
    form.append("images", images[0][0]);

    if (!!edit) {
      onUpdateProduct(form);
    } else {
      await onCreateProduct(form);
    }
  });

  const isSecondOptions = [
    {
      value: "true",
      label: "True",
    },
    {
      value: "false",
      label: "False",
    },
  ];

  const categoryOptions = categories?.map((category: CategoryData) => {
    return {
      value: category.id,
      label: capitalizeEachWord(category.name),
    };
  });

  if (isProductLoading) {
    return <Loading />;
  }

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      mb="50px"
      maxWidth="container.md"
      mx="auto"
      noValidate
    >
      <Title my="20px" textAlign="center">
        {!!edit ? "Edit Product" : "Create Product"}
      </Title>

      {isProductError ? (
        <AlertMessage
          title="Something Went Wrong"
          description={appError}
          status="error"
        />
      ) : (
        <>
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
            step=".01"
          />

          <Controller
            control={control}
            name="isSecond"
            render={({ field: { onChange, value } }) => (
              <InputSelect
                value={value}
                onChange={onChange}
                error={errors.description?.message}
                name="isSecond"
                label="Is Second"
                placeholder="Is the product second?"
                isLoading={false}
                options={isSecondOptions}
              />
            )}
          />

          <Controller
            control={control}
            name="categories"
            render={({ field: { onChange, value } }) => (
              <InputSelect
                value={value}
                onChange={onChange}
                error={errors.categories?.message}
                name="categories"
                label="Brand"
                placeholder="Choose categories"
                isLoading={isCategoriesLoading}
                options={categoryOptions}
              />
            )}
          />

          <InputImages
            register={{ ...register("images") }}
            name="images"
            label="Upload Images"
            error={errors.name?.message}
            getValue={getValues}
            setValue={setValue}
          />

          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <TextEditor
                  value={value}
                  onChange={onChange}
                  error={errors.description?.message}
                  name="description"
                  placeholder="Description..."
                  label="Description"
                />
              );
            }}
          />

          <Button
            mt={{ base: "100px", sm: "70px" }}
            type="submit"
            isLoading={isUpdateProductLoading || isLoading}
          >
            {!!edit ? "Edit Product" : "Create Product"}
          </Button>
        </>
      )}
    </Box>
  );
};

export default ProductForm;
