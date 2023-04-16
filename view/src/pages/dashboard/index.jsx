import { AccordionComponent, Button, FileInput, TextField } from "components";
import { store } from "context";
import { Header } from "layout";
import { useContext, useState } from "react";
import { acronym } from "utils/acronym";

import useDashboard from "./useDashboard";
export const Dashboard = () => {
  const { onRegister, handleSubmit, register, loading } = useDashboard();

  const { user, setUser } = useContext(store);
  const [imgfile, uploadimg] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-12 px-8">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-green-300 to-blue-400 hover:bg-gradient-to-bl rounded-full w-40 h-40 flex justify-center items-center">
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
          <form
            id="name"
            onSubmit={handleSubmit(onRegister)}
            className="flex items-center gap-7"
            title="Change your display name"
          >
            <div className="grow">
              <TextField
                label="Enter a new name"
                type="text"
                htmlFor="name"
                id="name"
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
                placeholder="Your name..."
                validation={{ ...register("name") }}
              />
            </div>
            <Button onClick={() => setInputValue('')} loading={loading}>Save</Button>
          </form>
          <form
            id="email"
            onSubmit={handleSubmit(onRegister)}
            className="flex items-center gap-7"
            title="Change email"
          >
            <div className="grow">
              <TextField
                label="Enter a new email"
                type="email"
                htmlFor="email"
                id="email"
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
                placeholder="Your email..."
                validation={{ ...register("email") }}
              />
            </div>
            <Button onClick={() => setInputValue('')} loading={loading}>Save</Button>
          </form>
          <div
            title="Change your profile photo"
            className="w-full flex flex-col items-center  pt-6"
          >
            <FileInput onChange={imgFilehandler} />
            {imgfile?.map((img) => {
              return (
                <>
                  <p className="font-normal text-lg">Preview:</p>
                  <span className="py-4" key={img}>
                    <img
                      src={img}
                      className="max-w-md h-auto"
                      alt="profile image"
                    />
                  </span>
                  <Button loading={loading} classes="my-5 w-1/4 justify-center">
                    Save
                  </Button>
                </>
              );
            })}
          </div>
          <form
            id="password"
            onSubmit={handleSubmit(onRegister)}
            title="Change password"
          >
            <TextField
              label="Current password"
              type="password"
              htmlFor="currentPassword"
              id="currentPassword"
              placeholder="current password..."
              value={inputValue}
              onChange={(e)=> setInputValue(e.target.value)}
              validation={{ ...register("currentPassword") }}
            />
            <TextField
              label="Enter a new password"
              type="password"
              htmlFor="newPassword"
              id="newPassword"
              placeholder="new password..."
              value={inputValue}
              onChange={(e)=> setInputValue(e.target.value)}
              validation={{ ...register("newPassword") }}
            />
            <TextField
              label="Repeat new password"
              type="password"
              htmlFor="repeatNewPassword"
              id="repeatNewPassword"
              placeholder="repeat password..."
              validation={{ ...register("repeatNewPassword") }}
            />
            <Button loading={loading} classes="mx-auto w-1/4 justify-center">
              Save
            </Button>
          </form>
        </AccordionComponent>
      </div>
    </>
  );
};
