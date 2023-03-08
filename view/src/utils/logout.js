import Cookies from "js-cookie";
import { toast } from 'react-toastify';

export const handleLogOut = () => {
  Cookies.remove("loginToken");
  toast.success("loged out successfuly");
};
