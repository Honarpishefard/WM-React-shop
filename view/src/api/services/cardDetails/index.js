import { mainInstance } from "api";

export const addToCardService = (productId, size, quantity, userId) => {
  return mainInstance.post("/cardDetails", {
    productId,
    size,
    quantity,
    userId,
  });
};

export const fetchCardService = () => {
  return mainInstance.get("/cardDetails");
};
