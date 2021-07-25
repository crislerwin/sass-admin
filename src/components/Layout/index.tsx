import { Sidebar } from "../Sidebar";

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="container-fluid">
      <Sidebar />
      <div className="row">{children}</div>
    </div>
  );
};
