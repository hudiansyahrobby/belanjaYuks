import { ButtonGroup, Text } from "@chakra-ui/react";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import CircleButton from "../../atoms/CircleButton";

interface ChangeQuantityButtonProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  maxQuantity: number;
}

const ChangeQuantityButton: React.FC<ChangeQuantityButtonProps> = ({
  quantity,
  setQuantity,
  maxQuantity,
}) => {
  const onIncreaseQuantity = () => {
    if (quantity === maxQuantity) {
      return;
    }
    setQuantity(quantity + 1);
  };

  const onDecreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <ButtonGroup variant="outline" spacing="6" alignItems="center">
      <CircleButton
        icon={<FaMinus />}
        onClick={onDecreaseQuantity}
        disabled={quantity === 1}
      />
      <Text>{quantity}</Text>
      <CircleButton
        icon={<FaPlus />}
        onClick={onIncreaseQuantity}
        disabled={quantity === maxQuantity}
      />
    </ButtonGroup>
  );
};

export default ChangeQuantityButton;
