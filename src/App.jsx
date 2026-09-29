import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { OffersBanner } from './components/OffersBanner';
import { ProductList } from './components/ProductList';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ToastNotification } from './components/ToastNotification';
import { ScrollToTop } from './components/ScrollToTop';

/**
 * Componente raíz de la aplicación Felimiau.
 * Gestiona el estado global del carrito con persistencia en localStorage,
 * búsqueda reactiva en tiempo real y orquestación de componentes.
 * @component
 * @returns {JSX.Element} Aplicación completa renderizada.
 */
function App() {
  // Estado principal del carrito de compras con inicialización persistente desde localStorage
  const [allProducts, setAllProducts] = useState(() => {
    try {
      const savedCart = localStorage.getItem('felimiau_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error al inicializar el carrito desde localStorage:', error);
      return [];
    }
  });

  // Estado del total acumulado a pagar con persistencia
  const [total, setTotal] = useState(() => {
    try {
      const savedTotal = localStorage.getItem('felimiau_cart_total');
      return savedTotal ? Number(savedTotal) : 0;
    } catch {
      return 0;
    }
  });

  // Estado del número total de unidades en el carrito con persistencia
  const [countProducts, setCountProducts] = useState(() => {
    try {
      const savedCount = localStorage.getItem('felimiau_cart_count');
      return savedCount ? Number(savedCount) : 0;
    } catch {
      return 0;
    }
  });

  // Estado para la búsqueda en tiempo real
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para la notificación Toast flotante de producto añadido
  const [toastProduct, setToastProduct] = useState(null);

  // Sincronización continua de la persistencia en localStorage
  useEffect(() => {
    try {
      localStorage.setItem('felimiau_cart', JSON.stringify(allProducts));
      localStorage.setItem('felimiau_cart_total', total.toString());
      localStorage.setItem('felimiau_cart_count', countProducts.toString());
    } catch (error) {
      console.error('Error al persistir el carrito en localStorage:', error);
    }
  }, [allProducts, total, countProducts]);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 1. Encabezado con barra de navegación completa de Felimiau, buscador y carrito */}
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* 2. Contenido Principal */}
      <main className="flex-grow-1">
        {/* Sección Carrusel Accesible con fotos de Blanquito y Talia */}
        <Carousel />

        {/* Sección de Bienvenida y Banner Interactivo de Ofertas */}
        <OffersBanner />

        {/* Sección del Catálogo de Productos con funcionalidad de Carrito y Búsqueda */}
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          setToastProduct={setToastProduct}
          searchTerm={searchTerm}
        />

        {/* Sección de Servicios y Beneficios de Felimiau */}
        <Services />

        {/* Sección de Formulario de Contacto Interactivo con React */}
        <ContactForm />
      </main>

      {/* 3. Pie de página de Felimiau */}
      <Footer />

      {/* 4. Notificación visual flotante (Toast de Bootstrap) al añadir productos */}
      <ToastNotification
        product={toastProduct}
        onClose={() => setToastProduct(null)}
      />

      {/* 5. Botón flotante para volver arriba suavemente */}
      <ScrollToTop />
    </div>
  );
}

export default App;
