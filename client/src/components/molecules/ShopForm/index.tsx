import { Box, Text, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import queryString from "query-string";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation } from "react-router";
import useAddShop from "../../../hooks/Shop/useAddShop";
import useMyShop from "../../../hooks/Shop/useMyShop";
import useUpdateShop from "../../../hooks/Shop/useUpdateShop";
import { ShopData } from "../../../types/ShopType";
import { shopValidation } from "../../../validations/shopValidation";
import AlertMessage from "../../atoms/AlertMessage";
import InputImages from "../../atoms/InputImages";
import InputText from "../../atoms/InputText";
import Loading from "../../atoms/Loading";
import ModalItem from "../../atoms/Modal";
import TextEditor from "../../atoms/TextEditor";
import Title from "../../atoms/typography/Title";

const ShopForm = () => {
  const { search } = useLocation();
  const { edit } = queryString.parse(search);

  const isEdit = edit === "true";

  const {
    data: shop,
    isLoading: isShopLoading,
    isError: isShopError,
    error: shopError,
  } = useMyShop(isEdit);

  const customError: any = shopError;
  const appError = customError?.response?.data?.message;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shopValidation),
  });

  React.useEffect(() => {
    if (shop) {
      setValue("name", shop.name);
      setValue("location", shop.location);
      setValue("description", shop.description);
    }
  }, [setValue, shop]);

  const toast = useToast();
  const { isLoading, mutateAsync } = useAddShop();
  const {
    isLoading: isUpdateShopLoading,
    mutateAsync: updateShop,
  } = useUpdateShop();

  const onCreateShop = async (data: FormData) => {
    await mutateAsync(data, {
      onSuccess: (success) => {
        toast({
          title: "Shop created.",
          description: success?.message,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      },
      onError: (error) => {
        const appError: any = error;
        toast({
          title: "Failed Creating Shop.",
          description: appError?.response?.data?.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  };

  const onUpdateShop = async (data: FormData) => {
    await updateShop(data, {
      onSuccess: (success) => {
        toast({
          title: "Shop Updated Successfully",
          description: success?.message,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      },
      onError: (error) => {
        const appError: any = error;
        toast({
          title: "Failed Updating Shop",
          description: appError?.response?.data?.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  };
  const onSubmit = handleSubmit(async (shopData: ShopData) => {
    const { name, description, images, location } = shopData;
    const form = new FormData();
    form.append("name", name);
    form.append("location", location);
    form.append("images", images[0][0]);
    form.append("description", description);

    if (!!edit) {
      onUpdateShop(form);
    } else {
      await onCreateShop(form);
    }
  });

  if (isShopLoading) {
    return <Loading />;
  }

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      noValidate
      mb="50px"
      maxWidth="container.md"
      mx="auto"
    >
      <Title my="20px" textAlign="center">
        {!!edit ? "Edit Shop" : "Create Shop"}
      </Title>

      {isShopError ? (
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
            placeholder="Enter your shop name"
            type="text"
          />

          <InputText
            register={{ ...register("location") }}
            required={true}
            error={errors.location?.message}
            label="Location"
            placeholder="Enter your shop location"
            type="text"
          />

          <InputImages
            register={{ ...register("images") }}
            name="images"
            label="Upload Images"
            error={errors.images?.message}
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

          <ModalItem
            mt={{ base: "110px", sm: "75px" }}
            display="flex"
            buttonTitle={!!edit ? "Edit Shop" : "Create Shop"}
            modalTitle={!!edit ? "Edit Shop" : "Create Shop"}
            onClick={onSubmit}
            isLoading={isLoading || isUpdateShopLoading}
          >
            <Text mb="10px">
              {!!edit
                ? "Are you sure do you want to edit your shop?"
                : "Are you sure do you want to create a shop? You have to re-login after creating shop"}
            </Text>
          </ModalItem>
        </>
      )}
    </Box>
  );
};

export default ShopForm;
