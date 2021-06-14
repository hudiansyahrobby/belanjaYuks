import { Box, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { GiConverseShoe } from "react-icons/gi";
import { TiDocumentAdd } from "react-icons/ti";
import { Link } from "react-router-dom";

const AdminButtonMenu = () => {
  return (
    <Box mr={{ lg: "20px" }} mt="-20px" mb={{ base: "30px" }}>
      <Button
        mt="20px"
        as={Link}
        to="/admin"
        display="flex"
        leftIcon={<GiConverseShoe />}
      >
        Dashboard
      </Button>
      <Button
        mt="20px"
        as={Link}
        to="/admin/shops"
        display="flex"
        leftIcon={<Icon as={AiOutlineShop} color="white" />}
      >
        Shop Lists
      </Button>
      <Button
        mt="20px"
        as={Link}
        to="/admin/histories"
        display="flex"
        leftIcon={<Icon as={TiDocumentAdd} color="white" />}
      >
        History
      </Button>
    </Box>
  );
};

export default AdminButtonMenu;
