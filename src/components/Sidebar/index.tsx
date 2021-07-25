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
export const Sidebar: React.FC<{}> = () => {
  return (
    <>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            <a href="#">
              <i className="fa  fa-2x">
                <FaHome />
              </i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa  fa-2x">
                <FaLaptop />
              </i>
              <span className="nav-text">Componentes</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa  fa-2x">
                <FaList />
              </i>
              <span className="nav-text">Formulários</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa  fa-2x">
                <FaFolderOpen />
              </i>
              <span className="nav-text">Paginas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa  fa-2x">
                <FaChartBar />
              </i>
              <span className="nav-text">Graficos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa  fa-2x">
                <FaFont />
              </i>
              <span className="nav-text">Anotações</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa  fa-2x">
                <FaTable />
              </i>
              <span className="nav-text">Tabelas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa  fa-2x">
                <FaMapMarked />
              </i>
              <span className="nav-text">Mapas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-2x">
                <FaInfo />
              </i>
              <span className="nav-text">Documentação</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="#">
              <i className="fa fa-2x">
                <FaPowerOff />
              </i>
              <span className="nav-text">Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
