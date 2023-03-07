import { Home, Register, Login, Cards, CardDetails } from "pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "cards",
    element: <Cards />,
  },
  {
    path: "cards/:id",
    element: <CardDetails />,
  },
];
