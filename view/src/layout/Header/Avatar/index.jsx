import { Avatar, Dropdown } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { handleLogOut } from "utils/logout";
import Cookies from "js-cookie";
import { Button } from "components";

export const UserAvatar = () => {
  const [token, setToken] = useState(Cookies.get("loginToken"));

  return (
    <>
      {token ? (
        <Dropdown
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
          arrowIcon={false}
          inline={true}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link to="/">Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <p
              onClick={() => {
                handleLogOut();
                setToken("");
              }}
              className="text-primary-700 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log out
            </p>
          </Dropdown.Item>
        </Dropdown>
      ) : (
        <div className="flex">
          <Link
            to="/login"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Log in
          </Link>
          <Link to="/signup">
            <Button classes="mr-0 mb-0">Sign Up</Button>
          </Link>
        </div>
      )}
    </>
  );
};
