import { HStack } from "@chakra-ui/react";
import React from "react";
import Card from "../../atoms/Card";

interface CardsProps {}

const Cards: React.FC<CardsProps> = ({}) => {
  return (
    <HStack spacing="20px" my="30px">
      <Card
        to="/products?categoryId=1"
        title="Sepatu Sport"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
      <Card
        to="/products?categoryId=1"
        title="Sepatu Sport"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
      <Card
        to="/products?categoryId=1"
        title="Sepatu Sport"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
      <Card
        to="/products?categoryId=1"
        title="Sepatu Sport"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
      <Card
        to="/products?categoryId=1"
        title="Sepatu Sport"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
    </HStack>
  );
};

export default Cards;
