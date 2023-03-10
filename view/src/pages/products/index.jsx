import { useEffect, useState } from "react";
import { fetchProductsService, mediaURL } from "api";
import { useLocation, useParams, useNavigate } from "react-router";
import { Card } from "components";
import { Footer, Header } from "layout";
import { Tabs } from "./Tabs";
import { Skeleton } from "./Skeleton";

export const Products = () => {
  const [data, setData] = useState();
  const { category } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductsService(category || "").then((res) => {
      setData(res.data.data);
      setLoading(false);
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
      <div className="flex">
        <Tabs />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center p-8">
          {data?.map((i) =>
            loading ? (
              <Skeleton key={i._id} />
            ) : (
              <div onClick={() => handleNav(i._id, i.category[0])} key={i._id}>
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
