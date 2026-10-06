# 🐱 Felimiau — eCommerce Interactivo en React

Proyecto desarrollado para la asignatura **Desarrollo Frontend I (PFY2201)** — **Experiencia 3 / Semana 8**.

---

## 👩‍💻 Información del Proyecto
* **Estudiante:** Carolina Delgado
* **Asignatura:** Desarrollo Frontend I (PFY2201)
* **Institución:** Duoc UC
* **Tecnologías:** React 19, Vite, Node.js / Express, Bootstrap 5.3, JavaScript (ES6+), CSS Modular
* **Repositorio GitHub:** [https://github.com/Lybern/Carolina_Delgado_PFY2201_S7](https://github.com/Lybern/Carolina_Delgado_PFY2201_S7)
* **Pull Request Semana 8 (Merged):** [https://github.com/Lybern/Carolina_Delgado_PFY2201_S7/pull/1](https://github.com/Lybern/Carolina_Delgado_PFY2201_S7/pull/1)
* **Despliegue en línea (GitHub Pages):** [https://lybern.github.io/Carolina_Delgado_PFY2201_S7/](https://lybern.github.io/Carolina_Delgado_PFY2201_S7/)

---

## 📋 Descripción de la Actividad (Semana 8)
En esta octava semana (*"Mejorando funcionalidades clave en el eCommerce con React"*), se optimizó la aplicación **Felimiau** incorporando:
1. **Carga dinámica y consumo de API con `useEffect`**: Conexión asíncrona a un backend local en Express y fallback inteligente para despliegues estáticos.
2. **Gestión integral de estados con `useState`**: Control del catálogo, persistencia del carrito, botones interactivos y alternancia de vistas.
3. **Renderizado Condicional Avanzado**: Spinner de carga de Bootstrap, manejo de errores con botón de reintento, vistas alternadas y estados de botones dinámicos.
4. **Arquitectura y buenas prácticas**: Modal único centralizado en `App.jsx` (evitando multiplicidad de modales en el DOM) y desacoplamiento de la lógica de red en `productService.js`.
5. **Flujo de trabajo profesional en Git**: Desarrollo en rama `Carolina_Delgado_PFY2201_S8`, Pull Request documentado y fusionado a `main`, y despliegue actualizado en `gh-pages`.

---

## 🚀 Funcionalidades Clave de la Semana 8

### 1. Manejo de Efectos y Carga Asíncrona (`useEffect`)
* **Consumo de API REST / Backend:** La aplicación consulta dinámicamente los datos mediante el servicio desacoplado `productService.js`.
* **Soporte Híbrido (Backend + GitHub Pages):**
  * Si el servidor backend Node/Express está activo en `http://localhost:3000/api/productos`, los productos se obtienen directamente de él.
  * Si la aplicación está desplegada en internet en **GitHub Pages** (o el servidor local está apagado), conmuta automáticamente al archivo estático `public/data/productos.json`.
* **Spinner de Carga Animado:** Mientras `cargando === true`, se presenta un Spinner centrado de Bootstrap informando al usuario.
* **Control de Errores y Reintento:** Si la conexión falla, se captura en el estado `error` y se renderiza una alerta amigable con el botón interactivo **"🔄 Reintentar carga de productos"**.

### 2. Gestión de Estados con `useState`
* **Catálogo de Productos (`productos`):** Estado inicializado en array vacío que se puebla dinámicamente al finalizar la carga.
* **Persistencia en LocalStorage:** El carrito (`allProducts`), el acumulado (`total`) y las unidades (`countProducts`) se conservan entre recargas de página.
* **Elemento Interactivo en Tarjetas:**
  * Si el producto ya está en el carrito, el botón de compra conmuta de amarillo (*"🛒 Añadir al carrito"*) a verde (*"✓ En el carrito (X en canasta)"*), permitiendo añadir unidades adicionales.
* **Selector Interactivo de Visualización (`vista`):**
  * Botones para alternar reactivamente entre la vista tradicional de **Cuadrícula (⊞)** y una vista compacta de **Lista horizontal (☰)**.

### 3. Modal Centralizado en `App.jsx`
* Siguiendo la recomendación disciplinar de la clase, se implementó **un único modal a nivel de `App.jsx`** controlado por el estado `productoSeleccionado`.
* Las tarjetas hijas notifican al padre mediante la función `onVerProducto(producto)`, evitando renderizar 30 modales redundantes en el DOM.

### 4. Renderizado Condicional
* **Estado de Carga:** `{cargando && <Spinner />}`
* **Estado de Error:** `{error && <AlertaConBotonReintento />}`
* **Contenido Principal:** `{!cargando && !error && <ProductList />}`
* **Búsqueda / Filtro sin coincidencias:** Renderiza un mensaje especial con ícono felino si no hay productos para el término buscado.
* **Carrito Vacío:** Si `allProducts.length === 0`, el menú desplegable muestra el mensaje *"El carrito está vacío"*.
* **Badge Contador:** La burbuja con el total de unidades solo se renderiza si `countProducts > 0`.

---

## 📂 Estructura del Proyecto
```text
├── backend/                        # Mini-servidor Node.js / Express provisto para la Semana 8
│   ├── data/
│   │   └── productos.json          # Dataset oficial en formato JSON de Felimiau
│   ├── app.js                     # Servidor Express con CORS habilitado en el puerto 3000
│   └── package.json               # Dependencias del backend (express, cors)
├── docs/
│   └── screenshots_s8/            # Evidencias gráficas de alta resolución para la evaluación
│       ├── evidencia_s8_01_carga_dinamica_spinner.png
│       ├── evidencia_s8_02_catalogo_cargado_api.png
│       ├── evidencia_s8_03_selector_vistas_lista_grid.png
│       ├── evidencia_s8_04_boton_interactivo_en_carrito.png
│       ├── evidencia_s8_05_carrito_con_productos_badge.png
│       ├── evidencia_s8_06_carrito_vacio_render_condicional.png
│       ├── evidencia_s8_07_modal_centralizado_detalle.png
│       ├── evidencia_s8_08_error_reintento_render_condicional.png
│       ├── evidencia_s8_09_backend_express_api.png
│       └── evidencia_s8_10_pull_request_merged_github.png
├── public/
│   ├── data/
│   │   └── productos.json          # Respaldo estático para producción y GitHub Pages
│   └── img/                       # Imágenes de los productos y mascotas
├── src/
│   ├── components/
│   │   ├── Carousel.jsx           # Carrusel accesible con controles React
│   │   ├── ContactForm.jsx        # Formulario de contacto interactivo
│   │   ├── Footer.jsx             # Pie de página institucional
│   │   ├── Header.jsx             # Barra de navegación superior, buscador y carrito
│   │   ├── OffersBanner.jsx       # Banner de ofertas dinámicas
│   │   ├── ProductDetailModal.jsx # Modal accesible de especificaciones técnicas
│   │   ├── ProductList.jsx        # Catálogo modular con filtros y alternancia de vistas
│   │   ├── ScrollToTop.jsx        # Botón flotante para subir
│   │   ├── Services.jsx           # Bloque de garantías y servicios
│   │   └── ToastNotification.jsx  # Notificación flotante de producto añadido
│   ├── services/
│   │   └── productService.js      # Módulo desacoplado para consulta de backend / API
│   ├── App.jsx                    # Componente raíz con hooks y orquestación
│   ├── App.css                    # Estilos CSS externos y modulares
│   ├── index.css                  # Tipografías y variables globales
│   └── main.jsx                   # Punto de inicio React + Bootstrap
├── package.json
└── vite.config.js
```

---

## 🛠️ Ejecución Local del Proyecto

### 1. Iniciar la Aplicación Frontend (React + Vite)
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor Vite (puerto 5173)
npm run dev
```
Abrir en el navegador: 👉 `http://localhost:5173/`

### 2. Iniciar el Servidor Backend (Node.js + Express) - Opcional
En una segunda terminal:
```bash
# Entrar a la carpeta del backend
cd backend

# Instalar dependencias del backend
npm install

# Iniciar servidor Express (puerto 3000)
node app.js
```
Endpoint de la API: 👉 `http://localhost:3000/api/productos`

---

## 📦 Compilación y Despliegue en GitHub Pages

Para compilar la versión optimizada y publicarla en la rama `gh-pages`:
```bash
npm run deploy
```
La aplicación se compilará con Vite hacia `dist/` y se actualizará automáticamente en GitHub Pages.

---

## 📸 Resumen de Evidencias de Evaluación (Semana 8)
Todas las capturas se encuentran almacenadas en el directorio [`docs/screenshots_s8/`](docs/screenshots_s8/):
* **Evidencia 1:** Spinner animado de carga con `useEffect`.
* **Evidencia 2:** Catálogo cargado dinámicamente desde la API.
* **Evidencia 3:** Alternancia interactiva entre vistas Cuadrícula y Lista (`useState`).
* **Evidencia 4:** Elemento interactivo en botón (`✓ En el carrito`).
* **Evidencia 5:** Carrito con productos agregados y Badge contador.
* **Evidencia 6:** Renderizado condicional del mensaje de carrito vacío.
* **Evidencia 7:** Modal centralizado abierto desde `App.jsx`.
* **Evidencia 8:** Renderizado condicional de error con botón de reintento.
* **Evidencia 9:** Backend Express en ejecución entregando datos en formato JSON.
* **Evidencia 10:** Pull Request #1 con estado **"Merged"** en GitHub.
