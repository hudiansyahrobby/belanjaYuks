import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import React from "react";

interface StatCardProps {}

const StatCard: React.FC<StatCardProps> = ({}) => {
  return (
    <Stat borderColor="gray.200" borderWidth="1px" p="15px" borderRadius="15px">
      <StatLabel>Collected Fees</StatLabel>
      <StatNumber>£0.00</StatNumber>
      <StatHelpText>Feb 12 - Feb 28</StatHelpText>
    </Stat>
  );
};

export default StatCard;
