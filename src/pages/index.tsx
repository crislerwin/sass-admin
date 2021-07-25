import React from "react";
import { Layout } from "../components/Layout";
import { useSideBarContext } from "../hooks/UseSidebarContext";
const IndexPage: React.FC<{}> = () => {
  const { item } = useSideBarContext();
  return (
    <>
      <Layout>{item}</Layout>
    </>
  );
};
export default IndexPage;
