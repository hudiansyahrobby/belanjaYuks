import { Button, ButtonProps } from "@chakra-ui/button";
import React from "react";

type CircleButtonProps = ButtonProps & {
  icon: React.ReactNode;
};

const CircleButton: React.FC<CircleButtonProps> = ({ icon, ...props }) => {
  return (
    <Button
      data-testid="circle-button"
      borderRadius="full"
      width="45px"
      height="45px"
      {...props}
    >
      {icon}
    </Button>
  );
};

export default CircleButton;
