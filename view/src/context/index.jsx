import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const store = createContext({
  products: [],
  setProducts: () => {},
  user: Cookies.get("_id") || [],
  setUser: () => {},
});

export default function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <store.Provider
      value={{
        products,
        setProducts,
        user,
        setUser,
      }}
    >
      {children}
    </store.Provider>
  );
}
