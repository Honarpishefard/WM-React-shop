import { mainInstance } from "api";

export const fetchProductsService = () => {
  return mainInstance.get("/products");
};

export const fetchProductDetailsService = (cardId) => {
  return mainInstance.get(`/products?cardId=${cardId}`);
};
