import { Tabs } from "flowbite-react";

export const SideBar = ({ sec1, sec2, sec3 }) => {
  return (
    <Tabs.Group aria-label="Default tabs" style="default">
      <Tabs.Item active={true} title="Profile">
        Profile content
      </Tabs.Item>
      <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
      <Tabs.Item title="Settings">Settings content</Tabs.Item>
      <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
      <Tabs.Item disabled={true} title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs.Group>
  );
};
