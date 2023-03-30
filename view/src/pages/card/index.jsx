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
                  submit="Yes, I'm sure"
                  cancel="No, cancel"
                >
                  <div className="text-center flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="#979797"
                      className="bi bi-exclamation-circle my-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                    </svg>
                    <h3 className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this product?
                    </h3>
                  </div>
                </ModalComponent>
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
