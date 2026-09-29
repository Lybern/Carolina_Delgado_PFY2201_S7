/**
 * Componente modal accesible para visualización de ficha técnica y detalles del producto.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object|null} props.product - Producto seleccionado para ver detalles técnicos.
 * @param {Function} props.onClose - Función callback para cerrar el modal.
 * @param {Function} props.onAddToCart - Función callback para añadir el producto al carrito.
 * @returns {JSX.Element|null} Elemento modal interactivo o null si no hay producto activo.
 */
export const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  // Si no hay producto seleccionado, el componente no renderiza nada en el DOM
  if (!product) return null;

  const descuento = Math.round(
    ((product.precioNormal - product.precioOferta) / product.precioNormal) * 100
  );

  return (
    <>
      {/* Contenedor Modal de Bootstrap (activo y visible con d-block) */}
      <div
        className="modal fade show d-block modal-dialog-custom"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalDetallesTitulo"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            {/* Cabecera del Modal con estilo oscuro y acento dorado de Felimiau */}
            <div className="modal-header bg-dark text-white border-bottom border-warning border-3 py-3 px-4">
              <div className="d-flex align-items-center gap-2">
                <span className="fs-5">🐾</span>
                <h5 className="modal-title fw-bold text-warning mb-0" id="modalDetallesTitulo">
                  Detalles del Producto
                </h5>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Cerrar modal"
                onClick={onClose}
              ></button>
            </div>

            {/* Cuerpo del Modal con diseño responsivo en dos columnas */}
            <div className="modal-body p-4 bg-light">
              <div className="row g-4 align-items-center">
                {/* Columna Izquierda: Imagen del producto y badges */}
                <div className="col-12 col-md-5 text-center">
                  <div className="position-relative rounded-3 overflow-hidden shadow-sm bg-white p-2 border">
                    {product.badge && (
                      <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-3 z-1 fw-bold shadow-sm">
                        {product.badge}
                      </span>
                    )}
                    {descuento > 0 && (
                      <span className="badge bg-danger position-absolute top-0 end-0 m-3 z-1 fw-bold shadow-sm">
                        -{descuento}% OFF
                      </span>
                    )}
                    <img
                      src={product.img}
                      alt={product.nameProduct}
                      className="img-fluid rounded-2 modal-product-img"
                    />
                  </div>
                </div>

                {/* Columna Derecha: Información técnica y beneficios */}
                <div className="col-12 col-md-7">
                  <span className="badge bg-secondary text-uppercase mb-2">
                    {product.categoria}
                  </span>
                  <h3 className="h4 fw-bold text-dark mb-2">{product.nameProduct}</h3>

                  <p className="text-muted small mb-3">{product.descripcion}</p>

                  {/* Precios comparativos */}
                  <div className="d-flex align-items-baseline gap-2 mb-3 p-2 bg-white rounded-3 border">
                    <span className="text-muted text-decoration-line-through small">
                      Precio normal: ${product.precioNormal.toLocaleString('es-CL')}
                    </span>
                    <span className="h4 fw-bold text-warning mb-0">
                      ${product.price.toLocaleString('es-CL')}
                    </span>
                  </div>

                  {/* Lista de Especificaciones Técnicas */}
                  {product.especificaciones && (
                    <div className="card bg-white border-0 shadow-sm rounded-3 p-3">
                      <h6 className="fw-bold text-dark border-bottom pb-2 mb-2">
                        📋 Ficha Técnica y Cuidados
                      </h6>
                      <ul className="list-unstyled small mb-0 d-flex flex-column gap-2 text-muted">
                        <li>
                          <strong className="text-dark">📏 Dimensiones / Formato:</strong>{' '}
                          {product.especificaciones.medidas}
                        </li>
                        <li>
                          <strong className="text-dark">🧪 Materiales / Composición:</strong>{' '}
                          {product.especificaciones.material}
                        </li>
                        <li>
                          <strong className="text-dark">🩺 Recomendación Felina:</strong>{' '}
                          {product.especificaciones.recomendacion}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Pie del Modal con acciones interactivas */}
            <div className="modal-footer bg-white border-top py-3 px-4 d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary px-4 fw-semibold"
                onClick={onClose}
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-warning text-dark fw-bold px-4 shadow-sm"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                🛒 Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fondo oscuro translúcido (Backdrop) de Bootstrap con cierre al hacer clic fuera */}
      <div
        className="modal-backdrop fade show modal-backdrop-custom"
        onClick={onClose}
      ></div>
    </>
  );
};

export default ProductDetailModal;
