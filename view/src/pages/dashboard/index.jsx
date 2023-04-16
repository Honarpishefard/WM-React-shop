import { AccordionComponent, Button, FileInput, TextField } from "components";
import { store } from "context";
import { Header } from "layout";
import { useContext, useState } from "react";
import { acronym } from "utils/acronym";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { changeUserInfoService } from "api";

const dashboardSchema = yup
  .object({
    name: yup.string(),
    email: yup.string(),
    currentPassword: yup.string(),
    newPassword: yup.string(),
    repeatNewPassword: yup.string(),
  })
  .required();

export const Dashboard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(dashboardSchema) });

  const { user, setUser } = useContext(store);

  const [imgfile, uploadimg] = useState([]);
  const [loading, setLoading] = useState(false);

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };

  const onRegister = async (data, e) => {
    setLoading(true);
    switch (e.target.id) {
      case "name":
        if (!data.name) return toast.error("No new name entered !");
        try {
          const res = await changeUserInfoService({
            id: user._id,
            name: data?.name,
          });
          toast.success(res?.message);
          setUser(res?.user);
          setLoading(false);
        } catch (ex) {
          toast.error(ex?.response?.data?.message);
          setLoading(false);
        }
        break;
      case "email":
        if (!data.email) return toast.error("No new email entered !");
        try {
          const ress = await changeUserInfoService({
            id: user._id,
            email: data?.email,
          });
          toast.success(ress?.message);
          setUser(ress?.user);
          setLoading(false);
        } catch (ex) {
          toast.error(ex?.response?.data?.message);
          setLoading(false);
        }
        break;
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
                placeholder="Your name..."
                validation={{ ...register("name") }}
              />
            </div>
            <Button loading={loading}>Save</Button>
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
                placeholder="Your email..."
                validation={{ ...register("email") }}
              />
            </div>
            <Button loading={loading}>Save</Button>
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
          <div title="Change password">
            <TextField
              label="Current password"
              type="password"
              htmlFor="currentPassword"
              id="currentPassword"
              placeholder="current password..."
              validation={{ ...register("currentPassword") }}
            />
            <TextField
              label="Enter a new password"
              type="password"
              htmlFor="newPassword"
              id="newPassword"
              placeholder="new password..."
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
          </div>
        </AccordionComponent>
      </div>
    </>
  );
};
