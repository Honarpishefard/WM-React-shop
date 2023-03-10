import { Card } from "components";
import { Footer, Header } from "layout";
import { Link } from "react-router-dom";
import { HeroSec } from "./HomeComponents";
import { fetchProductsService, mediaURL } from "api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export const Home = () => {
  const [data, setData] = useState();
  const { category } = useParams();
  const [index, setIndex] = useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    fetchProductsService(category || "").then((res) => {
      setData(res.data.data);
      const index1 = randomIntFromInterval(0, res.data.data.length);
      const index2 = randomIntFromInterval(0, res.data.data.length);
      const index3 = randomIntFromInterval(0, res.data.data.length);
      const index4 = randomIntFromInterval(0, res.data.data.length);
      if (((index1 != index2) != index3) != index4) {
        setIndex([index1, index2, index3, index4]);
      }
    });
  }, [category]);

  const handleNav = (id, category) => {
    if (["/products/men", "/products/women"].includes(pathname)) {
      navigate(pathname + "/" + id);
    } else {
      navigate(pathname + "/" + category + "/" + id);
    }
  };

  return (
    <>
      <Header />
      <HeroSec />
      <Link
        to="/products"
        className="flex justify-end rounded-3xl px-5 py-3 items-center pr-4 pl-3 font-medium text-gray-700 border-b border-gray-100 hover:bg-primary-100 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
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
      <div className="grid gap-5 mx-auto my-6 px-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {index?.map((i) => (
          <div onClick={() => handleNav(i._id, i.category[0])} key={i._id}>
            <Card
              key={data[i]._id}
              title={data[i].title}
              newPrice={data[i].newPrice}
              oldPrice={data[i].oldPrice}
              image={mediaURL + data[i].image}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
