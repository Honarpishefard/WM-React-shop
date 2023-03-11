import { useContext, useEffect, useState } from "react";
import { fetchProductsService, mediaURL } from "api";
import { useLocation, useParams, useNavigate } from "react-router";
import { Card, CardSkeleton } from "components";
import { Footer, Header } from "layout";
import { SideBar } from "./SideBar";
import { store } from "context";

export const Products = () => {
  const { products, setProducts } = useContext(store);
  const { category } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductsService(category || "").then((res) => {
      setProducts(res.data.data);
      setLoading(false);
    });
  }, [category]);

  const handleNav = (id, category, sec) => {
    if (["/products/men", "/products/women"].includes(pathname)) {
      navigate(`${pathname}/${sec}/${id}`);
    } else {
      navigate(`${pathname}/${category}/${sec}/${id}`);
    }
  };

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar sec1="coats" sec2="Dresses" />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center p-8">
          {products?.map((i) =>
            loading ? (
              <CardSkeleton key={i._id} />
            ) : (
              <div
                onClick={() => handleNav(i._id, i.category[0], i.category[1])}
                key={i._id}
              >
                <Card
                  title={i.title}
                  newPrice={i.newPrice}
                  oldPrice={i.oldPrice}
                  image={mediaURL + i.image}
                />
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
