import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const [estadoMensaje, setEstadoMensaje] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.asunto || !formData.mensaje) {
      setEstadoMensaje({
        tipo: 'danger',
        texto: '⚠️ Por favor completa todos los campos requeridos.',
      });
      return;
    }

    setEstadoMensaje({
      tipo: 'success',
      texto: `✅ ¡Gracias ${formData.nombre}! Tu consulta sobre "${formData.asunto}" fue enviada con éxito. Te responderemos a ${formData.correo} a la brevedad.`,
    });

    setFormData({
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: '',
    });
  };

  return (
    <section id="contacto" className="py-5 bg-light" aria-label="Formulario de contacto">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="form-contacto-card p-4 p-md-5">
              <div className="text-center mb-4">
                <span className="badge bg-warning text-dark px-3 py-2 mb-2 fw-bold">Escríbenos</span>
                <h2 className="fw-bold">¿Tienes dudas o necesitas asesoría felina?</h2>
                <p className="text-muted">Déjanos tu mensaje y te responderemos en menos de 24 horas.</p>
              </div>

              {/* Mensaje de estado dinámico controlado por React */}
              {estadoMensaje && (
                <div
                  className={`alert alert-${estadoMensaje.tipo} shadow-sm mb-4`}
                  role="alert"
                >
                  {estadoMensaje.texto}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="nombre_cliente" className="form-label fw-semibold">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre_cliente"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej: Carolina Delgado"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="correo_cliente" className="form-label fw-semibold">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="correo_cliente"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="nombre@correo.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="asunto_cliente" className="form-label fw-semibold">
                      Motivo de contacto *
                    </label>
                    <select
                      className="form-select"
                      id="asunto_cliente"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Consulta sobre un producto">Consulta sobre un producto</option>
                      <option value="Estado de mi pedido">Estado de mi pedido</option>
                      <option value="Asesoría felina">Asesoría sobre nutrición / rascadores</option>
                      <option value="Otro motivo">Otro motivo</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="mensaje_cliente" className="form-label fw-semibold">
                      Mensaje o Consulta *
                    </label>
                    <textarea
                      className="form-control"
                      id="mensaje_cliente"
                      name="mensaje"
                      rows="4"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-end mt-4">
                    <button
                      type="submit"
                      className="btn btn-warning text-dark fw-bold px-4 py-2"
                    >
                      ✉️ Enviar Mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
