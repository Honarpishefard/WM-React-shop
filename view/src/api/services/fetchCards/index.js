import { mainInstance } from "api";

export const fetchCardsService = () => {
    return mainInstance.get("/card");
  };

export const fetchCardDetailsService = (cardId) => {
  return mainInstance.get(`/card?cardId=${cardId}`);
};
