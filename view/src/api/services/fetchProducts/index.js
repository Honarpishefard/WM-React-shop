import { mainInstance } from "api";

export const fetchProductsService = (category) => {
  return mainInstance.get(`/products?category=${category}`);
};

export const fetchProductDetailsService = (category, id) => {
  return mainInstance.get(`/products?category=${category}&productId=${id}`);
};
