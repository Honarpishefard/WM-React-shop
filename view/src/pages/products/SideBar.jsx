import { useContext, useState } from "react";
import { store } from "context";
import "assets/style/index.css";
import { useParams } from "react-router";
import { fetchProductsService } from "api";

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
        <div className="bg-indigo-50 rounded-2xl py-3 px-12" onClick={() => handleFilter(i)} key={i}>
          {i}
        </div>
      ))}
    </div>
  );
};
