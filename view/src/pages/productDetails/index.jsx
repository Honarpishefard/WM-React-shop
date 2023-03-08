import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProductDetailsService } from 'api';

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchProductDetailsService(id).then((res) => setProduct(res.data.data[0]));
  }, []);

  return (
    <>
      <p>{product.desc}</p>
    </>
  );
};
