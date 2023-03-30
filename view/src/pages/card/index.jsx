import React from "react";
import { Footer, Header } from "layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchCardService, mediaURL, removeFromCardService } from "api";
import { toast } from "react-toastify";
import { BasketProducts, ModalComponent } from "components";
import { useNavigate } from "react-router";
import "assets/style/index.css";

export const CardScreen = () => {
  const token = Cookies.get("loginToken");
  const userId = Cookies.get("_id");

  const [empty, setEmpty] = useState();
  const [removed, setRemoved] = useState(false);
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
  }, [token, cardProducts.length, removed]);

  return (
    <>
      <Header />
      {!empty ? (
        <div className="flex gap-6 my-6 max-w-6xl px-6 mx-auto">
          <div className="flex-grow flex flex-col gap-5">
            {cardProducts?.map((i) => (
              <BasketProducts
                key={`${i[0]._id}&${i[1].size}&${i[1].quantity}`}
                onClick={() =>
                  navigate(
                    `/products/${i[0].category[0]}/${i[0].category[1]}/${i[0]._id}`
                  )
                }
                title={i[0].title}
                price={i[0].newPrice}
                image={mediaURL + i[0].image}
                size={i[1].size}
                quantity={i[1].quantity}
              >
                <ModalComponent
                  onClick={() => {
                    removeFromCardService(
                      userId,
                      i[0]._id,
                      i[1].size,
                      i[1].quantity
                    ).then(() => setRemoved(!removed));
                  }}
                />
              </BasketProducts>
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
