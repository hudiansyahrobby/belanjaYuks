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
} from "@chakra-ui/react";
import React from "react";
import LinkNavigation from "../../atoms/LinkNavigation";
import StackedBar from "../../atoms/StackedBar";
import StatCard from "../../atoms/StatCard";

const AdminDashboardTemplate = () => {
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
