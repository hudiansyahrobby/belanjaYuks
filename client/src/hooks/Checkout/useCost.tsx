import { useQuery } from "react-query";
import { getShippingCost } from "../../API/CheckoutAPI";

const useCost = (origin: string, destination: string, weight: number) => {
  const enabled = !!origin && !!destination && !!weight;
  return useQuery(
    "shipping",
    () => getShippingCost(origin, destination, weight),
    {
      enabled,
    }
  );
};

export default useCost;
