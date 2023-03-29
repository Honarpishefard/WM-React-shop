import { mainInstance } from "api";

export const fetchCardService = (userId) => {
  return mainInstance.post("/cardDetails", { userId });
};

export const addToCardService = (productId, size, quantity, userId) => {
  return mainInstance.post("/cardDetails/addToCard", {
    productId,
    size,
    quantity,
    userId,
  });
};

export const removeFromCardService = (data) => {
  return mainInstance.post("/cardDetails/removeFromCard", { id: data });
};
