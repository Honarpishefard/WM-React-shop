import { Footer, Header } from "layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchCardService } from "api";
import { toast } from "react-toastify";
import 'assets/style/index.css'

export const CardScreen = () => {
  const token = Cookies.get("loginToken");
  const [empty, setEmpty] = useState();

  useEffect(() => {
    if (!token) {
      setEmpty(true);
      toast.error("Please log in to your account first", {
        toastId: "empty card",
      });
    } else {
      fetchCardService(userId).then((res) => setCardProducts(res.data.data));
      setEmpty(false);
    }
  }, [token]);

  const userId = Cookies.get("_id");
  const [cardProducts, setCardProducts] = useState([]);

  return (
    <>
      <Header />
      {!empty ? (
        cardProducts?.map((i) => <p>{i.title}</p>)
      ) : (
        <div className="h-50vh flex justify-center items-center">
          <p className="text-gray-400 font-normal text-xl">card is empty</p>
        </div>
      )}
      <Footer />
    </>
  );
};
