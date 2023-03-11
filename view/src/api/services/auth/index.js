import { mainInstance } from "api";

export const registerService = (data) => {
  return mainInstance.post("/register", data);
};

export const loginService = (data) => {
  return mainInstance.post("/login", data);
};

export const fetchUserService = async(data) => {
  const user = await mainInstance.post("/users", data);
  console.log(user);
  return user;
};
