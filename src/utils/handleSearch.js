import { searchService } from "api";

export const handleSearch = async (e, searchCategory) => {
  const res = await searchService(searchCategory, e);
  return (res?.data?.data);
};
