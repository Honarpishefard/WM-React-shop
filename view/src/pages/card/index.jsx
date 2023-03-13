import { Footer, Header } from "layout";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { fetchCardService } from "api";

export const CardScreen = () => {
  const token = Cookies.get("loginToken");
  const cookieId = Cookies.get("_id");

  useEffect(() => {
    fetchCardService();
  }, []);

  return (
    <>
      <Header />
      <p>cards</p>
      <Footer />
    </>
  );
};
