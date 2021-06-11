import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { MdCheckCircle } from "react-icons/md";
import { getAllProductPrice } from "../../../helpers/getAllProductPrice";
import useCarts from "../../../hooks/Cart/useCarts";
import useCities from "../../../hooks/Checkout/useCities";
import useCost from "../../../hooks/Checkout/useCost";
import useProvinces from "../../../hooks/Checkout/useProvinces";
import useTranscationToken from "../../../hooks/Checkout/useTranscationToken";
import { CartData } from "../../../types/CartType";
import AlertMessage from "../../atoms/AlertMessage";
import InputSelect from "../../atoms/InputSelect";
import InputText from "../../atoms/InputText";
import Layout from "../../atoms/Layout";
import Loading from "../../atoms/Loading";
import ModalItem from "../../atoms/Modal";
import Title from "../../atoms/typography/Title";
import CartCard from "../../molecules/CartCard";

const MyCartTemplate = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const [provinceId, setProvinceId] = React.useState("");
  const [cityId, setCityId] = React.useState("");

  const {
    isLoading: isCartsLoading,
    data: carts,
    isError,
    error: cartError,
  } = useCarts();

  const {
    isLoading: isProvinceLoading,
    isError: isProvinceError,
    error: provinceError,
    data: provinces,
  } = useProvinces();

  const {
    isLoading: isCityLoading,
    isError: isCityError,
    error: cityError,
    data: cities,
  } = useCities(provinceId);

  const {
    isLoading: isShippingLoading,
    isError: isShippingError,
    error: shippingError,
    data: shippings,
  } = useCost(provinceId, cityId, 200);

  const { mutateAsync: payItem } = useTranscationToken();

  const provinceOptions = provinces?.map((province: any) => {
    return {
      value: province.province_id,
      label: `Provinsi ${province.province}`,
    };
  });

  const citiesOptions = cities?.map((city: any) => {
    return {
      value: city.city_id,
      label: `${city.type} ${city.city_name}`,
    };
  });

  const shippingsOptions = shippings?.map((shipping: any) => {
    return {
      value: (shipping.cost[0].value / 14000).toFixed(2),
      label: `${shipping.service} (${shipping.cost[0].etd} days) - $${(
        shipping.cost[0].value / 14000
      ).toFixed(2)}`,
    };
  });

  const isAllFieldFilled = React.useMemo(
    () =>
      !!getValues("shipping") &&
      !!provinceId &&
      !!cityId &&
      !!getValues("address"),
    [cityId, getValues, provinceId]
  );

  const customError: any = cartError;
  const appError = customError?.response?.data?.message;

  if (isCartsLoading) {
    return <Loading />;
  }

  const totalPrice = (
    +getAllProductPrice(carts?.products) + (+getValues("shipping") || 0)
  ).toFixed(2);

  const onPayItem = async () => {
    const _totalPrice = +totalPrice * 14000;
    const order = {
      price: _totalPrice,
      product: carts?.products,
    };
    await payItem(order, {
      onSuccess: (data) => {
        const token = data.transaction.token;
        return (window as any).snap.pay(token, {
          onSuccess: function (result: any) {
            alert("payment success!");
            console.log(result);
          },
          onPending: function (result: any) {
            /* You may add your own implementation here */
            alert("wating your payment!");
            console.log(result);
          },
          onError: function (result: any) {
            /* You may add your own implementation here */
            alert("payment failed!");
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert("you closed the popup without finishing the payment");
          },
        });
      },
    });
  };
  return (
    <Layout>
      <Box mt="120px" mx="20px">
        <Title textAlign="center">My Cart</Title>
        {isError ? (
          <AlertMessage
            title="Something Went Wrong"
            description={appError}
            status="error"
          />
        ) : carts?.products?.length > 0 ? (
          <>
            <SimpleGrid
              my="50px"
              columns={{ base: 1, md: 2 }}
              spacing="20px"
              mx="auto"
              justifyItems="center"
            >
              {carts?.products?.map((product: CartData) => (
                <CartCard
                  key={product.id}
                  id={product.id}
                  image={product.images[0]}
                  title={product.name}
                  price={product.price}
                  maxQuantity={product.quantity}
                  defaultQuantity={product.productCart.quantity}
                />
              ))}
            </SimpleGrid>
            <Box mx="auto" maxWidth="container.md" mb="50px">
              <Title textAlign="center">Delivery Location</Title>
              <Box my="50px">
                <Controller
                  control={control}
                  name="province"
                  render={({ field: { onChange, value } }) => (
                    <InputSelect
                      value={value}
                      onChange={(value: any) => {
                        onChange(value);
                        setProvinceId(value);
                      }}
                      error={errors.province?.message}
                      name="province"
                      label="Province"
                      placeholder="Choose Province"
                      isLoading={isProvinceLoading}
                      options={provinceOptions}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="city"
                  render={({ field: { onChange, value } }) => (
                    <InputSelect
                      value={value}
                      onChange={(value: any) => {
                        onChange(value);
                        setCityId(value);
                      }}
                      error={errors.city?.message}
                      name="city"
                      label="City"
                      placeholder="Choose City"
                      isLoading={isCityLoading}
                      options={citiesOptions}
                    />
                  )}
                />

                <InputText
                  register={{ ...register("address") }}
                  required={true}
                  error={errors.address?.message}
                  label="Full Address"
                  placeholder="Enter your address"
                  type="text"
                />
              </Box>

              <Title textAlign="center">Shipping Method</Title>
              <Box my="50px">
                <Controller
                  control={control}
                  name="shipping"
                  render={({ field: { onChange, value } }) => (
                    <InputSelect
                      value={value}
                      onChange={(value: any) => {
                        onChange(value);
                        setCityId(value);
                      }}
                      error={errors.shipping?.message}
                      name="shipping"
                      label="Shipping"
                      placeholder="Choose Shipping Method"
                      isLoading={isShippingLoading}
                      options={shippingsOptions}
                    />
                  )}
                />
              </Box>

              <Title textAlign="center">Order Info</Title>
              <Box my="50px" maxWidth="450px" mx="auto">
                <Flex justifyContent="space-between" mt="10px">
                  <Text fontSize="20px" fontWeight="bold" color="gray.400">
                    Subtotal
                  </Text>
                  <Text fontSize="20px" fontWeight="bold">
                    ${getAllProductPrice(carts?.products)}
                  </Text>
                </Flex>

                <Flex justifyContent="space-between" mt="10px">
                  <Text fontSize="20px" fontWeight="bold" color="gray.400">
                    Shipping Cost
                  </Text>
                  <Text fontSize="20px" fontWeight="bold">
                    ${getValues("shipping") || 0}
                  </Text>
                </Flex>

                <Flex justifyContent="space-between" mt="10px">
                  <Text fontSize="20px" fontWeight="bold" color="gray.400">
                    Total
                  </Text>
                  <Text fontSize="30px" fontWeight="bold">
                    ${totalPrice}
                  </Text>
                </Flex>

                <ModalItem
                  mt="20px"
                  display="flex"
                  width="full"
                  disabled={!isAllFieldFilled}
                  buttonTitle="Buy Item"
                  modalTitle="Buy Item"
                  onClick={onPayItem}
                  isLoading={false}
                >
                  <Text mb="10px">
                    Are you sure do you want buy these items ?
                  </Text>
                  <List spacing={3}>
                    {carts?.products?.map((product: CartData) => {
                      return (
                        <>
                          <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            <Text as="strong">
                              {product.name} - {product.productCart.quantity}{" "}
                              pcs - ${product.price}{" "}
                            </Text>
                          </ListItem>
                        </>
                      );
                    })}
                  </List>
                </ModalItem>
              </Box>
            </Box>
          </>
        ) : (
          <Text my="50px" textAlign="center">
            Cart is Empty
          </Text>
        )}
      </Box>
    </Layout>
  );
};

export default MyCartTemplate;
