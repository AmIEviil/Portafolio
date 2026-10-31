import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useTranslation } from "react-i18next";

import "./BodyHome.css";
import CustomButton from "../Button/CustomButton";
import ArrowIcon from "../../icons/ArrowIcon";
import CardInfo from "../CardInfo/CardInfo";
import ContactMe from "../ContactMe/ContactMe";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Works from "../Works/Works";
import MySelf from "../MySelf/MySelf";
import { scrollToSection } from "../../utils/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

// Orden de las secciones que hacen la transición de entrada/salida al hacer scroll
const SCROLL_SEQUENCE = [
  "home",
  "services",
  "experience",
  "projects",
  "about",
  "contact",
];

// Ruta del CV dentro de /public (el PDF se deja en public/cv/)
const CV_PATH = "/cv/Gonzalo_Caro_CV.pdf";

const BodyHome = () => {
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Siempre activo: Windows con "Efectos de animación" apagados reporta
      // prefers-reduced-motion: reduce y condicionarlo dejaba la web sin smooth scroll
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });

      SCROLL_SEQUENCE.forEach((id, i) => {
        if (i === 0) return;
        const prevId = SCROLL_SEQUENCE[i - 1];
        const scrollTrigger = {
          trigger: `#${id}`,
          start: "top 80%",
          end: "top 20%",
          scrub: 1.5,
        };

        // efecto de "salida" para la sección anterior (anclado abajo, que es lo visible)
        gsap.to(`#${prevId}`, {
          opacity: 0.1,
          scale: 0.9,
          transformOrigin: "50% 100%",
          scrollTrigger,
        });

        // efecto de "entrada" (services se superpone sobre home, no necesita entrada)
        if (i > 1) {
          gsap.fromTo(
            `#${id}`,
            { opacity: 0, scale: 0.9, transformOrigin: "50% 0%" },
            { opacity: 1, scale: 1, scrollTrigger: { ...scrollTrigger } },
          );
        }
      });
    },
    { scope: wrapperRef },
  );

  return (
    <div id="smooth-wrapper" className="sections-container" ref={wrapperRef}>
      <div id="smooth-content">
        <section id="home" className="section layer">
          <div className="home_container">
            <div className="name_container">
              <h1 className="my_name">GONZALO CARO</h1>
            </div>
            <ArrowIcon size={32} rotate={140} strokeWidth={1} />
            <div className="mt-4 text-start text-lg md:text-2xl max-w-3xl flex flex-col gap-2">
              <p>{t("hero.first_text")}</p>
              <p>{t("hero.second_text")}</p>
              <p className="hero_stack">{t("hero.stack")}</p>
            </div>
          </div>
          <div className="btn_contact-me-container">
            <CustomButton
              label={t("nav.contact")}
              onClick={() => scrollToSection("contact")}
              className="btn"
              iconPosition="right"
              icon={<ArrowIcon rotate={45} className="ml-1" strokeWidth={3} />}
            />
            <CustomButton
              label={t("hero.download_cv")}
              href={CV_PATH}
              download
              className="btn"
              iconPosition="right"
              icon={<ArrowIcon rotate={180} className="ml-1" strokeWidth={3} />}
            />
          </div>
        </section>

        <section id="services" className="section layer">
          <CardInfo />
        </section>
        <section id="experience" className="section layer">
          <Experience />
        </section>
        <section id="projects" className="section layer">
          <Works />
        </section>
        <section id="about" className="section layer">
          <MySelf />
        </section>
        <section id="contact" className="section layer">
          <ContactMe />
        </section>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default BodyHome;
