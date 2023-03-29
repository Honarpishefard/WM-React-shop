import { Footer, Header } from "layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchCardService, mediaURL } from "api";
import { toast } from "react-toastify";
import "assets/style/index.css";
import { BasketProducts } from "components";
import { useNavigate } from "react-router";

export const CardScreen = () => {
  const token = Cookies.get("loginToken");
  const [empty, setEmpty] = useState();
  const userId = Cookies.get("_id");
  const [cardProducts, setCardProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cardProducts.length == 0 ? setEmpty(true) : setEmpty(false);
    if (!token) {
      setEmpty(true);
      toast.error("Please log in to your account first", {
        toastId: "empty card",
      });
    } else {
      fetchCardService(userId).then((res) => {
        setCardProducts(res.data.data);
      });
    }
  }, [token, cardProducts.length]);

  return (
    <>
      <Header />
      {!empty ? (
        <div className="flex gap-5 my-6 mx-12">
          <div className="flex-grow flex flex-col gap-5">
            {cardProducts?.map((i) => (
              <BasketProducts
                key={`${i[0]._id}&${i[1].size}&${i[1].quantity}`}
                onClick={() =>
                  navigate(
                    `/products/${i[0].category[0]}/${i[0].category[1]}/${i[0]._id}`
                  )
                }
                productId={i[0]._id}
                title={i[0].title}
                price={i[0].newPrice}
                image={mediaURL + i[0].image}
                size={i[1].size}
                quantity={i[1].quantity}
              />
            ))}
          </div>
          <div className="py-5 px-12 min-w-max bg-white border border-gray-200 rounded-3xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
            <p>side bar placeholder</p>
          </div>
        </div>
      ) : (
        <div className="h-50vh flex justify-center items-center">
          <p className="text-gray-400 font-normal text-xl">card is empty</p>
        </div>
      )}
      <Footer />
    </>
  );
};
