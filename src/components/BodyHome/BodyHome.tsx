import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useTranslation } from "react-i18next";

import "./BodyHome.css";
import CustomButton from "../Button/CustomButton";
import ArrowIcon from "../../icons/ArrowIcon";
import CardInfo from "../CardInfo/CardInfo";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Works from "../Works/Works";
import MySelf from "../MySelf/MySelf";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const BodyHome = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // efecto de "salida" para home
    gsap.to("#home", {
      opacity: 0.1,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#about-me",
        start: "top 80%",
        end: "top 20%",
        scrub: 1.5,
      },
    });

    // efecto de "entrada" para about-me
    gsap.fromTo(
      "#about-me",
      { opacity: 1 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top 80%",
          end: "top 20%",
          scrub: 1.5,
        },
      }
    );

    // efecto de "salida" para my-self
    gsap.to("#about-me", {
      opacity: 0.1,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#my-self",
        start: "top 80%",
        end: "top 20%",
        scrub: 1.5,
      },
    });

    // efecto de "entrada" para my-self
    gsap.fromTo(
      "#my-self",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: "#my-self",
          start: "top 80%",
          end: "top 20%",
          scrub: 1.5,
        },
      }
    );

    // efecto de "salida" para my-self
    gsap.to("#my-self", {
      opacity: 0.1,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "top 20%",
        scrub: 1.5,
      },
    });

    // efecto de "entrada" para contact
    gsap.fromTo(
      "#contact",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          end: "top 20%",
          scrub: 1.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper" className="sections-container">
      <div id="smooth-content">
        <section id="home" className="section layer">
          <div className="home_container">
            <div className="name_container">
              <span className="my_name">GONZALO CARO</span>
            </div>
            <ArrowIcon size={32} rotate={140} strokeWidth={1} />
            <div className="mt-4 text-start text-lg md:text-2xl max-w-2xl">
              <p>{t("body.first_text")}</p>
              <p>{t("body.second_text")}</p>
              <p>{t("body.third_text")}</p>
              <p>{t("body.fourth_text")}</p>
            </div>
          </div>
          <div className="btn_contact-me-container">
            <CustomButton
              label={t("contact")}
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  const y =
                    el.getBoundingClientRect().top ;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="btn"
              iconPosition="right"
              icon={<ArrowIcon rotate={45} className="ml-1" strokeWidth={3} />}
            />
          </div>
        </section>

        <section id="about-me" className="section layer">
          <CardInfo />
        </section>
        <section id="projects" className="section layer">
          <Works />
        </section>
        <section id="my-self" className="section layer">
          <MySelf />
        </section>
        <section id="contact" className="section layer">
          <ContactMe />
        </section>
        <section id="footer" className="">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default BodyHome;
