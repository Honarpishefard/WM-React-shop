import React from "react";
import { Footer, Header } from "layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchCardService, mediaURL, removeFromCardService } from "api";
import { toast } from "react-toastify";
import { BasketProducts, ModalComponent } from "components";
import { useNavigate } from "react-router";
import "assets/style/index.css";
import { SideBar } from "./SideBar";

export const CardScreen = () => {
  const token = Cookies.get("loginToken");
  const userId = Cookies.get("_id");

  const [empty, setEmpty] = useState();
  const [removed, setRemoved] = useState(false);
  const [cardProducts, setCardProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
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
        res.data.data.map((i) => {
          if (!totalPrice.includes(i[0].newPrice * i[1].quantity))
            totalPrice.push(i[0].newPrice * i[1].quantity);
        });
        setTotalPrice(totalPrice.reduce((partialSum, a) => partialSum + a, 0));
      });
    }
  }, [token, cardProducts.length, removed]);

  return (
    <>
      <Header />
      {!empty ? (
        <div className="md:flex gap-6 my-6 max-w-6xl px-6 mx-auto block">
          <div className="grow flex flex-col gap-5 mb-4 md:mb-0">
            {cardProducts?.map((i) => (
              <BasketProducts key={`${i[0]._id}&${i[1].size}&${i[1].quantity}`} title={i[0].title} price={i[0].newPrice} image={mediaURL + i[0].image}
                size={i[1].size}
                quantity={i[1].quantity}
                onClick={() =>
                  navigate(`/products/${i[0].category[0]}/${i[0].category[1]}/${i[0]._id}`)}>
                <ModalComponent classes="bg-red-700" submit="Yes, I'm sure" cancel="No, cancel"
                  onClick={() => {
                    removeFromCardService(userId, i[0]._id, i[1].size, i[1].quantity).then(() => setRemoved(!removed));
                  }}
                  svg={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>} >
                  <div className="text-center flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#979797" className="bi bi-exclamation-circle my-6" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                    </svg>
                    <h3 className="mb-8 text-lg font-normal text-gray-700 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                  </div>
                </ModalComponent>
              </BasketProducts>
            ))}
          </div>
          <div className="min-w-20">
            <SideBar totalPrice={totalPrice} />
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
