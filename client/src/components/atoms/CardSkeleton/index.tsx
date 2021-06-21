import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const CardSkeleton = () => {
  return (
    <Box
      padding="6"
      boxShadow="lg"
      bg="white"
      width="full"
      maxWidth="240px"
      data-testid="skeleton"
    >
      <Skeleton height="160px" data-testid="skeleton-image" />
      <SkeletonText
        mt="4"
        noOfLines={4}
        spacing="4"
        data-testid="skeleton-text"
      />
    </Box>
  );
};

export default CardSkeleton;
