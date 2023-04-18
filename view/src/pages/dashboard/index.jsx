import { AccordionComponent, Button, FileInput, TextField } from "components";
import { store } from "context";
import { Header } from "layout";
import { useContext, useState } from "react";
import { acronym } from "utils/acronym";
import useDashboard from "./useDashboard";
import { uploadsURL } from "api";

export const Dashboard = () => {
  const { onRegister, handleSubmit, register, onFormDataSumbit, loading } = useDashboard();

  const { user, setUser } = useContext(store);
  const [imgfile, uploadimg] = useState([]);
  const [file, setFile] = useState();

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg([]);
      setFile();
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
      setFile(e.target.files[0])
    };
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-12 px-8">
        <div className="flex flex-col items-center relative">
          {user?.profilePicture ? <img className="w-full rounded-full" src={uploadsURL + user?.profilePicture} alt="profile picture" /> : 
            <div className="bg-gradient-to-br from-green-300 to-blue-400 hover:bg-gradient-to-bl rounded-full w-40 h-40 flex justify-center items-center">
              <p className="text-gray-800 font-light text-6xl">{acronym(user?.name)}</p>
            </div>}
          <div onClick={() => console.log('delete profile picture')} className="bg-black bg-opacity-50 text-white p-3 rounded-full absolute top-2 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
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
            onSubmitCapture={(e) => {
              e.preventDefault();
              e.target.reset();
            }}
            className="flex items-center gap-7"
            title="Change your display name">
            <div className="grow">
              <TextField
                label="Enter a new name"
                type="text"
                htmlFor="name"
                id="name"
                placeholder="Your name..."
                validation={{ ...register("name") }}/>
            </div>
            <Button loading={loading}>Save</Button>
          </form>
          <form
            id="email"
            onSubmit={handleSubmit(onRegister)}
            onSubmitCapture={(e) => {
              e.preventDefault();
              e.target.reset();
            }}
            className="flex items-center gap-7"
            title="Change email">
            <div className="grow">
              <TextField
                label="Enter a new email"
                type="email"
                htmlFor="email"
                id="email"
                placeholder="Your email..."
                validation={{ ...register("email") }}/>
            </div>
            <Button loading={loading}>Save</Button>
          </form>
          <form onSubmit={(e) => {
            e.preventDefault();
            onFormDataSumbit(file)
            }}
            id="profileImageUpload"
            title="Change your profile photo"
            className="w-full flex flex-col items-center  pt-6">
            <FileInput onChange={imgFilehandler} />
            {imgfile?.map((img) => {
              return (
                <>
                  <p className="font-normal text-lg">Preview:</p>
                  <span className="p-4" key={img}>
                    <img
                      src={img}
                      className="max-w-md h-auto"
                      alt="profile image"/>
                  </span>
                  <Button loading={loading} classes="my-5 w-1/4 justify-center">Save</Button>
                </>
              );
            })}
          </form>
          <form
            id="password"
            onSubmit={handleSubmit(onRegister)}
            onSubmitCapture={(e) => {
              e.preventDefault();
              e.target.reset();
            }}
            title="Change password">
            <TextField
              label="Current password"
              type="password"
              htmlFor="currentPassword"
              id="currentPassword"
              placeholder="current password..."
              validation={{ ...register("currentPassword") }}/>
            <TextField
              label="Enter a new password"
              type="password"
              htmlFor="newPassword"
              id="newPassword"
              placeholder="new password..."
              validation={{ ...register("newPassword") }}/>
            <TextField
              label="Repeat new password"
              type="password"
              htmlFor="repeatNewPassword"
              id="repeatNewPassword"
              placeholder="repeat password..."
              validation={{ ...register("repeatNewPassword") }}/>
            <Button loading={loading} classes="mx-auto w-1/4 justify-center">Save</Button>
          </form>
        </AccordionComponent>
      </div>
    </>
  );
};
