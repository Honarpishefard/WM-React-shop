import { createContext, useEffect, useState } from "react";
import { fetchUserService } from 'api';
import Cookies from 'js-cookie';

export const store = createContext({
  products: [],
  setProducts: () => {},
  user: [],
  setUser: () => {},
});

export default function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUserService({ id: Cookies.get("_id") }).then((res) =>
      setUser(res.user[0])
    );
  }, []);

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
