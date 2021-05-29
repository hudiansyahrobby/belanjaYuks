import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const CardSkeleton = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white" width="full" maxWidth="240px">
      <Skeleton height="160px" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
};

export default CardSkeleton;
