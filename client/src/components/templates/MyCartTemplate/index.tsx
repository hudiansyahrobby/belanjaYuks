import { Box, Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import InputSelect from "../../atoms/InputSelect";
import InputText from "../../atoms/InputText";
import Layout from "../../atoms/Layout";
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
  return (
    <Layout>
      <Box mt="120px">
        <Title textAlign="center">My Cart</Title>
        <SimpleGrid my="50px" columns={2}>
          <CartCard
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            title="Headset Black Box"
            price={5.43}
          />

          <CartCard
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            title="Headset Black Box"
            price={5.43}
          />

          <CartCard
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            title="Headset Black Box"
            price={5.43}
          />

          <CartCard
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            title="Headset Black Box"
            price={5.43}
          />
        </SimpleGrid>

        <Box mx="auto" width="container.md" mb="50px">
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
          <Box my="50px" width="450px" mx="auto">
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
