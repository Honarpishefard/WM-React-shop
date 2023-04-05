import { Tabs } from "flowbite-react";
import "assets/style/index.css";
import { useContext } from "react";
import { store } from "context";

export const SideBar = ({ sections }) => {
  const { products, setProducts } = useContext(store);
  // products.filter((i) => (i.category[1] === sec1 ? console.log(i) : null));
  
  return (
    <Tabs.Group
      aria-label="Default tabs"
      style="default"
      className="flex gap-2 flex-col w-1/4 mx-auto tabs-group px-6 py-4"
    >
      {sections.map((i) => (
        <Tabs.Item
          onClick={() => console.log("first")}
          color="red"
          active={true}
          title={i}
        ></Tabs.Item>
      ))}
    </Tabs.Group>
  );
};
