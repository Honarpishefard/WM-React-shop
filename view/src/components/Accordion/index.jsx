import { Accordion } from "flowbite-react";
import React from "react";

export const AccordionComponent = ({ children }) => {
//   console.log(children);
  return (
    <Accordion className="w-full">
      {children.map((i) => (
        <Accordion.Panel key={i.props.title}>
          <Accordion.Title>{i.props.title}</Accordion.Title>
          <Accordion.Content>{i}</Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>

    // <Accordion>
    //   <Accordion.Panel alwaysOpen={true}>
    //     <Accordion.Title>What is Flowbite?</Accordion.Title>
    //     <Accordion.Content>
    //       <p className="mb-2 text-gray-500 dark:text-gray-400">
    //         Flowbite is an open-source library of interactive components built
    //         on top of Tailwind CSS including buttons, dropdowns, modals,
    //         navbars, and more.
    //       </p>
    //       <p className="text-gray-500 dark:text-gray-400">
    //         Check out this guide to learn how to
    //         <a
    //           href="https://flowbite.com/docs/getting-started/introduction/"
    //           className="text-blue-600 hover:underline dark:text-blue-500"
    //         >
    //           get started
    //         </a>
    //         and start developing websites even faster with components on top of
    //         Tailwind CSS.
    //       </p>
    //     </Accordion.Content>
    //   </Accordion.Panel>
    //   <Accordion.Panel>
    //     <Accordion.Title>Is there a Figma file available?</Accordion.Title>
    //     <Accordion.Content>
    //       <p className="mb-2 text-gray-500 dark:text-gray-400">
    //         Flowbite is first conceptualized and designed using the Figma
    //         software so everything you see in the library has a design
    //         equivalent in our Figma file.
    //       </p>
    //       <p className="text-gray-500 dark:text-gray-400">
    //         Check out the
    //         <a
    //           href="https://flowbite.com/figma/"
    //           className="text-blue-600 hover:underline dark:text-blue-500"
    //         >
    //           Figma design system
    //         </a>
    //         based on the utility classes from Tailwind CSS and components from
    //         Flowbite.
    //       </p>
    //     </Accordion.Content>
    //   </Accordion.Panel>
    // </Accordion>
  );
};
