import { VStack } from "@chakra-ui/layout";
import React from "react";
import CommentCard from "../../molecules/CommentCard";

interface CommentCardsProps {}

const CommentCards: React.FC<CommentCardsProps> = ({}) => {
  return (
    <VStack align="left" spacing="30px">
      {[1, 2, 3, 4, 5].map(() => (
        <CommentCard
          name="Dan Abramov"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, impedit expedita! Ut fugit sit minus quaerat perspiciatis tempore eum consequatur, vitae accusantium sint quidem sequi nesciunt nobis, quas magnam asperiores praesentium maxime dolorem ipsum saepe. Ad earum, asperiores placeat officiis voluptatum totam odit? Aperiam facere magnam, dicta voluptatibus eos sit."
          image="https://bit.ly/dan-abramov"
          time="5 Days Ago"
        />
      ))}
    </VStack>
  );
};

export default CommentCards;
