import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { login } from "../../API/AuthAPI";

const useLogin = () => {
  const history = useHistory();
  return useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("token", "TEST");
      history.push("/");
    },
  });
};

export default useLogin;
