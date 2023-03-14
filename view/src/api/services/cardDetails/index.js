import { mainInstance } from "api";

export const addToCardService = (productId, size, quantity, userId) => {
  return mainInstance.post("/cardDetails/addToCard", {
    productId,
    size,
    quantity,
    userId,
  });
};

export const fetchCardService = (userId) => {
  return mainInstance.post("/cardDetails", { userId });
};
