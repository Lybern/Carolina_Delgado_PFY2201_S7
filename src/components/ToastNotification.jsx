import { useEffect } from 'react';

/**
 * Componente de notificación contextual flotante (Bootstrap Toast) con temporizador automático.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object|null} props.product - Producto recientemente añadido al carrito.
 * @param {Function} props.onClose - Función callback para cerrar o descartar la notificación.
 * @returns {JSX.Element|null} Notificación flotante activa o null si no hay producto.
 */
export const ToastNotification = ({ product, onClose }) => {
  // Temporizador para cerrar automáticamente la notificación después de 3.2 segundos
  useEffect(() => {
    if (!product) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3200);

    return () => clearTimeout(timer);
  }, [product, onClose]);

  // Si no hay producto en la notificación, no se renderiza nada en el DOM
  if (!product) return null;

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3 toast-container-custom"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className="toast show bg-dark text-white border border-warning border-2 shadow-lg rounded-3 overflow-hidden"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        {/* Cabecera del Toast */}
        <div className="toast-header bg-dark text-white border-bottom border-secondary d-flex align-items-center py-2 px-3">
          <span className="badge bg-warning text-dark fw-bold me-2">🐾 ¡Agregado!</span>
          <strong className="me-auto text-white small">Carrito Felimiau</strong>
          <small className="text-white-50 ms-2">Recién</small>
          <button
            type="button"
            className="btn-close btn-close-white ms-2"
            aria-label="Cerrar notificación"
            onClick={onClose}
          ></button>
        </div>

        {/* Cuerpo del Toast con miniatura e información */}
        <div className="toast-body p-3 d-flex align-items-center gap-3">
          <img
            src={product.img}
            alt={product.nameProduct}
            className="rounded border border-secondary toast-thumb-img"
          />
          <div className="flex-grow-1">
            <p className="mb-0 fw-semibold text-warning small">{product.nameProduct}</p>
            <span className="small text-white-50">
              ${product.price.toLocaleString('es-CL')} añadido a tu pedido
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastNotification;
