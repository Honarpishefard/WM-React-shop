import { addToCardService } from "api";
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const token = Cookies.get("loginToken");

export const handleAddToCard = (productId, size, quantity, id) => {
  if (!token) return toast.error("please log in to your account first");
  if (!size) return toast.error("please select the size");
  addToCardService(productId, size, quantity, id);
  toast.success("Item added to your card successfully");
};
