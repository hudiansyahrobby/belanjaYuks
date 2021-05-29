import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { logout } from "../../API/AuthAPI";

const useLogout = () => {
  const history = useHistory();
  return useMutation(logout, {
    onSuccess: () => {
      history.push("/login");
    },
  });
};

export default useLogout;
