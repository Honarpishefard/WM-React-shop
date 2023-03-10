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
    path: "products",
    element: <Products />,
  },
  {
    path: "products/:category",
    element: <Products />,
  },
  {
    path: "products/:id",
    element: <ProductDetails />,
  },
  {
    path: "products/:category/:sec/:id",
    element: <ProductDetails />,
  },
];
