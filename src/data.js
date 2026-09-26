// ==========================================================================
// CATÁLOGO DE PRODUCTOS FELIMIAU (DATASET)
// Estructura de datos para la tienda de comercio electrónico.
// Cada objeto contiene identificador único, nombres, precios, imágenes,
// descripciones y propiedad quantity para la gestión del carrito de compras.
// ==========================================================================

export const data = [
  {
    id: 1,
    nameProduct: "Rascador Castillo 3 Niveles",
    nombre: "Rascador Castillo 3 Niveles",
    categoria: "Rascadores & Torres",
    badge: "Más Vendido",
    descripcion: "Madera natural con cápsula transparente, cueva felina acogedora y pompón colgante para juego.",
    precioNormal: 44990,
    precioOferta: 39990,
    price: 39990,
    quantity: 1,
    img: "./img/rascador.png",
    imagen: "./img/rascador.png",
    especificaciones: {
      medidas: "120 cm alto x 55 cm ancho x 45 cm profundidad",
      material: "Madera natural de pino y sisal trenzado de 6mm de alto tráfico",
      recomendacion: "Ideal para gatos activos que requieren desgastar uñas, trepar y tener un refugio en altura."
    }
  },
  {
    id: 2,
    nameProduct: "Alimento Salmón & Arroz (3kg)",
    nombre: "Alimento Salmón & Arroz (3kg)",
    categoria: "Nutrición Premium",
    badge: "Recomendado",
    descripcion: "Rico en Omega 3 y 6 para un pelaje brillante y salud digestiva óptima en felinos adultos.",
    precioNormal: 26990,
    precioOferta: 22990,
    price: 22990,
    quantity: 1,
    img: "./img/alimento.jpg",
    imagen: "./img/alimento.jpg",
    especificaciones: {
      medidas: "Bolsa sellada al vacío de 3 kg",
      material: "Salmón fresco (32%), arroz integral, taurina y complejo vitamínico A, D3, E",
      recomendacion: "Fórmula de alta digestibilidad diseñada para proteger el tracto digestivo y evitar alergias."
    }
  },
  {
    id: 3,
    nameProduct: "Pack Snacks Churu (x20 tubos)",
    nombre: "Pack Snacks Churu (x20 tubos)",
    categoria: "Snacks & Premios",
    badge: "Favorito Michis",
    descripcion: "Puré cremoso irresistible de atún y pollo. Alta hidratación, sin preservantes ni colorantes químicos.",
    precioNormal: 18990,
    precioOferta: 14990,
    price: 14990,
    quantity: 1,
    img: "./img/churu.jpg",
    imagen: "./img/churu.jpg",
    especificaciones: {
      medidas: "Caja con 20 tubos individuales de 14g cada uno (280g netos)",
      material: "Atún de aguas profundas, extracto de pollo campero y extracto de té verde",
      recomendacion: "Aporte extra de hidratación (91% humedad) para prevenir problemas urinarios y premiar buenos hábitos."
    }
  },
  {
    id: 4,
    nameProduct: "Cama Cueva Antiestrés Térmica",
    nombre: "Cama Cueva Antiestrés Térmica",
    categoria: "Camas & Confort",
    badge: "Confort Térmico",
    descripcion: "Diseño acolchado circular con interior afelpado que retiene el calor corporal y brinda máxima seguridad.",
    precioNormal: 23990,
    precioOferta: 18990,
    price: 18990,
    quantity: 1,
    img: "./img/talia.jpg",
    imagen: "./img/talia.jpg",
    especificaciones: {
      medidas: "50 cm de diámetro x 40 cm de altura (para gatos de hasta 8 kg)",
      material: "Felpa ultra suave hipoalergénica con fondo antideslizante e impermeable",
      recomendacion: "Aprobada por Talia para siestas reconfortantes en invierno, aliviando tensiones y dolores articulares."
    }
  },
  {
    id: 5,
    nameProduct: "Fuente de Agua Cascada 2.5L",
    nombre: "Fuente de Agua Cascada 2.5L",
    categoria: "Accesorios & Salud",
    badge: "Salud Renal",
    descripcion: "Flujo continuo de agua fresca oxigenada con triple filtro de carbón activado y bomba ultrasilenciosa.",
    precioNormal: 24990,
    precioOferta: 19990,
    price: 19990,
    quantity: 1,
    img: "./img/fuente.jpg",
    imagen: "./img/fuente.jpg",
    especificaciones: {
      medidas: "Capacidad de 2.5 Litros / Bomba USB silenciosa menor a 20 dB",
      material: "Resina antibacteriana libre de BPA y cerámica sanitaria de grado alimenticio",
      recomendacion: "Incentiva el consumo de agua corriente en felinos reticentes, reduciendo el riesgo de fallo renal."
    }
  },
  {
    id: 6,
    nameProduct: "Arena Aglomerante Lavanda (10kg)",
    nombre: "Arena Aglomerante Lavanda (10kg)",
    categoria: "Higiene & Aseo",
    badge: "Higiene Total",
    descripcion: "Bentonita 100% natural de rápida aglomeración con suave aroma a lavanda que neutraliza olores al instante.",
    precioNormal: 14990,
    precioOferta: 11990,
    price: 11990,
    quantity: 1,
    img: "./img/arena.jpg",
    imagen: "./img/arena.jpg",
    especificaciones: {
      medidas: "Saco resistente de 10 kg con asa ergonómica reforzada",
      material: "Bentonita sódica natural de grano fino (99.9% libre de polvo) con lavanda",
      recomendacion: "Aglomera en solo 3 segundos formando terrones sólidos fáciles de retirar sin desarmarse."
    }
  }
];

export const productos = data;
export default data;