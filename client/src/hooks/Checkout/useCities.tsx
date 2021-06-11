import { useQuery } from "react-query";
import { getCityByProvince } from "../../API/CheckoutAPI";

const useCities = (provinceId: string) => {
  return useQuery("cities", () => getCityByProvince(provinceId), {
    enabled: !!provinceId,
  });
};

export default useCities;
