import { Accordion } from "flowbite-react";
import React from "react";

export const AccordionComponent = ({ children, classes }) => {
  return (
    <Accordion alwaysOpen={false} className={classes}>
      {children.map((i) => (
        <Accordion.Panel key={i.props.title}>
          <Accordion.Title>{i.props.title}</Accordion.Title>
          <Accordion.Content>{i}</Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};
