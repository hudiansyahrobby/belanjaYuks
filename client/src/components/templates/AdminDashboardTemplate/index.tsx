import {
  Box,
  Button,
  Flex,
  Icon,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete, AiOutlineShop } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { GiConverseShoe } from "react-icons/gi";
import { TiDocumentAdd } from "react-icons/ti";
import { Link } from "react-router-dom";
import useAuthenticated from "../../../hooks/Auth/useAuthenticated";
import useDeleteShop from "../../../hooks/Shop/useDeleteShop";
import LinkNavigation from "../../atoms/LinkNavigation";
import ModalItem from "../../atoms/Modal";
import StackedBar from "../../atoms/StackedBar";
import StatCard from "../../atoms/StatCard";

const AdminDashboardTemplate = () => {
  const { isLoading, mutateAsync, isSuccess, isError, error } = useDeleteShop();
  const { shopId } = useAuthenticated();
  const toast = useToast();

  const onDeleteShop = async () => {
    await mutateAsync();
  };

  if (isSuccess) {
    toast({
      title: "Success Deleting Shop",
      description: "Shop deleted successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  if (isError) {
    const customError: any = error;
    toast({
      title: "Error Deleting Shop",
      description: customError?.response?.data?.message,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Flex>
      <Box mr="20px" mt="-20px">
        <Button
          mt="20px"
          as={Link}
          to="/seller/products"
          display="flex"
          leftIcon={<GiConverseShoe />}
        >
          Product Lists
        </Button>
        <Button
          mt="20px"
          as={Link}
          to="/seller/products/create"
          display="flex"
          leftIcon={<Icon as={TiDocumentAdd} color="white" />}
        >
          Add Product
        </Button>
        <Button
          mt="20px"
          as={Link}
          to={`/shops/${shopId}`}
          display="flex"
          leftIcon={<Icon as={AiOutlineShop} color="white" />}
        >
          My Shop
        </Button>
        <Button
          mt="20px"
          as={Link}
          to="/shops/create?edit=true"
          display="flex"
          leftIcon={<Icon as={BsPencilSquare} color="white" />}
        >
          Edit Shop
        </Button>

        <ModalItem
          mt="20px"
          width="full"
          display="flex"
          leftIcon={<Icon as={AiFillDelete} color="white" />}
          buttonTitle="Delete Shop"
          modalTitle="Delete Shop"
          onClick={onDeleteShop}
          isLoading={isLoading}
        >
          <Text mb="10px">
            Are you sure do you want to delete your shop ? You have to re-login
            after deleting your shop
          </Text>
        </ModalItem>
      </Box>
      <Box flexGrow={1}>
        <SimpleGrid columns={{ base: 2, lg: 4 }} spacing="10px">
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </SimpleGrid>

        <Box mt="20px">
          <StackedBar />
        </Box>

        <Box mt="20px">
          <Flex alignItems="center" my="30px">
            <Text fontSize="28px" fontWeight="bold">
              History
            </Text>
            <LinkNavigation to="/" ml="20px">
              See Others
            </LinkNavigation>
          </Flex>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminDashboardTemplate;
