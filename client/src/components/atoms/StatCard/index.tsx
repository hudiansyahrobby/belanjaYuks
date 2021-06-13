import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import AlertMessage from "../AlertMessage";

interface StatCardProps {
  label: string;
  total: number | string;
  information?: string;
  isError: boolean;
  error: string;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  total,
  information,
  isError,
  error,
}) => {
  if (isError) {
    return (
      <AlertMessage
        title="Something Went Wrong"
        description={error}
        status="error"
      />
    );
  }
  return (
    <Stat borderColor="gray.200" borderWidth="1px" p="15px" borderRadius="15px">
      <StatLabel>{label}</StatLabel>
      <StatNumber>{total}</StatNumber>
      {information && <StatHelpText>{information}</StatHelpText>}
    </Stat>
  );
};

export default StatCard;
