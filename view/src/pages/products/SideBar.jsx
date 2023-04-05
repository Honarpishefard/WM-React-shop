import { useContext, useState } from "react";
import { store } from "context";
import "assets/style/index.css";

export const SideBar = ({ sections }) => {
  const { products, setProducts } = useContext(store);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // console.log(filteredProducts);

  return (
    <div className="px-10 py-9 mb-10 flex flex-col gap-5 border-r">
      {sections.map((i) => (
        <div className="bg-indigo-50 rounded-2xl py-3 px-12"
          onClick={() => {
            products.filter((item) => {
              item.category[1] === i ? filteredProducts.push(item) : null;
              setProducts(filteredProducts);
            });
          }}
          key={i}
        >
          {i}
        </div>
      ))}
    </div>
  );
};
