import { addToCardService } from "api";

export const addToCard = (productId, size, quantity, id) => {
  addToCardService(productId, size, quantity, id);
};
