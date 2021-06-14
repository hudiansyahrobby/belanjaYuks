import { Box, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { GiConverseShoe } from "react-icons/gi";
import { TiDocumentAdd } from "react-icons/ti";
import { Link } from "react-router-dom";

const SellerButtonMenu = () => {
  return (
    <Box mr={{ lg: "20px" }} mt="-20px" mb={{ base: "30px" }}>
      <Button
        mt="20px"
        as={Link}
        to="/seller"
        display="flex"
        leftIcon={<AiOutlineShop />}
      >
        Dashboard
      </Button>
      <Button
        mt="20px"
        as={Link}
        to="/seller/products"
        display="flex"
        leftIcon={<Icon as={GiConverseShoe} color="white" />}
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
        Create Product
      </Button>
      <Button
        mt="20px"
        as={Link}
        to="/seller/histories"
        display="flex"
        leftIcon={<Icon as={TiDocumentAdd} color="white" />}
      >
        Histories
      </Button>
    </Box>
  );
};

export default SellerButtonMenu;
