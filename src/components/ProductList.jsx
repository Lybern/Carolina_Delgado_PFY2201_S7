import { data } from '../data';

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  /**
   * Manejador de eventos para agregar un producto al carrito de compras.
   * Aplica lógica de prevención de duplicados:
   * - Si el producto ya existe en el carrito: incrementa su propiedad 'quantity' en 1 usando .map()
   * - Si el producto no existe en el carrito: lo añade al final del arreglo usando el operador spread ([...allProducts, product])
   * Además actualiza los acumuladores de dinero total y contador de unidades.
   * 
   * @param {Object} product - Objeto del producto seleccionado en el catálogo.
   */
  const onAddProduct = (product) => {
    // 1. Verificación de existencia previa con .find():
    // Devuelve el primer elemento que cumpla con la condición o 'undefined' si no existe.
    if (allProducts.find((item) => item.id === product.id)) {
      // Usamos .map() para generar un nuevo arreglo inmutable donde únicamente se modifica
      // el objeto que coincide en su 'id', incrementando su cantidad en 1.
      const products = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      // Incrementa el monto acumulado sumando el precio del producto agregado
      setTotal(total + product.price * product.quantity);

      // Incrementa el número de unidades en el contador de la burbuja
      setCountProducts(countProducts + product.quantity);

      // Actualiza el estado con la copia modificada del arreglo y finaliza la ejecución con return
      return setAllProducts([...products]);
    }

    // 2. Flujo para productos nuevos (no existían previamente en el carrito):
    // Suma el precio unitario del nuevo producto al total
    setTotal(total + product.price * product.quantity);

    // Suma la cantidad inicial al contador general
    setCountProducts(countProducts + product.quantity);

    // Agrega el nuevo producto al final del arreglo existente preservando la inmutabilidad
    setAllProducts([...allProducts, product]);
  };

  return (
    // Cuadrícula responsive de productos basada en CSS Grid
    <div className='container-items'>
      {/* .map() recorre el arreglo de productos estáticos importados desde data.js
          para generar dinámicamente cada tarjeta de producto en el DOM */}
      {data.map(product => (
        // La propiedad 'key' es obligatoria en React al mapear listas; permite al Virtual DOM
        // identificar de forma unívoca cada nodo y optimizar el proceso de renderizado
        <div className='item' key={product.id}>
          {/* Contenedor semántico figure para la imagen del producto */}
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>

          {/* Bloque descriptivo con información y acciones del producto */}
          <div className='info-product'>
            <h2>{product.nameProduct}</h2>
            <p className='description'>{product.descripcion}</p>

            <div className='pricing-container'>
              {/* Renderizado condicional: si existe precio normal de lista, se muestra tachado */}
              {product.precioNormal && (
                <span className='price-normal'>
                  ${product.precioNormal.toLocaleString('es-CL')}
                </span>
              )}
              {/* Precio destacado de oferta formateado en pesos */}
              <p className='price'>${product.price.toLocaleString('es-CL')}</p>
            </div>

            {/* Botón interactivo: Usa una función flecha anónima dentro de onClick
                para enviar el objeto 'product' correspondiente como argumento a onAddProduct */}
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
