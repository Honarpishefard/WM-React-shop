import { Link } from "react-router-dom";
import logo from "assets/images/headerLogo.jpg";
import Cookies from "js-cookie";
import { Button } from "components";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { handleLogOut } from "utils/logout";
import { useContext, useEffect, useState } from "react";
import { store } from "context";
import { fetchUserService } from "api";

export const Header = () => {
  const [token, setToken] = useState(Cookies.get("loginToken"));
  const { user, setUser } = useContext(store);

  const str = user?.name;
  const matches = str?.match(/\b(\w)/g); // ['J','S','O','N']
  const acronym = matches?.join(""); // JSON

  return (
    <>
      <Navbar fluid={true} rounded={true} className="px-10">
        <Link to="/" className="flex">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Header Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            W&M
          </span>
        </Link>
        <Navbar.Collapse>
          <Link
            className="text-base text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            to="/products/men"
            active={true}
          >
            Man’s
          </Link>
          <Link
            className="text-base text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            to="/products/women"
          >
            {" "}
            Woman’s
          </Link>
          <Link
            className="text-base text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            to="#"
          >
            {" "}
            Kid’s
          </Link>
          <Link
            className="text-base text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            to="#"
          >
            New Collections
          </Link>
          <Link
            to="#"
            className="flex text-base gap-2 items-center py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Card
          </Link>
        </Navbar.Collapse>
        {token ? (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar className="px-2" placeholderInitials={acronym} />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  handleLogOut();
                  setToken("");
                }}
              >
                Log out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
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
      </Navbar>
    </>
  );
};
