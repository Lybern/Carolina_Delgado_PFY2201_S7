export const Header = ({ totalProductos = 0 }) => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm"
        aria-label="Navegación principal"
      >
        <div className="container">
          {/* Logotipo oficial de Felimiau */}
          <a className="navbar-brand fw-bold text-warning fs-3" href="#inicio">
            🐱 Felimiau
          </a>

          {/* Botón responsive para celulares */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menú de navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Enlaces de navegación */}
          <div className="collapse navbar-collapse" id="menuPrincipal">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#area-productos" id="menu_productos">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicios" id="menu_servicios">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto" id="menu_contacto">
                  Contacto
                </a>
              </li>
            </ul>

            {/* Buscador rápido */}
            <form
              className="d-flex me-3"
              role="search"
              id="form_busqueda"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar producto..."
                aria-label="Buscar producto para gatos"
              />
              <button className="btn btn-warning text-dark fw-bold" type="submit">
                Buscar
              </button>
            </form>

            {/* Botón e indicador del Carrito */}
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-outline-warning position-relative d-flex align-items-center gap-2"
                aria-label="Ver carrito"
              >
                <span className="fs-5">🛒</span>
                <span className="fw-semibold">Carrito</span>
                <span className="badge bg-warning text-dark rounded-pill">
                  {totalProductos}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
