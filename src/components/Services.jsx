export const Services = () => {
  return (
    <section id="servicios" className="bg-white py-5 border-top border-bottom" aria-label="Beneficios de Felimiau">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-12 col-md-4">
            <article className="p-4 bg-light rounded-3 shadow-sm h-100 border-top border-warning border-4">
              <div className="display-6 mb-2">🚀</div>
              <h3 className="h4 fw-bold text-dark">Envío Michi-Express</h3>
              <p className="text-muted mb-0">
                Despacho garantizado en 24 a 48 horas en todo el país con seguimiento en línea.
              </p>
            </article>
          </div>
          <div className="col-12 col-md-4">
            <article className="p-4 bg-light rounded-3 shadow-sm h-100 border-top border-warning border-4">
              <div className="display-6 mb-2">🩺</div>
              <h3 className="h4 fw-bold text-dark">Calidad Aprobada</h3>
              <p className="text-muted mb-0">
                Todos nuestros alimentos y juguetes están testeados y recomendados por veterinarios.
              </p>
            </article>
          </div>
          <div className="col-12 col-md-4">
            <article className="p-4 bg-light rounded-3 shadow-sm h-100 border-top border-warning border-4">
              <div className="display-6 mb-2">💳</div>
              <h3 className="h4 fw-bold text-dark">Compra 100% Segura</h3>
              <p className="text-muted mb-0">
                Paga con Webpay, tarjetas de débito o crédito con total respaldo y seguridad.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
