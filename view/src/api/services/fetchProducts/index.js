import { mainInstance } from "api";

export const fetchProductsService = (category) => {
  return mainInstance.get(`/products?category=${category}`);
};

export const fetchProductDetailsService = (cardId) => {
  return mainInstance.get(`/products?cardId=${cardId}`);
};
