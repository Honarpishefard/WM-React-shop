import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  fetchProductDetailsService,
  fetchProductsService,
  mediaURL,
} from "api";
import { Footer, Header } from "layout";
import { Skeleton } from "./Skeleton";
import "./index.css";
import { Button, Card, CardSkeleton } from "components";
import { Link } from "react-router-dom";
import { Dropdown } from 'flowbite-react';

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [suggestedproducts, setSuggestedproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category, sec, id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

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
              <div className="flex gap-6 bg-slate-200 w-fit rounded-full items-center">
                <Button
                  classes="rounded-0 rounded-tr-lg rounded-br-lg"
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                >
                  -
                </Button>
                <p>{quantity}</p>
                <Button
                  classes="rounded-0 rounded-tl-lg rounded-bl-lg"
                  onClick={() => {
                    if (quantity < 20) setQuantity(quantity + 1);
                  }}
                >
                  +
                </Button>
              </div>
              <Dropdown label={size || 'Select Size'} placement="right" inline={true}>
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
