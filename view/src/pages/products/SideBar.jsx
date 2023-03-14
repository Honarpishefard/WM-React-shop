import { Tabs } from "flowbite-react";
import "assets/style/index.css";

export const SideBar = ({ sec1, sec2, sec3 }) => {
  return (
    <Tabs.Group
      aria-label="Default tabs"
      style="default"
      className="flex gap-2 flex-col w-1/4 mx-auto tabs-group px-6 py-4"
    >
      <Tabs.Item color="red" active={true} title={sec1}></Tabs.Item>
      <Tabs.Item title={sec2}></Tabs.Item>
      <Tabs.Item title={sec3}></Tabs.Item>
    </Tabs.Group>
  );
};
