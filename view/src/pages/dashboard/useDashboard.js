import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { changeUserInfoService, formDataService } from "api";
import { store } from "context";

const dashboardSchema = yup
  .object({
    name: yup.string(),
    email: yup.string(),
    currentPassword: yup.string(),
    newPassword: yup.string(),
    repeatNewPassword: yup.string(),
  })
  .required();

const useDashboard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(dashboardSchema) });

  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(store);

  const onRegister = async (data, e) => {
    switch (e.target.id) {
      case "name":
        if (!data.name) return toast.error("No new name entered");
        setLoading(true);
        try {
          const res = await changeUserInfoService({
            id: user._id,
            name: data?.name,
          });
          toast.success(res?.message);
          setUser(res?.user);
          setLoading(false);
        } catch (ex) {
          toast.error(ex?.response?.data?.message);
          setLoading(false);
        }
        break;
      case "email":
        if (!data.email) return toast.error("No new email entered");
        setLoading(true);
        try {
          const res = await changeUserInfoService({
            id: user._id,
            email: data?.email,
          });
          toast.success(res?.message);
          setUser(res?.user);
          setLoading(false);
        } catch (ex) {
          toast.error(ex?.response?.data?.message);
          setLoading(false);
        }
        break;
      case "password":
        if (!data.currentPassword) return toast.error("Enter your current password");
        if (!data.newPassword) return toast.error("Enter a new password");
        if (data?.newPassword !== data?.repeatNewPassword) return toast.error("The passwords don't match");
        setLoading(true);
        try {
          const res = await changeUserInfoService({
            id: user._id,
            currentPassword: data?.currentPassword,
            newPassword: data?.newPassword,
          });
          toast.success(res?.message);
          setUser(res?.user);
          setLoading(false);
        } catch (ex) {
          toast.error(ex?.response?.data?.message);
          setLoading(false);
        }
        break;
    };
  };

  const onFormDataSumbit = async (file) => {
    if (!file) return toast.error("Select a file before submitting");
    setLoading(true);
    const formData = new FormData();
    formData.append("picture", file);
    try {
      const res = await formDataService(formData);
      toast.success(res?.data?.message);
      console.log(res.data.message);
      setLoading(false);
    } catch (ex) {
      toast.error(ex?.response?.data?.message);
      setLoading(false);
    }
  };

  return { onRegister, handleSubmit, register, onFormDataSumbit, loading };
};

export default useDashboard;
