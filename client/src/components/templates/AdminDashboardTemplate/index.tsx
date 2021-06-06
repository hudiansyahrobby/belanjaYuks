import {
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Button,
  Box,
  Flex,
  SimpleGrid,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import LinkNavigation from "../../atoms/LinkNavigation";
import StackedBar from "../../atoms/StackedBar";
import StatCard from "../../atoms/StatCard";
import { GiConverseShoe } from "react-icons/gi";
import { TiDocumentAdd } from "react-icons/ti";
import { AiOutlineShop, AiFillDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const AdminDashboardTemplate = () => {
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
          to="/seller/products/create"
          display="flex"
          leftIcon={<Icon as={AiOutlineShop} color="white" />}
        >
          My Shop
        </Button>
        <Button
          mt="20px"
          as={Link}
          to="/seller/products/create"
          display="flex"
          leftIcon={<Icon as={BsPencilSquare} color="white" />}
        >
          Edit Shop
        </Button>
        <Button
          mt="20px"
          width="full"
          display="flex"
          leftIcon={<Icon as={AiFillDelete} color="white" />}
        >
          Delete Shop
        </Button>
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
