import { Box, Flex, Avatar, Text } from "@chakra-ui/react";
import React from "react";
import Subtitle from "../../atoms/typography/Subtitle";
import StarRatings from "react-star-ratings";

interface CommentCardProps {
  name: string;
  image: string;
  time: string;
  content: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  name,
  content,
  image,
  time,
}) => {
  return (
    <Box>
      <Flex mb="5px">
        <Avatar name={name} src={image} />
        <Box ml="15px">
          <Text fontWeight="bold" fontSize="15px">
            {name}
          </Text>
          <Text color="gray.500" fontSize="14px">
            {time}
          </Text>
        </Box>
      </Flex>
      <StarRatings
        rating={5}
        starRatedColor="#FBBF24"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="1px"
        name="rating"
      />
      <Box mt="5px">
        <Subtitle fontSize="14px">{content}</Subtitle>
      </Box>
    </Box>
  );
};

export default CommentCard;
