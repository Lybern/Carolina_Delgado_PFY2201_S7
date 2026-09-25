// ==========================================================================
// CATÁLOGO DE PRODUCTOS FELIMIAU - SEMANA 7 (REACT)
// Basado en el proyecto de eCommerce Felimiau (Semana 5)
// Cumple con los requerimientos de la pauta de evaluación:
// - Nombre del producto
// - Precio normal
// - Precio oferta
// - Descripción corta o resumida
// - Imagen del producto (locales en /img/ y remotas en alta resolución)
// ==========================================================================

export const productos = [
  {
    id: 1,
    nombre: "Rascador Castillo 3 Niveles",
    categoria: "Rascadores & Torres",
    badge: "Más Vendido",
    badgeColor: "success",
    descripcion: "Madera natural con cápsula transparente, cueva felina acogedora y pompón colgante para juego.",
    precioNormal: 44990,
    precioOferta: 39990,
    imagen: "/img/rascador.png",
    stock: 8
  },
  {
    id: 2,
    nombre: "Alimento Salmón & Arroz (3kg)",
    categoria: "Nutrición Premium",
    badge: "Recomendado",
    badgeColor: "warning",
    descripcion: "Rico en Omega 3 y 6 para un pelaje brillante y salud digestiva óptima en felinos adultos.",
    precioNormal: 26990,
    precioOferta: 22990,
    imagen: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&h=350&q=80",
    stock: 25
  },
  {
    id: 3,
    nombre: "Pack Snacks Churu (x20 tubos)",
    categoria: "Snacks & Premios",
    badge: "Favorito Michis",
    badgeColor: "danger",
    descripcion: "Puré cremoso irresistible de atún y pollo. Alta hidratación, sin preservantes ni colorantes químicos.",
    precioNormal: 18990,
    precioOferta: 14990,
    imagen: "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=600&h=350&q=80",
    stock: 40
  },
  {
    id: 4,
    nombre: "Cama Cueva Antiestrés Térmica",
    categoria: "Camas & Confort",
    badge: "Confort Térmico",
    badgeColor: "info",
    descripcion: "Diseño acolchado circular con interior afelpado que retiene el calor corporal y brinda máxima seguridad.",
    precioNormal: 23990,
    precioOferta: 18990,
    imagen: "/img/talia.jpg",
    stock: 15
  },
  {
    id: 5,
    nombre: "Fuente de Agua Cascada 2.5L",
    categoria: "Accesorios & Salud",
    badge: "Salud Renal",
    badgeColor: "primary",
    descripcion: "Flujo continuo de agua fresca oxigenada con triple filtro de carbón activado y bomba ultrasilenciosa.",
    precioNormal: 24990,
    precioOferta: 19990,
    imagen: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&h=350&q=80",
    stock: 12
  },
  {
    id: 6,
    nombre: "Arena Aglomerante Lavanda (10kg)",
    categoria: "Higiene & Aseo",
    badge: "Higiene Total",
    badgeColor: "secondary",
    descripcion: "Bentonita 100% natural de rápida aglomeración con suave aroma a lavanda que neutraliza olores al instante.",
    precioNormal: 14990,
    precioOferta: 11990,
    imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&h=350&q=80",
    stock: 30
  }
];

export default productos;
