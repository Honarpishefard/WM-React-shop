import { AccordionComponent, FileInput } from "components";
import { store } from "context";
import { useContext } from "react";
import { acronym } from "utils/acronym";

export const Dashboard = () => {
  const { user, setUser } = useContext(store);

  return (
    <div className="flex flex-col items-center pt-12 px-8">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 rounded-full w-40 h-40 flex justify-center items-center">
          <p className="text-gray-800 font-light text-6xl">
            {acronym(user?.name)}
          </p>
        </div>
        <div className="flex flex-col items-center pt-3 pb-8">
          <p className="font-normal text-xl">{user?.name}</p>
          <p className="font-normal text-xl">{user?.email}</p>
        </div>
      </div>
      <AccordionComponent>
        <p title="Change your display name">{user.name}</p>
        <p title="Change email">{user.email}</p>
        <div
          title="Change your profile photo"
          className="w-full flex flex-col items-center  pt-6"
        >
          <FileInput />
        </div>
        <div title="Change password">
          <p></p>
        </div>
      </AccordionComponent>
    </div>
  );
};
