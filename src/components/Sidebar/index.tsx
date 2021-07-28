import {
  FaChartBar,
  FaFolderOpen,
  FaFont,
  FaHome,
  FaInfo,
  FaLaptop,
  FaList,
  FaMapMarked,
  FaPowerOff,
  FaTable,
} from "react-icons/fa";
import { useSideBarContext } from "../../hooks/UseSidebarContext";
import { Home } from "../Home";
import { Register } from "../Register";
import { Dashboard } from "../Dashboard";
import { Files } from "../Files";
import { Graph } from "../Graph";
import { Notes } from "../Notes";
import { Maps } from "../Maps";
import { Info } from "../Info";
import Router from "next/router";

export const Sidebar: React.FC<{}> = ({ children }) => {
  const { setItem } = useSideBarContext();
  return (
    <>
      <nav className="main-menu">
        <ul>
          <li>
            <a
              onClick={() => {
                setItem(Home);
              }}
            >
              <i className="fa fa-2x">
                <FaHome />
              </i>
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="has-subnav">
            <a onClick={() => Router.push("/register")}>
              <i className="fa  fa-2x">
                <FaLaptop />
              </i>
              <span className="nav-text">Cadastro</span>
            </a>
          </li>
          <li className="has-subnav">
            <a
              onClick={() => {
                setItem(Dashboard);
              }}
            >
              <i className="fa  fa-2x">
                <FaList />
              </i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li className="has-subnav">
            <a
              onClick={() => {
                setItem(Files);
              }}
            >
              <i className="fa  fa-2x">
                <FaFolderOpen />
              </i>
              <span className="nav-text">Arquivos</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setItem(Graph);
              }}
            >
              <i className="fa  fa-2x">
                <FaChartBar />
              </i>
              <span className="nav-text">Graficos</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setItem(Notes);
              }}
            >
              <i className="fa  fa-2x">
                <FaFont />
              </i>
              <span className="nav-text">Anotações</span>
            </a>
          </li>
          <li>
            <a onClick={() => Router.push("/table")}>
              <i className="fa  fa-2x">
                <FaTable />
              </i>
              <span className="nav-text">Tabelas</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setItem(Maps);
              }}
            >
              <i className="fa  fa-2x">
                <FaMapMarked />
              </i>
              <span className="nav-text">Mapas</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setItem(Info);
              }}
            >
              <i className="fa fa-2x">
                <FaInfo />
              </i>
              <span className="nav-text">Informações</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a onClick={() => Router.push("/")}>
              <i className="fa fa-2x">
                <FaPowerOff />
              </i>
              <span className="nav-text">Sair</span>
            </a>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};
