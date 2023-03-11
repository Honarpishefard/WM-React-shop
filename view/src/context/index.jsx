import { createContext, useState } from "react";

export const store = createContext({
  products: [],
  setProducts: () => {},
  user: [],
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
