import { mainInstance } from "api";

export const addToCardService = (productId, size, quantity, userId) => {
  const res = mainInstance.post("/cardDetails", {productId, size, quantity, userId});
  return res;
};
