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

import Router from "next/router";

export const Sidebar: React.FC<{}> = ({ children }) => {
  return (
    <>
      <nav className="main-menu">
        <ul>
          <li>
            <a>
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
            <a>
              <i className="fa  fa-2x">
                <FaList />
              </i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li className="has-subnav">
            <a>
              <i className="fa  fa-2x">
                <FaFolderOpen />
              </i>
              <span className="nav-text">Arquivos</span>
            </a>
          </li>
          <li>
            <a>
              <i className="fa  fa-2x">
                <FaChartBar />
              </i>
              <span className="nav-text">Graficos</span>
            </a>
          </li>
          <li>
            <a>
              <i className="fa  fa-2x">
                <FaFont />
              </i>
              <span className="nav-text">Anotações</span>
            </a>
          </li>
          <li>
            <a>
              <i className="fa  fa-2x">
                <FaTable />
              </i>
              <span className="nav-text">Tabelas</span>
            </a>
          </li>
          <li>
            <a>
              <i className="fa  fa-2x">
                <FaMapMarked />
              </i>
              <span className="nav-text">Mapas</span>
            </a>
          </li>
          <li>
            <a>
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
