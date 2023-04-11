import { Accordion } from "flowbite-react";
import React from "react";

export const AccordionComponent = ({ children }) => {
  return (
    <Accordion alwaysOpen={false} className="w-3/4">
      {children.map((i) => (
        <Accordion.Panel key={i.props.title}>
          <Accordion.Title>{i.props.title}</Accordion.Title>
          <Accordion.Content>{i}</Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};
