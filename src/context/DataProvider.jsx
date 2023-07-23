import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [login, setLogin] = useState("");

  return (
    <DataContext.Provider
      value={{
        login,
        setLogin,
      }}
    >
        {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
