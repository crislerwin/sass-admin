import React from "react";
import { Sidebar } from "../components/Sidebar";
import { useSideBarContext } from "../hooks/UseSidebarContext";
const IndexPage: React.FC<{}> = () => {
  const { item } = useSideBarContext();
  return (
    <>
      <Sidebar>
        <div className="main-container">{item}</div>
      </Sidebar>
    </>
  );
};
export default IndexPage;
