import { useMutation } from "react-query";
import { getTransactionToken } from "../../API/CheckoutAPI";

const useTranscationToken = () => {
  return useMutation("transaction-token", getTransactionToken);
};

export default useTranscationToken;
