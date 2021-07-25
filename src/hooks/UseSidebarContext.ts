import { useContext } from "react";

import { SideBarContext } from "../contexts/SideBarContext";

export const useSideBarContext: any = () => {
  const context = useContext(SideBarContext);
  const { item, setItem } = context;
  return { item, setItem };
};
