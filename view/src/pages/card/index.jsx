import React from "react";
import { Footer, Header } from "layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchCardService, mediaURL, removeFromCardService } from "api";
import { toast } from "react-toastify";
import { BasketProducts, Button, ModalComponent } from "components";
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
                  // Click={() => {
                  //   console.log("first");
                    // setVisible(false);
                    // removeFromCardService(
                    //   userId,
                    //   i[0]._id,
                    //   i[1].size,
                    //   i[1].quantity
                    // ).then(() => setRemoved(!removed));
                  // }}
                  productId={i[0]._id}
                  size={i[1].size}
                  quantity={i[1].quantity}
                />
                {/* <Button
                  classes="mx-6 mb-6 self-end"
                  onClick={() =>
                    removeFromCardService(
                      userId,
                      i[0]._id,
                      i[1].size,
                      i[1].quantity
                    ).then(() => setRemoved(!removed))
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                </Button> */}
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
