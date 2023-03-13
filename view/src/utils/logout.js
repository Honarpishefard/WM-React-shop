import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const handleLogOut = () => {
  Cookies.remove("loginToken");
  Cookies.remove("_id");
  toast.success("loged out successfuly");
};
