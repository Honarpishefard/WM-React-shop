import { useEffect, useState } from "react";
import { fetchProductsService, mediaURL } from "api";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Card } from "components";
import { Footer, Header } from "layout";

export const Products = () => {
  const { category } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetchProductsService(category || "").then((res) => setData(res.data.data));
  }, [category]);

  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center p-8">
        {data?.map((i) => (
          <Link to={`/cards/${i._id}`} key={i._id}>
            <Card
              title={i.title}
              newPrice={i.newPrice}
              oldPrice={i.oldPrice}
              image={mediaURL + i.image}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};
