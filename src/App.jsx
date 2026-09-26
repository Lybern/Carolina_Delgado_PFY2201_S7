import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
  // Estado principal que almacena el arreglo de productos agregados al carrito
  const [allProducts, setAllProducts] = useState([]);

  // Estado que acumula el monto total a pagar en pesos
  const [total, setTotal] = useState(0);

  // Estado que lleva la cuenta total de unidades de productos en el carrito
  const [countProducts, setCountProducts] = useState(0);

  return (
    // React Fragment (<> ... </>): Permite retornar múltiples componentes hermanos 
    // sin agregar nodos o divs innecesarios al DOM del navegador
    <>
      {/* Componente Header: Recibe los estados y funciones modificadoras para mostrar
          el contador numérico en el icono del carrito, listar los productos en la 
          ventana desplegable, calcular el total y permitir eliminar o vaciar items */}
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      {/* Componente ProductList: Renderiza el catálogo de productos y recibe las funciones
          del estado para poder agregar artículos al carrito incrementando cantidades y totales */}
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </>
  );
}

export default App;
