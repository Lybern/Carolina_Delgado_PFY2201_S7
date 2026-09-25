import { data } from '../data';

export const ProductList = ({ allProducts, setAllProducts }) => {

  const onAddProduct = (product) => {
    console.log("add", product);
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
