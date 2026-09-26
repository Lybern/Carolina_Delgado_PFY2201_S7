export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="h5 fw-bold text-warning mb-1">🐱 Felimiau - Tienda Especializada para Felinos</p>
            <small className="text-white-50">Amor, confort y nutrición de calidad para tus michis.</small>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <p className="mb-0 text-white">&copy; 2026 Felimiau. Todos los derechos reservados.</p>
            <small className="text-warning">
              Desarrollado por <strong>Carolina Delgado</strong> — PFY2201
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
