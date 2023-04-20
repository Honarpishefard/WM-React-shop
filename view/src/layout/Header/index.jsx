import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "assets/images/headerLogo.jpg";
import Cookies from "js-cookie";
import { Button } from "components";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { handleLogOut } from "utils/logout";
import { useContext, useState } from "react";
import { store } from "context";
import "assets/style/index.css";
import { acronym } from "utils/acronym";
import { uploadsURL } from "api";

export const Header = () => {
  const [token, setToken] = useState(Cookies.get("loginToken"));
  const { user, setUser } = useContext(store);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <Navbar fluid={true} rounded={true} className="px-10">
        <div className="md:flex gap-4 grow">
        <Link to="/" className="flex">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Header Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">W&M</span>
        </Link>
        <Navbar.Collapse className="navbar">
          <Link to="/products/men" active={true} className="text-base text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
            Man’s</Link>
          <Link className="text-base text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            to="/products/women">Woman’s</Link>
          <Link to="#" className="text-base text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
            Kid’s
          </Link>
          <Link to="#" className="text-base text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              New Collections</Link>
          <Link to="/card" className="flex text-base gap-2 items-center py-2 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Card
          </Link>
        </Navbar.Collapse>
        </div>
        {token && user ? (
          <div className="flex md:order-2 gap-3 sm:self-start">
            <Dropdown arrowIcon={false} inline={true}
              label={ user?.profilePicture ? <div className="flex gap-3 items-center">
                <p className="text-gray-700 font-medium">Welcome, {user?.name}</p>
                <img className="w-10 rounded-md" src={uploadsURL + user?.profilePicture} alt="" />
              </div> : <Avatar className="px-2" placeholderInitials={acronym(user?.name)}/> }>
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>
              <Dropdown.Item onClick={() => navigate("/dashboard")}>Dashboard</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  handleLogOut();
                  setToken("");
                  if (["/dashboard"].includes(pathname)) navigate("/");
                }}>Log out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        ) : (
          <div className="flex">
            <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
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
