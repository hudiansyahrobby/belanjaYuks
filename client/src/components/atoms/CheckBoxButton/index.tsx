import { Box, Checkbox } from "@chakra-ui/react";
import React from "react";

interface CheckBoxButtonProps {
  title?: string;
}

const CheckBoxButton: React.FC<CheckBoxButtonProps> = ({ title }) => {
  return (
    <Box m="8px">
      <Checkbox size="md" colorScheme="blue" data-testid="checkbox">
        {title && title}
      </Checkbox>
    </Box>
  );
};

export default CheckBoxButton;
