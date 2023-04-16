import { mainInstance } from "api";

export const registerService = (data) => {
  return mainInstance.post("/register", data);
};

export const loginService = (data) => {
  return mainInstance.post("/login", data);
};

export const fetchUserService = async (data) => {
  const res = await mainInstance.post("/users", data);
  return res.data;
};

export const changeUserInfoService = async (data) => {
  const res = await mainInstance.post("/users/dashboard", data);
  return res.data;
};
