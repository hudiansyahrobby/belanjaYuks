import { ButtonGroup, Button, Text } from "@chakra-ui/react";
import React from "react";
import CircleButton from "../../atoms/CircleButton";
import { FaPlus, FaMinus } from "react-icons/fa";

interface ChangeQuantityButtonProps {
  quantity: number;
}

const ChangeQuantityButton: React.FC<ChangeQuantityButtonProps> = ({
  quantity,
}) => {
  return (
    <ButtonGroup variant="outline" spacing="6" alignItems="center">
      <CircleButton icon={<FaMinus />} />
      <Text>{quantity}</Text>
      <CircleButton icon={<FaPlus />} />
    </ButtonGroup>
  );
};

export default ChangeQuantityButton;
