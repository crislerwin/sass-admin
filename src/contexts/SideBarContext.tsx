import { createContext, useState } from "react";

export const SideBarContext = createContext(null);

export const SideProvider: React.FC<{}> = ({ children }) => {
  const [item, setItem] = useState<[]>();
  return (
    <SideBarContext.Provider
      value={{
        item,
        setItem,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
