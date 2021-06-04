import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const AdminShopListTemplate = () => {
  return (
    <Flex>
      <Box mr="20px">
        <Button display="block" mt="20px">
          Create APp
        </Button>
        <Button display="block" mt="20px">
          Create APp
        </Button>
        <Button display="block" mt="20px">
          Create App
        </Button>
        <Button display="block" mt="20px">
          Create APp
        </Button>
        <Button display="block" mt="20px">
          Create APp
        </Button>
        <Button display="block" mt="20px">
          Create APp
        </Button>
      </Box>
      <Box flexGrow={1}>
        <Box mt="20px">
          <Flex alignItems="center" my="30px">
            <Text fontSize="28px" fontWeight="bold">
              Shop List
            </Text>
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

export default AdminShopListTemplate;
