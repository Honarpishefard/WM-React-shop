import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProductDetailsService, mediaURL } from "api";
import { Footer, Header } from "layout";
import { Skeleton } from "./Skeleton";
import "./index.css";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { category, id } = useParams();
  useEffect(() => {
    fetchProductDetailsService(category, id).then((res) => {
      setProduct(res.data.data[0]);
      setLoading(false);
    });
  }, []);

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
              <p className="text-xl text-gray-500 dark:text-white font-medium">
                {product.oldPrice}
              </p>
            </div>
            <p className="leading-relaxed font-normal text-lg">
              {product.desc}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
