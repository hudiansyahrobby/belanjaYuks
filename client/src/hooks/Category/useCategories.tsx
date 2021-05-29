import { useQuery } from "react-query";
import { getCategories } from "../../API/CategoryAPI";

const useCategories = () => {
  return useQuery("categories", getCategories);
};

export default useCategories;
