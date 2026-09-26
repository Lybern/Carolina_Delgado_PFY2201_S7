import { useState } from 'react';

export const Header = ({
  allProducts = [],
  setAllProducts,
  total = 0,
  countProducts = 0,
  setCountProducts,
  setTotal,
}) => {
  // Estado booleano local para controlar la visibilidad del menú desplegable del carrito.
  // false = ventana oculta, true = ventana visible.
  const [active, setActive] = useState(false);

  /**
   * Función para eliminar un producto específico del carrito al presionar la '✕'.
   * Aplica el principio de inmutabilidad en React utilizando el método .filter()
   * para generar un nuevo arreglo sin modificar directamente el estado existente.
   * 
   * @param {Object} product - El objeto del producto que se desea remover del carrito.
   */
  const onDeleteProduct = (product) => {
    // .filter() recorre el arreglo y conserva únicamente aquellos elementos cuyo 'id'
    // sea diferente al 'id' del producto que se quiere eliminar.
    const results = allProducts.filter((item) => item.id !== product.id);

    // Descuenta del monto total el subtotal correspondiente a este producto (precio * cantidad)
    setTotal(total - product.price * product.quantity);

    // Descuenta del contador numérico de la burbuja la cantidad de unidades que tenía este producto
    setCountProducts(countProducts - product.quantity);

    // Actualiza el estado con el nuevo arreglo filtrado, lo que desencadena el re-renderizado
    setAllProducts(results);
  };

  /**
   * Función para vaciar completamente el carrito de compras.
   * Restablece los tres estados principales a sus valores iniciales:
   * - Arreglo de productos vacío ([])
   * - Total a pagar en 0
   * - Contador de productos en 0
   */
  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header className="header-tutorial">
      <div className="header-container-inner">
        {/* Logotipo / Marca de la tienda */}
        <h1 className="header-brand-title">🐱 Felimiau</h1>

        {/* Contenedor relativo que agrupa el icono del carrito y la ventana flotante */}
        <div className="container-icon">
          {/* Icono interactivo del carrito: Al hacer clic, invierte el valor booleano de 'active' (!active)
              para alternar entre mostrar y ocultar la lista desplegable */}
          <div
            className="container-cart-icon"
            onClick={() => setActive(!active)}
          >
            {/* Gráfico vectorial SVG de la bolsa de compras (escalable y personalizable vía CSS) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-cart"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            {/* Burbuja indicadora que muestra la cantidad de productos en el carrito */}
            <div className="count-products">
              <span id="contador-productos">
                {countProducts > 0 ? countProducts : allProducts.length}
              </span>
            </div>
          </div>

          {/* Ventanita flotante del carrito: 
              Usa clases dinámicas con template literals: si 'active' es false, agrega 'hidden-cart'
              (display: none en CSS) para mantener la ventana oculta hasta la interacción del usuario */}
          <div
            className={`container-cart-products ${
              active ? '' : 'hidden-cart'
            }`}
          >
            {/* Renderizado condicional: evalúa si existen elementos en el carrito.
                Si allProducts.length > 0, renderiza la lista de productos y totales.
                Si está vacío (0), renderiza el párrafo informativo 'El carrito está vacío' */}
            {allProducts.length ? (
              <>
                {/* Lista con scroll vertical de los productos actualmente agregados */}
                <div className="row-product">
                  {allProducts.map((product) => (
                    <div className="cart-product" key={product.id}>
                      <div className="info-cart-product">
                        {/* Cantidad de unidades de este producto en el carrito */}
                        <span className="cantidad-producto-carrito">
                          {product.quantity}
                        </span>
                        {/* Nombre del producto */}
                        <p className="titulo-producto-carrito">
                          {product.nameProduct}
                        </p>
                        {/* Precio unitario formateado en moneda local */}
                        <span className="precio-producto-carrito">
                          ${product.price.toLocaleString('es-CL')}
                        </span>
                      </div>

                      {/* Icono SVG de cruz (✕) para ejecutar la función de eliminación onDeleteProduct */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-close"
                        onClick={() => onDeleteProduct(product)}
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

                {/* Sección de resumen con el cálculo del total general acumulado */}
                <div className="cart-total">
                  <h3>Total:</h3>
                  <span className="total-pagar">
                    ${total.toLocaleString('es-CL')}
                  </span>
                </div>

                {/* Botón para vaciar todo el contenido del carrito mediante onCleanCart */}
                <button className="btn-clear-all" onClick={onCleanCart}>
                  Vaciar Carrito
                </button>
              </>
            ) : (
              // Mensaje mostrado cuando el arreglo allProducts se encuentra vacío
              <p className="cart-empty">El carrito está vacío</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
