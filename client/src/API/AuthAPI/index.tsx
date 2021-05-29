import axios from "../../axios";
import { LoginData, RegisterData } from "../../types/UserType";

export const login = async (loginData: LoginData) => {
  const { data } = await axios.post("/login", loginData);
  return data.data;
};

export const signup = async (registerData: RegisterData) => {
  const { data } = await axios.post("/signup", registerData);
  return data.data;
};

export const logout = async () => {
  const { data } = await axios.post("/logout");
  return data.data;
};
