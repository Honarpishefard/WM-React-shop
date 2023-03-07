import { ToastContainer } from "react-toastify";
import { useCallback } from "react";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "routes";
import { Route, Routes } from "react-router";
import useAuth from "hooks/useAuth";
import Cookies from "js-cookie";

function App() {
  const loginToken = Cookies.get("loginToken");

  useAuth();
  const generateRoutes = useCallback(() => {
    return routes.map((route) => <Route key={route.path} {...route} />);
  }, [routes, loginToken]);

  return (
    <>
      <ToastContainer />
      <Routes>{generateRoutes()}</Routes>
    </>
  );
}

export default App;
