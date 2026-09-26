import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { OffersBanner } from './components/OffersBanner';
import { ProductList } from './components/ProductList';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  // Estado principal del carrito de compras
  const [allProducts, setAllProducts] = useState([]);

  // Estado del total acumulado a pagar
  const [total, setTotal] = useState(0);

  // Estado del número total de unidades en el carrito
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 1. Encabezado con barra de navegación completa de Felimiau y carrito flotante interactivo */}
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      {/* 2. Contenido Principal */}
      <main className="flex-grow-1">
        {/* Sección Carrusel Accesible con fotos de Blanquito y Talia */}
        <Carousel />

        {/* Sección de Bienvenida y Banner Interactivo de Ofertas */}
        <OffersBanner />

        {/* Sección del Catálogo de Productos con funcionalidad de Carrito */}
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />

        {/* Sección de Servicios y Beneficios de Felimiau */}
        <Services />

        {/* Sección de Formulario de Contacto Interactivo con React */}
        <ContactForm />
      </main>

      {/* 3. Pie de página de Felimiau */}
      <Footer />
    </div>
  );
}

export default App;
