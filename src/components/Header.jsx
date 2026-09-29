import { useState } from 'react';

/**
 * Componente Header que integra la barra de navegación superior,
 * búsqueda reactiva en tiempo real y el menú flotante del carrito de compras.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Array<Object>} props.allProducts - Lista de productos actualmente en el carrito.
 * @param {Function} props.setAllProducts - Setter para actualizar los productos del carrito.
 * @param {number} props.total - Monto total acumulado en $ CLP.
 * @param {number} props.countProducts - Cantidad total de unidades en el carrito.
 * @param {Function} props.setCountProducts - Setter para actualizar la cantidad de unidades.
 * @param {Function} props.setTotal - Setter para actualizar el monto total.
 * @param {string} props.searchTerm - Cadena de texto de búsqueda en tiempo real.
 * @param {Function} props.setSearchTerm - Setter para actualizar el término de búsqueda.
 * @returns {JSX.Element} Barra de navegación y carrito desplegable.
 */
export const Header = ({
  allProducts = [],
  setAllProducts,
  total = 0,
  countProducts = 0,
  setCountProducts,
  setTotal,
  searchTerm = '',
  setSearchTerm = () => {},
}) => {
  // Estado local para alternar la visualización del menú flotante del carrito
  const [active, setActive] = useState(false);

  /**
   * Elimina un producto individual del carrito y descuenta sus valores del total y contador.
   * @param {Object} product - Producto a eliminar.
   */
  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  /**
   * Incrementa en 1 la cantidad de un producto existente en el carrito.
   * @param {Object} product - Producto a incrementar.
   */
  const onIncreaseQuantity = (product) => {
    const updatedProducts = allProducts.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts(updatedProducts);
  };

  /**
   * Disminuye en 1 la cantidad de un producto, o lo elimina si la cantidad es 1.
   * @param {Object} product - Producto a decrementar.
   */
  const onDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setTotal(total - product.price);
      setCountProducts(countProducts - 1);
      setAllProducts(updatedProducts);
    } else {
      onDeleteProduct(product);
    }
  };

  /**
   * Restablece el carrito de compras a su estado vacío inicial.
   */
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

            {/* Buscador de productos con reactividad en tiempo real */}
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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

                {/* Contador dinámico de unidades: se muestra solo cuando hay productos agregados */}
                {countProducts > 0 && (
                  <div className="count-products">
                    <span id="contador-productos">{countProducts}</span>
                  </div>
                )}
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
                            {/* Selector interactivo de cantidad con botones [+] y [-] */}
                            <div className="selector-cantidad-carrito">
                              <button
                                type="button"
                                className="btn-cantidad-cart"
                                onClick={() => onDecreaseQuantity(product)}
                                title="Disminuir una unidad"
                                aria-label={`Disminuir una unidad de ${product.nameProduct}`}
                              >
                                −
                              </button>
                              <span className="cantidad-producto-carrito">
                                {product.quantity}
                              </span>
                              <button
                                type="button"
                                className="btn-cantidad-cart"
                                onClick={() => onIncreaseQuantity(product)}
                                title="Aumentar una unidad"
                                aria-label={`Aumentar una unidad de ${product.nameProduct}`}
                              >
                                +
                              </button>
                            </div>

                            <p className="titulo-producto-carrito">
                              {product.nameProduct}
                            </p>
                            <span className="precio-producto-carrito">
                              ${(product.price * product.quantity).toLocaleString('es-CL')}
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
