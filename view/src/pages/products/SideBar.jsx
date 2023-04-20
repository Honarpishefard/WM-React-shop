import { useContext, useState } from "react";
import { store } from "context";
import "assets/style/index.css";
import { useParams } from "react-router";
import { fetchProductsService } from "api";
import { Dropdown, Sidebar } from "flowbite-react";
import { AccordionComponent } from "components";

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
    <div className="px-10 py-9 mb-10 flex flex-col gap-5 border-r">
      {sections.map((i) => (
        <div
          className="bg-blue-700 rounded-lg text-white py-2 px-12"
          onClick={() => handleFilter(i)}
          key={i}
        >
          {i}
        </div>
      ))}
      <Dropdown label="Filter" placement="right">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
        {/* <Dropdown.Item> */}
          <Dropdown inline={true} label="By price" placement="right">
            <Dropdown.Item>Ascending</Dropdown.Item>
            <Dropdown.Item>Descending</Dropdown.Item>
          </Dropdown>
        {/* </Dropdown.Item> */}
      </Dropdown>
    </div>
  );
};
