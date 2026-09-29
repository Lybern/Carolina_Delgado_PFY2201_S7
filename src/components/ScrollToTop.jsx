import { useState, useEffect } from 'react';

/**
 * Componente flotante que detecta el desplazamiento vertical de la ventana y
 * muestra un botón interactivo con animación suave para retornar al encabezado.
 * @component
 * @returns {JSX.Element|null} Botón flotante o null si la posición es superior a 300px.
 */
export const ScrollToTop = () => {
  // Estado para controlar la visibilidad del botón según el desplazamiento vertical
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Función que detecta cuánto ha scrolleado el usuario en la página
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      // Si ha bajado más de 300px desde la parte superior, mostramos el botón
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Escuchador de evento nativo de scroll
    window.addEventListener('scroll', toggleVisible);

    // Limpieza del escuchador cuando el componente se desmonta
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  // Función para desplazar suavemente la pantalla hasta el tope superior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Si no ha bajado suficiente, no se dibuja en pantalla
  if (!visible) return null;

  return (
    <button
      type="button"
      className="btn-scroll-top shadow-lg"
      onClick={scrollToTop}
      title="Volver al inicio de la página"
      aria-label="Volver arriba"
    >
      <span>🐾</span>
      <span className="arrow-up">↑</span>
    </button>
  );
};

export default ScrollToTop;
