import { useEffect, useState } from "react";
import { fetchProductsService, mediaURL } from "api";
import { useLocation, useParams, useNavigate } from "react-router";
import { Card } from "components";
import { Footer, Header } from "layout";

export const Products = () => {
  const [data, setData] = useState();
  const { category } = useParams();
  const { pathname } = useLocation();
  const nagivate = useNavigate();

  useEffect(() => {
    fetchProductsService(category || "").then((res) => setData(res.data.data));
  }, [category]);

  const handleNav = (id, category) => {
    if (["/products/men", "/products/women"].includes(pathname)) {
      nagivate(pathname + "/" + id);
    } else {
      nagivate(pathname + "/" + category + "/" + id);
    }
  };

  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center p-8">
        {data?.map((i) => (
          <div onClick={() => handleNav(i._id, i.category[0])} key={i._id}>
            <Card
              title={i.title}
              newPrice={i.newPrice}
              oldPrice={i.oldPrice}
              image={mediaURL + i.image}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
