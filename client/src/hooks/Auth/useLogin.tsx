import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { login } from "../../API/AuthAPI";

const useLogin = () => {
  const history = useHistory();
  return useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      history.push("/");
    },
  });
};

export default useLogin;
