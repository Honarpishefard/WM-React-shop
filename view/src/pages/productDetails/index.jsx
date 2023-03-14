import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  fetchProductDetailsService,
  fetchProductsService,
  mediaURL,
} from "api";
import { Footer, Header } from "layout";
import { Skeleton } from "./Skeleton";
import "assets/style/index.css";
import { Button, Card, CardSkeleton } from "components";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { addToCard } from "utils/addToCard";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [suggestedproducts, setSuggestedproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category, sec, id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState();

  const cookieId = Cookies.get("_id");
  const token = Cookies.get("loginToken");

  useEffect(() => {
    fetchProductDetailsService(category, sec, id).then((res) => {
      setProduct(res.data.data[0]);
      setLoading(false);
      fetchProductsService(res.data.data[0].category[0]).then((result) => {
        const data = result.data.data;
        let arr = data.filter((a) => {
          if (a.category[1] == sec && a._id != id) {
            return a;
          }
        });
        setSuggestedproducts([arr[0], arr[1], arr[2]]);
      });
    });
  }, [category, sec, id]);

  return (
    <>
      <Header />
      {loading ? (
        <Skeleton />
      ) : (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 px-10 py-20 gap-10 flex-wrap justify-around">
          <img
            className="rounded-3xl justify-self-center max-h-40rem"
            src={mediaURL + product.image}
            alt="product image"
          />
          <div className="pt-7 max-w-2xl">
            <p className="text-4xl text-gray-900 dark:text-white font-bold">
              {product.title}
            </p>
            <div className="flex gap-6 items-center py-5">
              <p className="text-2xl text-gray-900 dark:text-white font-medium">
                {product.newPrice}
              </p>
              <p className="text-xl text-gray-500 line-through dark:text-white font-medium">
                {product.oldPrice}
              </p>
            </div>
            <p className="leading-relaxed font-normal text-lg">
              {product.desc}
            </p>
            <div className="flex items-center px-6 py-10 justify-around">
              <Dropdown
                label={size || "Select Size"}
                placement="right"
                inline={true}
              >
                <Dropdown.Item onClick={() => setSize("Small")}>
                  Small
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("Meduim")}>
                  Medium
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("Large")}>
                  Large
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("Extra Large")}>
                  Extra Large
                </Dropdown.Item>
              </Dropdown>
              <div className="flex gap-6 bg-slate-100 w-fit rounded-full items-center">
                <button
                  className="rounded-0 rounded-tl-full rounded-bl-full w-8 bg-slate-200 py-2"
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className="rounded-0 rounded-tr-full rounded-br-full w-8 bg-slate-200 py-2"
                  onClick={() => {
                    if (quantity < 20) setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
              <Button
                onClick={() => {
                  if (!token)
                    return toast.error("please log in to your account first");
                  if (!size) return toast.error("please select the size");
                  addToCard(product._id, size, quantity, cookieId);
                }}
              >
                Add to card{" "}
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center flex-col items-center">
        <p className="text-2xl text-gray-900 dark:text-white font-bold py-6 border-t">
          You may also like
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-10 pb-14 pt-5 gap-10">
          {suggestedproducts?.map((i) =>
            loading ? (
              <CardSkeleton key={i._id} />
            ) : (
              <Link
                to={`/products/${i.category[0]}/${i.category[1]}/${i._id}`}
                key={i._id}
              >
                <Card
                  title={i.title}
                  oldPrice={i.oldPrice}
                  newPrice={i.newPrice}
                  image={mediaURL + i.image}
                />
              </Link>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
