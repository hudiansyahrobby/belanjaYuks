import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CheckBoxButton from "../../atoms/CheckBoxButton";

interface FilterBoxProps {}

const FilterBox: React.FC<FilterBoxProps> = ({}) => {
  return (
    <Box borderWidth="2px" borderColor="gray.100" p="4" borderRadius="xl">
      <Text color="blue.500">Filter</Text>
      <VStack spacing={10} direction="row">
        <Box alignSelf="flex-start" mt="20px">
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
          <CheckBoxButton />
        </Box>
      </VStack>
    </Box>
  );
};

export default FilterBox;
