import { Box, Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import useCarts from "../../../hooks/Cart/useCarts";
import { CartData } from "../../../types/CartType";
import InputSelect from "../../atoms/InputSelect";
import InputText from "../../atoms/InputText";
import Layout from "../../atoms/Layout";
import Loading from "../../atoms/Loading";
import Title from "../../atoms/typography/Title";
import CartCard from "../../molecules/CartCard";

const MyCartTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const options = [
    {
      value: "1237878a87dhuwd0",
      label: "BRI",
    },
    {
      value: "1237878a87dhuwsa0",
      label: "BNI",
    },
  ];

  const { isLoading: isCartsLoading, data: carts, isError } = useCarts();

  if (isCartsLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Box mt="120px" mx="20px">
        <Title textAlign="center">My Cart</Title>
        <SimpleGrid
          my="50px"
          columns={{ base: 1, md: 2 }}
          spacing="20px"
          mx="auto"
          justifyItems="center"
        >
          {carts?.products?.map((product: CartData) => (
            <CartCard
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
            <InputText
              register={{ ...register("address") }}
              required={true}
              error={errors.address?.message}
              label="Delivery Location"
              placeholder="Enter your address"
              type="text"
            />
          </Box>

          <Title textAlign="center">Payment Method</Title>
          <Box my="50px">
            <InputSelect
              register={{ ...register("payment") }}
              name="payment"
              label="Choose Payment Option"
              placeholder="Choose Payment Option..."
              isLoading={false}
              options={options}
              error={errors.payment?.message}
            />
          </Box>

          <Title textAlign="center">Order Info</Title>
          <Box my="50px" maxWidth="450px" mx="auto">
            <Flex justifyContent="space-between" mt="10px">
              <Text fontSize="20px" fontWeight="bold" color="gray.400">
                Subtotal
              </Text>
              <Text fontSize="20px" fontWeight="bold">
                $5.43
              </Text>
            </Flex>

            <Flex justifyContent="space-between" mt="10px">
              <Text fontSize="20px" fontWeight="bold" color="gray.400">
                Shipping Cost
              </Text>
              <Text fontSize="20px" fontWeight="bold">
                $5.43
              </Text>
            </Flex>

            <Flex justifyContent="space-between" mt="10px">
              <Text fontSize="20px" fontWeight="bold" color="gray.400">
                Total
              </Text>
              <Text fontSize="30px" fontWeight="bold">
                $5.43
              </Text>
            </Flex>

            <Button w="full" mt="15px">
              Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default MyCartTemplate;
