export const Sidebar: React.FC<{}> = () => {
  return (
    <>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa fa-laptop fa-2x"></i>
              <span className="nav-text">Componentes</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa fa-list fa-2x"></i>
              <span className="nav-text">Formulários</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa fa-folder-open fa-2x"></i>
              <span className="nav-text">Paginas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-bar-chart-o fa-2x"></i>
              <span className="nav-text">Graficos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-font fa-2x"></i>
              <span className="nav-text">Anotações</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-table fa-2x"></i>
              <span className="nav-text">Tabelas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker fa-2x"></i>
              <span className="nav-text">Mapas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-info fa-2x"></i>
              <span className="nav-text">Documentação</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="#">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
