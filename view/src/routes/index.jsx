import { Home, Signup, Login, Cards, CardDetails } from "pages";

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
    path: "cards",
    element: <Cards />,
  },
  {
    path: "cards/:id",
    element: <CardDetails />,
  },
];
