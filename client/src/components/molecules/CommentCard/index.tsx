import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { formatDistance, subDays } from "date-fns";
import React from "react";
import StarRatings from "react-star-ratings";
import useAuthenticated from "../../../hooks/Auth/useAuthenticated";
import Subtitle from "../../atoms/typography/Subtitle";
import CommentPopOver from "../CommentPopOver";

interface CommentCardProps {
  id: string;
  name: string;
  time: Date;
  content: string;
  rating: number;
  userId: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  id,
  name,
  content,
  time,
  rating,
  userId,
}) => {
  const { userId: loggedInUserId } = useAuthenticated();

  return (
    <Flex justifyContent="space-between">
      <Box>
        <Flex mb="5px">
          <Avatar name={name} />
          <Box ml="15px">
            <Text fontWeight="bold" fontSize="15px">
              {name}
            </Text>
            <Text color="gray.500" fontSize="14px">
              {formatDistance(subDays(new Date(), 0), new Date(time), {
                addSuffix: true,
              })}
            </Text>
          </Box>
        </Flex>
        <StarRatings
          rating={rating}
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
      {loggedInUserId === userId && <CommentPopOver commentId={id} />}
    </Flex>
  );
};

export default CommentCard;
