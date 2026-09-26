import { data } from '../data';

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
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

    // 2. Flujo para productos nuevos:
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <section id="area-productos" className="py-5">
      <div className="container">
        {/* Encabezado semántico del catálogo */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 text-dark">Nuestros Productos Destacados</h2>
          <p className="text-muted lead">Productos de alta calidad pensados exclusivamente para tus michis.</p>
          <hr className="w-25 mx-auto text-warning border-3 opacity-100" />
        </div>

        {/* Cuadrícula de tarjetas de productos de Felimiau */}
        <div className="row g-4" id="productos">
          {data.map((product) => {
            const descuento = Math.round(
              ((product.precioNormal - product.precioOferta) / product.precioNormal) * 100
            );

            return (
              <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                <article className="card-producto card h-100 shadow-sm border-0 position-relative">
                  {/* Badge de categoría o más vendido */}
                  {product.badge && (
                    <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-3 z-1 fw-bold shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  {/* Badge de descuento de oferta */}
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

                  {/* Cuerpo de la tarjeta */}
                  <div className="card-body d-flex flex-column p-4">
                    <div className="mb-2">
                      <span className="text-muted small text-uppercase fw-semibold">
                        {product.categoria}
                      </span>
                      <h3 className="h5 fw-bold text-dark mt-1 mb-2">
                        {product.nameProduct}
                      </h3>
                    </div>

                    {/* Descripción corta */}
                    <p className="card-text text-muted small flex-grow-1">
                      {product.descripcion}
                    </p>

                    {/* Precios normal y de oferta */}
                    <div className="d-flex align-items-baseline gap-2 my-3">
                      <span className="text-muted text-decoration-line-through small">
                        ${product.precioNormal.toLocaleString('es-CL')}
                      </span>
                      <span className="h4 fw-bold text-warning mb-0">
                        ${product.price.toLocaleString('es-CL')}
                      </span>
                    </div>

                    {/* Botón interactivo para añadir al carrito */}
                    <button
                      type="button"
                      className="btn btn-warning text-dark fw-bold w-100 py-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                      onClick={() => onAddProduct(product)}
                    >
                      <span>🛒</span> Añadir al carrito
                    </button>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
