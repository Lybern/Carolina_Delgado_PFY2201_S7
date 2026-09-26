import { useState } from 'react';

export const Header = ({
  allProducts = [],
  setAllProducts,
  total = 0,
  countProducts = 0,
  setCountProducts,
  setTotal,
}) => {
  // Estado local para alternar la visualización del menú flotante del carrito
  const [active, setActive] = useState(false);

  // Manejador para eliminar un producto individual del carrito
  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  // Manejador para vaciar el carrito por completo
  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm"
        aria-label="Navegación principal"
      >
        <div className="container">
          {/* Logotipo de la marca */}
          <a className="navbar-brand fw-bold text-warning fs-3" href="#inicio">
            🐱 Felimiau
          </a>

          {/* Botón Toggler para dispositivos móviles */}
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
                <a className="nav-link" href="#area-productos">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicios">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>

            {/* Buscador de productos */}
            <form
              className="d-flex me-3 my-2 my-lg-0"
              role="search"
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

            {/* Contenedor relativo del Carrito de Compras (Icono interactivo + Ventana desplegable) */}
            <div className="container-icon position-relative">
              <div
                className="container-cart-icon"
                onClick={() => setActive(!active)}
                title="Ver carrito de compras"
              >
                {/* SVG del carrito */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="icon-cart-svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                {/* Contador dinámico de unidades */}
                <div className="count-products">
                  <span id="contador-productos">
                    {countProducts > 0 ? countProducts : allProducts.length}
                  </span>
                </div>
              </div>

              {/* Ventana flotante desplegable del carrito */}
              <div
                className={`container-cart-products shadow-lg ${
                  active ? '' : 'hidden-cart'
                }`}
              >
                {allProducts.length ? (
                  <>
                    <div className="row-product">
                      {allProducts.map((product) => (
                        <div className="cart-product" key={product.id}>
                          <div className="info-cart-product">
                            <span className="cantidad-producto-carrito">
                              {product.quantity}
                            </span>
                            <p className="titulo-producto-carrito">
                              {product.nameProduct}
                            </p>
                            <span className="precio-producto-carrito">
                              ${product.price.toLocaleString('es-CL')}
                            </span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="icon-close"
                            onClick={() => onDeleteProduct(product)}
                            title="Eliminar producto"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>

                    <div className="cart-total">
                      <h3>Total:</h3>
                      <span className="total-pagar">
                        ${total.toLocaleString('es-CL')}
                      </span>
                    </div>

                    <button className="btn-clear-all" onClick={onCleanCart}>
                      Vaciar Carrito
                    </button>
                  </>
                ) : (
                  <p className="cart-empty">El carrito está vacío</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
