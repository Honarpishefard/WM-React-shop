import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProductDetailsService } from "api";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id, category } = useParams();
  useEffect(() => {
    fetchProductDetailsService(id || category).then((res) =>
      setProduct(res.data.data[0])
    );
  }, []);

  return (
    <>
      <p>product.desc</p>
    </>
  );
};
