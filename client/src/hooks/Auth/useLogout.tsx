import { QueryClient, useMutation } from "react-query";
import { useHistory } from "react-router";
import { logout } from "../../API/AuthAPI";

const useLogout = () => {
  const history = useHistory();
  const queryClient = new QueryClient();
  return useMutation(logout, {
    onSuccess: () => {
      localStorage.clear();
      queryClient.removeQueries();
      history.push("/login");
    },
  });
};

export default useLogout;
