import { useState } from 'react';

export const Carousel = () => {
  const [pausado, setPausado] = useState(false);

  return (
    <section id="inicio" aria-label="Promociones y Novedades Felimiau" className="position-relative">
      <div
        id="carruselFelimiau"
        className="carousel slide"
        data-bs-ride={pausado ? 'false' : 'carousel'}
        data-bs-interval="3000"
      >
        {/* Botón de control de rotación para accesibilidad */}
        <button
          type="button"
          className="btn-carrusel-control"
          onClick={() => setPausado(!pausado)}
          aria-label={pausado ? 'Reanudar carrusel' : 'Pausar carrusel'}
        >
          {pausado ? '▶️ Reanudar' : '⏸️ Pausar'}
        </button>

        {/* Indicadores */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carruselFelimiau"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Diapositiva 1: Blanquito"
          ></button>
          <button
            type="button"
            data-bs-target="#carruselFelimiau"
            data-bs-slide-to="1"
            aria-label="Diapositiva 2: Talia"
          ></button>
          <button
            type="button"
            data-bs-target="#carruselFelimiau"
            data-bs-slide-to="2"
            aria-label="Diapositiva 3: Nutrición y Juguetes"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="./img/blanquito.jpg"
              className="d-block"
              alt="Blanquito descansando en su rascador"
              width="1200"
              height="460"
            />
            <div className="carousel-caption d-block">
              <h2 className="fw-bold">¡Bienvenido a Felimiau! 🐾</h2>
              <p className="lead">El rincón pensado exclusivamente para la felicidad y comodidad de tu gato.</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="./img/talia.jpg"
              className="d-block"
              alt="Gatita Talia en su cama térmica"
              width="1200"
              height="460"
            />
            <div className="carousel-caption d-block">
              <h2 className="fw-bold">Camas & Confort Térmico 💤</h2>
              <p className="lead">Espacios suaves, térmicos y acogedores diseñados para un sueño profundo.</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=1200&h=460&q=80"
              className="d-block"
              alt="Rascadores y torres felinas"
              width="1200"
              height="460"
            />
            <div className="carousel-caption d-block">
              <h2 className="fw-bold">Rascadores, Torres & Nutrición 🐟</h2>
              <p className="lead">Los mejores alimentos y accesorios interactivos al mejor precio.</p>
            </div>
          </div>
        </div>

        {/* Controles de navegación */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carruselFelimiau"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carruselFelimiau"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
