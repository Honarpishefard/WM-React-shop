import { Card, CardSkeleton } from "components";
import { Footer, Header } from "layout";
import { Link } from "react-router-dom";
import { HeroSec } from "./HomeComponents";
import { fetchProductsService, mediaURL } from "api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const Home = () => {
  const [data, setData] = useState();
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  const array = [23, 10, 15, 20];

  useEffect(() => {
    fetchProductsService(category || "").then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  }, [category]);

  return (
    <>
      <Header key="header" />
      <HeroSec key="hero" />
      <div className="flex justify-end py-6 px-9">
        <Link
          key="seeMore"
          to="/products"
          className="flex max-w-fit rounded-3xl px-5 py-3 items-center font-medium text-gray-700 border-b border-gray-100 hover:bg-primary-100 lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
          see more
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="grid gap-7 mx-auto mb-14 px-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {array?.map((i) =>
          loading ? (
            <CardSkeleton key={i._id} />
          ) : data ? (
            <Link
              to={`/products/${data[i].category[0]}/${data[i].category[1]}/${data[i]._id}`}
              key={i?._id}
            >
              <Card
                key={data[i]?._id}
                title={data[i]?.title}
                newPrice={data[i]?.newPrice}
                oldPrice={data[i]?.oldPrice}
                image={mediaURL + data[i]?.image}
              />
            </Link>
          ) : null
        )}
      </div>
      <Footer key="footer" />
    </>
  );
};
