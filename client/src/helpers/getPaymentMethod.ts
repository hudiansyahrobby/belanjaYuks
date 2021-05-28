import { PaymentType } from "../types/PaymentType";
import { capitalizeEachWord } from "./capitalizeEachWord";

export const getPaymentMethod = (payments: PaymentType[]) => {
  const options = payments?.map((payment) => {
    return {
      value: payment?.id,
      label: capitalizeEachWord(payment?.name),
    };
  });

  return options;
};
