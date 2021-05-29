import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CheckBoxButton from "../../atoms/CheckBoxButton";

const FilterBox = () => {
  return (
    <Box borderWidth="2px" borderColor="gray.100" p="4" borderRadius="xl">
      <Text color="blue.500">Filter</Text>
      <VStack spacing={10}>
        <Flex
          alignSelf="flex-start"
          mt="20px"
          direction={{ base: "row", md: "column" }}
          wrap="wrap"
        >
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
        </Flex>
      </VStack>
    </Box>
  );
};

export default FilterBox;
