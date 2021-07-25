import React from "react";
import { Sidebar } from "../components/Sidebar";
import { UserTable } from "../components/UserTable";

export default function IndexPage() {
  return (
    <>
      <Sidebar />
      <UserTable />
    </>
  );
}
