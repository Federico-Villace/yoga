// Todo el contenido editable del sitio vive acá.
// Cambiá textos, clases, horarios y links sin tocar los componentes.

export const site = {
  name: "Agustina Guerrero",
  tagline: "hatha yoga",
  location: "San Telmo, Buenos Aires",
  description:
    "Clases de Hatha Yoga con Agustina Guerrero. Respiración, presencia y movimiento consciente.",
};

export const nav = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Clases", href: "#clases" },
  { label: "Horarios", href: "#horarios" },
];

export const classes = [
  {
    num: "一",
    title: "Hatha grupal",
    text: "Clases en grupos reducidos para practicar posturas, respiración y relajación final en comunidad.",
    meta: "60 min · todos los niveles",
  },
  {
    num: "二",
    title: "Clases privadas",
    text: "Sesiones uno a uno, pensadas a medida de tu cuerpo, tus tiempos y lo que estés necesitando.",
    meta: "60 min · presencial u online",
  },
  {
    num: "三",
    title: "Pranayama & meditación",
    text: "Un encuentro dedicado a la respiración consciente y a cultivar la quietud de la mente.",
    meta: "45 min · sin experiencia previa",
  },
];

export const venues = {
  stretchClub: {
    name: "@stretchclub.ar",
    href: "https://www.instagram.com/stretchclub.ar/",
  },
};

export const schedule = [
  { day: "Miércoles", start: "19:30", end: "20:30", name: "Hatha grupal", venue: venues.stretchClub },
  { day: "Viernes", start: "18:45", end: "19:45", name: "Hatha grupal", venue: venues.stretchClub },
];

export const facts = [
  { label: "Formación", value: "Profesorado de Hatha Yoga" },
  { label: "Enfoque", value: "Respiración y alineación" },
  { label: "Para", value: "Todos los niveles" },
];

const whatsappMessage = "Hola Agus! Quiero reservar una clase de yoga 🧘";

export const contact = [
  {
    label: "WhatsApp",
    href: `https://wa.me/5492915249141?text=${encodeURIComponent(whatsappMessage)}`,
    primary: true,
  },
  { label: "Instagram", href: "https://www.instagram.com/msagusguerrero/" },
];
