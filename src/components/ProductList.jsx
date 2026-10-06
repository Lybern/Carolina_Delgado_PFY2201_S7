import { useState } from 'react';

/**
 * Componente que renderiza el catálogo de productos de Felimiau.
 * Gestiona el filtrado reactivo por categorías, búsqueda en tiempo real,
 * alternancia interactiva de vista (cuadrícula / lista) y comunicación
 * con el carrito y la ventana modal a través de props.
 *
 * @component
 * @param {Object} props - Propiedades recibidas desde App.
 * @param {Array<Object>} [props.productos=[]] - Catálogo dinámico cargado mediante useEffect.
 * @param {Array<Object>} [props.allProducts=[]] - Productos actualmente agregados al carrito.
 * @param {Function} props.onAddProduct - Callback para añadir un producto al carrito.
 * @param {Function} props.onVerProducto - Callback para seleccionar un producto y abrir el modal.
 * @param {string} [props.searchTerm=''] - Término de búsqueda reactivo en tiempo real.
 * @returns {JSX.Element} Sección del catálogo interactivo.
 */
export const ProductList = ({
  productos = [],
  allProducts = [],
  onAddProduct,
  onVerProducto,
  searchTerm = '',
}) => {
  // Estado para el filtro de categorías activo
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  // Estado interactivo para alternar entre vista de cuadrícula y lista (Semana 8)
  const [vista, setVista] = useState('grid');

  // Lista de categorías disponibles para la navegación
  const categorias = [
    'Todos',
    'Rascadores & Torres',
    'Nutrición Premium',
    'Snacks & Premios',
    'Camas & Confort',
    'Accesorios & Salud',
    'Higiene & Aseo',
  ];

  // Lógica de filtrado reactivo combinando categoría seleccionada y búsqueda
  const productosFiltrados = productos.filter((item) => {
    const coincideCategoria =
      categoriaSeleccionada === 'Todos' || item.categoria === categoriaSeleccionada;
    const nombre = (item.nameProduct || item.title || '').toLowerCase();
    const desc = (item.descripcion || item.description || '').toLowerCase();
    const busqueda = searchTerm.trim().toLowerCase();
    const coincideBusqueda =
      busqueda === '' || nombre.includes(busqueda) || desc.includes(busqueda);
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <section id="area-productos" className="py-5">
      <div className="container">
        {/* Encabezado semántico del catálogo */}
        <div className="text-center mb-4">
          <h2 className="fw-bold display-6 text-dark">Nuestros Productos Destacados</h2>
          <p className="text-muted lead">
            Productos de alta calidad pensados exclusivamente para tus michis.
          </p>
          <hr className="w-25 mx-auto text-warning border-3 opacity-100" />
        </div>

        {/* Barra superior de controles: Filtros por categoría y selector de vista */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-4">
          {/* Botones de categorías (Nav-Pills) */}
          <div
            className="d-flex flex-wrap justify-content-center gap-2"
            role="group"
            aria-label="Filtro de productos por categoría"
          >
            {categorias.map((cat) => {
              const isActive = categoriaSeleccionada === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`btn rounded-pill px-3 py-2 fw-semibold transition-all ${
                    isActive
                      ? 'btn-warning text-dark shadow-sm'
                      : 'btn-outline-secondary bg-white'
                  }`}
                  onClick={() => setCategoriaSeleccionada(cat)}
                >
                  {cat === 'Todos' ? '🐾 Todos' : cat}
                </button>
              );
            })}
          </div>

          {/* Selector interactivo de vista (useState: grid | list) */}
          <div
            className="btn-group shadow-sm bg-white rounded-pill p-1 border"
            role="group"
            aria-label="Selector de visualización"
          >
            <button
              type="button"
              className={`btn btn-sm rounded-pill px-3 fw-bold transition-all ${
                vista === 'grid' ? 'btn-dark text-white' : 'btn-light text-muted'
              }`}
              onClick={() => setVista('grid')}
              title="Ver en cuadrícula de tarjetas"
            >
              ⊞ Cuadrícula
            </button>
            <button
              type="button"
              className={`btn btn-sm rounded-pill px-3 fw-bold transition-all ${
                vista === 'list' ? 'btn-dark text-white' : 'btn-light text-muted'
              }`}
              onClick={() => setVista('list')}
              title="Ver en formato de lista compacta"
            >
              ☰ Lista
            </button>
          </div>
        </div>

        {/* Resumen de resultados encontrados */}
        <div className="d-flex justify-content-between align-items-center mb-4 text-muted small px-1">
          <span>
            Mostrando <strong>{productosFiltrados.length}</strong> de {productos.length} productos
          </span>
          {searchTerm && (
            <span>
              Filtro por búsqueda: <em>"{searchTerm}"</em>
            </span>
          )}
        </div>

        {/* RENDERIZADO CONDICIONAL DE LA CUADRÍCULA O LISTA DE PRODUCTOS */}
        <div className="row g-4 justify-content-center" id="productos">
          {productosFiltrados.map((product) => {
            const precioNormal = product.precioNormal || product.price;
            const precioActual = product.precioOferta || product.price;
            const descuento =
              precioNormal > precioActual
                ? Math.round(((precioNormal - precioActual) / precioNormal) * 100)
                : 0;

            // Verificación reactiva si el producto ya está en el carrito
            const itemEnCarrito = allProducts.find((item) => item.id === product.id);
            const estaEnCarrito = Boolean(itemEnCarrito);

            // ==========================================
            // VISTA 1: VISTA DE LISTA COMPACTA
            // ==========================================
            if (vista === 'list') {
              return (
                <div className="col-12" key={product.id}>
                  <article className="card shadow-sm border-0 rounded-4 overflow-hidden p-3 bg-white">
                    <div className="row g-3 align-items-center">
                      <div className="col-12 col-sm-3 col-md-2 text-center">
                        <img
                          src={product.img || product.image}
                          alt={product.nameProduct || product.title}
                          className="img-fluid rounded-3"
                          style={{ maxHeight: '120px', objectFit: 'contain' }}
                          loading="lazy"
                        />
                      </div>
                      <div className="col-12 col-sm-6 col-md-7">
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <span className="badge bg-warning text-dark fw-bold">
                            {product.categoria}
                          </span>
                          {descuento > 0 && (
                            <span className="badge bg-danger">-{descuento}% OFF</span>
                          )}
                        </div>
                        <h3 className="h5 fw-bold text-dark mb-1">
                          {product.nameProduct || product.title}
                        </h3>
                        <p className="text-muted small mb-0 text-truncate">
                          {product.descripcion || product.description}
                        </p>
                      </div>
                      <div className="col-12 col-sm-3 col-md-3 text-end d-flex flex-column justify-content-center gap-2">
                        <div className="text-end">
                          {descuento > 0 && (
                            <span className="text-muted text-decoration-line-through small me-2">
                              ${precioNormal.toLocaleString('es-CL')}
                            </span>
                          )}
                          <span className="h5 fw-bold text-warning mb-0">
                            ${precioActual.toLocaleString('es-CL')}
                          </span>
                        </div>
                        <div className="d-flex gap-2 justify-content-end">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-dark fw-semibold"
                            onClick={() => onVerProducto(product)}
                            title="Ver detalles"
                          >
                            📋 Detalles
                          </button>
                          {estaEnCarrito ? (
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-success fw-bold shadow-sm"
                              onClick={() => onAddProduct(product)}
                              title="Añadir una unidad extra"
                            >
                              ✓ En carrito ({itemEnCarrito.quantity})
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-sm btn-warning text-dark fw-bold shadow-sm"
                              onClick={() => onAddProduct(product)}
                            >
                              🛒 Añadir
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            }

            // ==========================================
            // VISTA 2: VISTA DE CUADRÍCULA DE TARJETAS (GRID)
            // ==========================================
            return (
              <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                <article className="card-producto card h-100 shadow-sm border-0 position-relative d-flex flex-column rounded-4 overflow-hidden bg-white">
                  {/* Badge de recomendación */}
                  {product.badge && (
                    <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-3 z-1 fw-bold shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  {/* Badge de descuento porcentual */}
                  {descuento > 0 && (
                    <span className="badge bg-danger position-absolute top-0 end-0 m-3 z-1 fw-bold shadow-sm">
                      -{descuento}% OFF
                    </span>
                  )}

                  {/* Imagen del producto */}
                  <div className="overflow-hidden bg-light p-3 text-center">
                    <img
                      src={product.img || product.image}
                      className="card-img-top"
                      alt={product.nameProduct || product.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="card-body d-flex flex-column p-4 flex-grow-1">
                    <div className="mb-2">
                      <span className="text-muted small text-uppercase fw-semibold">
                        {product.categoria}
                      </span>
                      <h3 className="h5 fw-bold text-dark mt-1 mb-2">
                        {product.nameProduct || product.title}
                      </h3>
                    </div>

                    <p className="card-text text-muted small flex-grow-1 mb-3">
                      {product.descripcion || product.description}
                    </p>

                    {/* Precios normal y oferta */}
                    <div className="d-flex align-items-baseline gap-2 mb-3">
                      {descuento > 0 && (
                        <span className="text-muted text-decoration-line-through small">
                          ${precioNormal.toLocaleString('es-CL')}
                        </span>
                      )}
                      <span className="h4 fw-bold text-warning mb-0">
                        ${precioActual.toLocaleString('es-CL')}
                      </span>
                    </div>

                    {/* Botones de acción con renderizado condicional interactivo */}
                    <div className="mt-auto d-flex flex-column gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-dark w-100 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                        onClick={() => onVerProducto(product)}
                      >
                        <span>📋</span> Ver detalles
                      </button>

                      {estaEnCarrito ? (
                        <button
                          type="button"
                          className="btn btn-outline-success fw-bold w-100 py-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                          onClick={() => onAddProduct(product)}
                          title="Añadir una unidad adicional al carrito"
                        >
                          <span>✓</span> En el carrito ({itemEnCarrito.quantity})
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-warning text-dark fw-bold w-100 py-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                          onClick={() => onAddProduct(product)}
                        >
                          <span>🛒</span> Añadir al carrito
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}

          {/* Renderizado condicional si no hay resultados */}
          {productosFiltrados.length === 0 && (
            <div className="col-12 text-center py-5">
              <p className="fs-1 mb-2">😿</p>
              <h4 className="fw-bold text-dark">No se encontraron productos</h4>
              <p className="text-muted">
                No hay artículos que coincidan con "{searchTerm}". Intenta con otro término o categoría.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
