import { useContext, useState } from "react";
import { store } from "context";
import "assets/style/index.css";
import { useParams } from "react-router";
import { fetchProductsService } from "api";
import { Dropdown } from "flowbite-react";
import { SideBarMenu } from "./SideBarMenu";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

export const SideBar = ({ sections }) => {
  const { products, setProducts } = useContext(store);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  const handleFilter = async (i) => {
    const res = await fetchProductsService(category || "");
    res.data.data.filter(async (item) => {
      setFilteredProducts([]);
      (await item.category[1]) === i ? filteredProducts.push(item) : null;
      setProducts(filteredProducts);
    });
  };

  return (
    <div>
      <div className="px-10 py-9 mb-10 hidden flex-col gap-5 border-r md:flex">
        <div className="flex flex-col gap-4 border-b pb-4">
          {sections.map((i) => (
            <div className="bg-gray-100 rounded-lg text-black font-medium py-2 px-12" onClick={() => handleFilter(i)} key={i}>{capitalizeFirstLetter(i)}</div>
          ))}
        </div>
        <Dropdown label="Filter" placement="right">
          <Dropdown.Header>
            <span className="block truncate text-sm font-medium">Filter products by</span>
          </Dropdown.Header>
          <Dropdown inline={true} label="price" placement="right">
            <Dropdown.Item>Ascending</Dropdown.Item>
            <Dropdown.Item>Descending</Dropdown.Item>
          </Dropdown>
        </Dropdown>
        <div className="flex flex-col">
          <p className="order-last">1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>
      <SideBarMenu>
        <div className="flex flex-col gap-4 border-b pb-4">
          {sections.map((i) => (
            <div className="bg-gray-100 rounded-lg text-black font-medium py-2 px-12 flex justify-center" onClick={() => handleFilter(i)} key={i}>{capitalizeFirstLetter(i)}</div>
          ))}
        </div>
        <div className="flex items-center py-4 gap-3">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
          <span className="block truncate text-lg font-medium">Filter products by</span>
        </div>
        <button type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
          <span className="flex-1 ml-3 text-left whitespace-nowrap">Price</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <ul id="dropdown-example" className="hidden py-2 space-y-2">
          <li>
            <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Ascending</span>
          </li>
          <li>
            <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Descending</span>
          </li>
        </ul>
      </SideBarMenu>
    </div>
  );
};
