import { Box, Checkbox } from "@chakra-ui/react";
import React from "react";

interface CheckBoxButtonProps {}

const CheckBoxButton: React.FC<CheckBoxButtonProps> = ({}) => {
  return (
    <Box mt="8px">
      <Checkbox size="md" colorScheme="blue">
        Checkbox
      </Checkbox>
    </Box>
  );
};

export default CheckBoxButton;
