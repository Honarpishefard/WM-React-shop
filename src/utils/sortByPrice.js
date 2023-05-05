import { fetchProductsService } from "api";

export const sortByPrice = async (category, order) => {
  const res = await fetchProductsService(category || "");
  if (order == "asc") {
    await res?.data?.data?.sort((a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice));
    return res?.data?.data;
  } else {
    await res?.data?.data?.sort((a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice));
    return res?.data?.data;
  }
};
