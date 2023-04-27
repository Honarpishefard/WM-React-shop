import { searchService } from "api";

export const handleSearch = (e, searchCategory) => {
  setTimeout(() => {
    searchService(searchCategory, e);
  }, 3000);
};
