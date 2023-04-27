import { searchService } from "api";

export const handleSearch = (e, searchCategory) => {
  console.log(e);
  searchService(searchCategory, e).then((res) => {
    console.log(res?.data?.data);
    return res?.data?.data;
  });
};
