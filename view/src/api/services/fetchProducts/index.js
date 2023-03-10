import { mainInstance } from "api";

export const fetchProductsService = (category) => {
  return mainInstance.get(`/products?category=${category}`);
};

export const fetchProductDetailsService = (category, sec, id) => {
  return mainInstance.get(
    `/products?category=${category}&sec=${sec}&productId=${id}`
  );
};
