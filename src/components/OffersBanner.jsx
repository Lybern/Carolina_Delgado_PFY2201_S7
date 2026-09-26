import { useState } from 'react';

export const OffersBanner = () => {
  const [mostrarOfertas, setMostrarOfertas] = useState(false);

  return (
    <section className="py-4 my-2">
      <div className="container">
        <div className="card bg-white border-0 shadow-sm rounded-4 p-4 p-md-4 border-start border-warning border-5">
          <div className="row align-items-center justify-content-between g-3">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold text-success mb-2">🐾 Catálogo Felimiau</h2>
              <p className="lead mb-0 text-dark">
                Explora nuestra selección especial de artículos recomendados para el bienestar felino.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button
                type="button"
                className="btn btn-warning text-dark fw-bold px-4 py-2 shadow-sm"
                onClick={() => setMostrarOfertas(!mostrarOfertas)}
              >
                {mostrarOfertas ? '✖ Ocultar Ofertas' : '🔥 Ver Ofertas Especiales'}
              </button>
            </div>
          </div>

          {/* Renderizado condicional de la sección de ofertas especiales */}
          {mostrarOfertas && (
            <div
              id="seccion-ofertas"
              className="mt-4 p-3 p-md-4 rounded-3 shadow-sm border border-warning"
            >
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div>
                  <h3 className="h5 fw-bold text-dark mb-1">🎉 ¡Descuentos de la Semana para Michis!</h3>
                  <p className="mb-0 text-muted">
                    Aprovecha hasta un <strong>30% de descuento</strong> en rascadores y snacks seleccionados.
                  </p>
                </div>
                <span className="badge bg-danger fs-6 p-2">Válido hasta agotar stock</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;
