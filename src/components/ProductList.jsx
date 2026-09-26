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
    // Si el producto ya existe en el carrito, aumentamos su cantidad
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

    // Si no existía en el carrito, lo agregamos por primera vez
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className='container-items'>
      {data.map(product => (
        <div className='item' key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className='info-product'>
            <h2>{product.nameProduct}</h2>
            <p className='description'>{product.descripcion}</p>
            <div className='pricing-container'>
              {product.precioNormal && (
                <span className='price-normal'>
                  ${product.precioNormal.toLocaleString('es-CL')}
                </span>
              )}
              <p className='price'>${product.price.toLocaleString('es-CL')}</p>
            </div>
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
