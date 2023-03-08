import { Home, Signup, Login, Products, ProductDetails } from "pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "products/:category",
    element: <Products />,
  },
  {
    path: "",
    element: <ProductDetails />,
  },
];
