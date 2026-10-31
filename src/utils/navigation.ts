import { ScrollSmoother } from "gsap/ScrollSmoother";

// Debe coincidir con --header-height en index.css
const HEADER_HEIGHT = 64;

// Secciones navegables (el id debe coincidir con el <section> en BodyHome)
export const NAV_SECTIONS = [
  { id: "services", labelKey: "nav.services" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "about", labelKey: "nav.about" },
  { id: "contact", labelKey: "nav.contact" },
] as const;

// Usa ScrollSmoother si está activo; si no (ej. aún no se crea) hace scroll nativo
export const scrollToSection = (id: string) => {
  const smoother = ScrollSmoother.get();
  if (smoother) {
    // home va al tope; el resto deja espacio para el header fijo
    smoother.scrollTo(
      `#${id}`,
      true,
      id === "home" ? "top top" : `top ${HEADER_HEIGHT}px`
    );
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
