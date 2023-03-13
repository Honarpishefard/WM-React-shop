import * as yup from "yup";
import { fetchUserService, loginService } from "api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { store } from "context";

const loginSchema = yup
  .object({
    email: yup.string().required("please enter your email"),
    password: yup.string().required("please enter your password"),
  })
  .required();

const useLogin = (email) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onBlur" });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(store);

  const onLogin = async (data) => {
    setLoading(true);
    try {
      const res = await loginService(data);
      toast.success(res?.data?.message);
      Cookies.set("loginToken", res?.data?.token, { expires: 7 });
      navigate("/");
      setLoading(false);
      const user = await fetchUserService({ email });
      setUser(user.user[0]);
      Cookies.set("_id", user.user[0]._id);
    } catch (ex) {
      toast.error(ex?.response?.data?.message);
      setLoading(false);
    }
  };

  return { onLogin, handleSubmit, register, errors, loading };
};

export default useLogin;
