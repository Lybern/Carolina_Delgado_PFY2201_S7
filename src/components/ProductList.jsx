import { useState } from 'react';
import { data } from '../data';
import { ProductDetailModal } from './ProductDetailModal';

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  // Estado para el filtro de categorías activo
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  // Estado para el producto mostrado en la ventana modal (null cuando está cerrada)
  const [productoModal, setProductoModal] = useState(null);

  // Lista de categorías disponibles para los botones Nav-Pills
  const categorias = [
    'Todos',
    'Rascadores & Torres',
    'Nutrición Premium',
    'Snacks & Premios',
    'Camas & Confort',
    'Accesorios & Salud',
    'Higiene & Aseo',
  ];

  // Lógica de filtrado en tiempo real según la categoría seleccionada
  const productosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? data
      : data.filter((item) => item.categoria === categoriaSeleccionada);

  // Función para gestionar la adición de productos al carrito sin duplicar
  const onAddProduct = (product) => {
    // 1. Verificación de existencia previa con .find():
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    // 2. Flujo para productos nuevos en el carrito:
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

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

        {/* 1. FILTROS POR CATEGORÍA CON BOTONES NAV-PILLS DE BOOTSTRAP */}
        <div
          className="d-flex flex-wrap justify-content-center gap-2 mb-5"
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

        {/* 2. CUADRÍCULA DE TARJETAS DE PRODUCTOS FILTRADOS */}
        <div className="row g-4 justify-content-center" id="productos">
          {productosFiltrados.map((product) => {
            const descuento = Math.round(
              ((product.precioNormal - product.precioOferta) / product.precioNormal) * 100
            );

            return (
              <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                <article className="card-producto card h-100 shadow-sm border-0 position-relative d-flex flex-column">
                  {/* Badge de categoría o recomendación */}
                  {product.badge && (
                    <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-3 z-1 fw-bold shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  {/* Badge de porcentaje de descuento */}
                  {descuento > 0 && (
                    <span className="badge bg-danger position-absolute top-0 end-0 m-3 z-1 fw-bold shadow-sm">
                      -{descuento}% OFF
                    </span>
                  )}

                  {/* Imagen del producto */}
                  <div className="overflow-hidden">
                    <img
                      src={product.img}
                      className="card-img-top"
                      alt={product.nameProduct}
                      loading="lazy"
                    />
                  </div>

                  {/* Cuerpo de la tarjeta con contenido flexible */}
                  <div className="card-body d-flex flex-column p-4 flex-grow-1">
                    <div className="mb-2">
                      <span className="text-muted small text-uppercase fw-semibold">
                        {product.categoria}
                      </span>
                      <h3 className="h5 fw-bold text-dark mt-1 mb-2">
                        {product.nameProduct}
                      </h3>
                    </div>

                    {/* Descripción corta del artículo */}
                    <p className="card-text text-muted small flex-grow-1 mb-3">
                      {product.descripcion}
                    </p>

                    {/* Precios normal tachado y de oferta */}
                    <div className="d-flex align-items-baseline gap-2 mb-3">
                      <span className="text-muted text-decoration-line-through small">
                        ${product.precioNormal.toLocaleString('es-CL')}
                      </span>
                      <span className="h4 fw-bold text-warning mb-0">
                        ${product.price.toLocaleString('es-CL')}
                      </span>
                    </div>

                    {/* Botones de acción: Ver Detalles (Modal) y Añadir al Carrito */}
                    <div className="mt-auto d-flex flex-column gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-dark w-100 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                        onClick={() => setProductoModal(product)}
                      >
                        <span>🔍</span> Ver detalles rápidos
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning text-dark fw-bold w-100 py-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                        onClick={() => onAddProduct(product)}
                      >
                        <span>🛒</span> Añadir al carrito
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. MODAL DE DETALLES RÁPIDOS DE BOOTSTRAP (CONTROLADO POR ESTADO) */}
      <ProductDetailModal
        product={productoModal}
        onClose={() => setProductoModal(null)}
        onAddToCart={onAddProduct}
      />
    </section>
  );
};

export default ProductList;
