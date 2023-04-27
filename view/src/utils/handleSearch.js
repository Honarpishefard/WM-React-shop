import { searchService } from "api";

export const handleSearch = async (e, searchCategory) => {
  setTimeout(async () => {
    const res = await searchService(searchCategory, e);
    console.log(res);
  }, 3000);
};
