# 🐱 Felimiau — eCommerce Interactivo en React

Proyecto desarrollado para la asignatura **Desarrollo Frontend I (PFY2201)** — **Experiencia 3 / Semana 7**.

---

## 👩‍💻 Información del Proyecto
* **Estudiante:** Carolina Delgado
* **Asignatura:** Desarrollo Frontend I (PFY2201)
* **Institución:** Duoc UC
* **Tecnologías:** React 19, Vite, Bootstrap 5.3, JavaScript (ES6+), CSS Modular
* **Repositorio GitHub:** [https://github.com/Lybern/Carolina_Delgado_PFY2201_S7](https://github.com/Lybern/Carolina_Delgado_PFY2201_S7)
* **Despliegue en línea (GitHub Pages):** [https://lybern.github.io/Carolina_Delgado_PFY2201_S7/](https://lybern.github.io/Carolina_Delgado_PFY2201_S7/)

---

## 📋 Descripción de la Actividad
En esta etapa se migró y enriqueció la tienda web **Felimiau** hacia el ecosistema **React con Vite**, estructurando componentes funcionales modulares, gestionando estados interactivos con Hooks (`useState`) y añadiendo la experiencia completa de un **Carrito de Compras dinámico**, conservando la interfaz visual y la identidad de marca desarrollada en las entregas anteriores.

---

## 🚀 Funcionalidades Implementadas

### 1. Catálogo de Productos Completo
Cada producto se presenta con la información requerida por la pauta:
* **Nombre del producto:** Identificación clara del artículo felino.
* **Precio normal:** Precio de lista tachado para evidenciar el descuento.
* **Precio de oferta:** Precio destacado con el valor final de venta.
* **Descripción resumida:** Detalles de materiales, beneficios y usos.
* **Imagen del producto:** Fotos de alta calidad de los michis (Blanquito, Talia y productos de cuidado).
* **Botón interactivo:** Acción directa para *"Añadir al carrito"*.

### 2. Gestión Integral del Carrito de Compras
* **Agregar productos:** Añade artículos al carrito. Si el producto ya existe, incrementa su cantidad (`quantity`) sin generar filas duplicadas.
* **Eliminar productos:** Botón con icono de cruz (`✕`) en cada fila para remover productos específicos recalculando el total y el contador.
* **Contador dinámico:** Burbuja roja sobre el icono del carrito en el navbar que refleja en tiempo real la cantidad total de artículos.
* **Cálculo del total acumulado:** Suma matemática en pesos chilenos ($ CLP) de todos los productos y cantidades seleccionadas.
* **Vaciar carrito:** Botón de acción global para restablecer el carrito a cero.
* **Renderizado condicional:** Muestra el mensaje *"El carrito está vacío"* cuando no hay artículos agregados.

### 3. Interfaz Integral de Felimiau
* **Navbar Sticky:** Barra de navegación superior con logotipo, enlaces de sección, buscador y carrito desplegable.
* **Carrusel Accesible (WCAG):** Diapositivas con fotos reales de los gatitos, con botón de Pausar / Reanudar.
* **Banner de Ofertas Especiales:** Sección interactiva con botón para mostrar u ocultar promociones de la semana.
* **Servicios & Beneficios:** Columnas informativas de despacho, calidad aprobada y pago seguro.
* **Formulario de Contacto:** Formulario con validación de campos y mensaje de confirmación controlado con React.
* **Footer Semántico:** Información de derechos reservados y autoría del proyecto.

---

## 📂 Estructura Modular de Componentes
```text
src/
├── components/
│   ├── Carousel.jsx       # Carrusel accesible de imágenes
│   ├── ContactForm.jsx    # Formulario de contacto con estados en React
│   ├── Footer.jsx         # Pie de página semántico
│   ├── Header.jsx         # Navbar principal con menú y carrito desplegable
│   ├── OffersBanner.jsx   # Banner interactivo de promociones
│   ├── ProductList.jsx    # Catálogo de tarjetas de productos
│   └── Services.jsx       # Sección de beneficios y servicios
├── data.js                # Dataset de productos con precios, ofertas e imágenes
├── App.jsx                # Componente principal con los estados globales
├── App.css                # Estilos visuales personalizados de Felimiau
├── index.css              # Reset base y variables de color
└── main.jsx               # Punto de entrada de la aplicación React
```

---

## 🛠️ Ejecución Local del Proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Lybern/Carolina_Delgado_PFY2201_S7.git
   cd Carolina_Delgado_PFY2201_S7
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador:
   `http://localhost:3000`

---

## 📦 Despliegue en GitHub Pages

Para compilar y publicar en la rama `gh-pages`:
```bash
npm run build
```
La carpeta generada `dist` contiene los archivos listos para producción.
