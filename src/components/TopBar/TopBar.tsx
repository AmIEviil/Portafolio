import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitch/LanguageSwitcher";
import style from "./TopBar.module.css";
import ThemeToggle from "../ThemeTogle/ThemeTogle";
import MenuIcon from "../../icons/MenuIcon";
import { NAV_SECTIONS, scrollToSection } from "../../utils/navigation";

const TopBar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // fondo del header solo cuando ya no estamos arriba del todo
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // cerrar el menú mobile con Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        className={`${style.nav_bar} ${scrolled || menuOpen ? style.scrolled : ""}`}
      >
        <a
          href="#home"
          className={style.nav_barTitle}
          onClick={(e) => {
            e.preventDefault();
            goTo("home");
          }}
        >
          {t("fullstack_developer")}
        </a>
        <nav aria-label={t("nav.menu")}>
          <ul className={style.nav_barList}>
            {NAV_SECTIONS.map((section) => (
              <li className={style.nav_barOptions} key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={style.revealText}
                  data-text={t(section.labelKey)}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(section.id);
                  }}
                >
                  {t(section.labelKey)}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <LanguageSwitcher version="short" />
            </li>
            <li className={style.menuToggle}>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? t("nav.close_menu") : t("nav.open_menu")}
                className={style.menuButton}
              >
                <MenuIcon open={menuOpen} size={28} />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* menú mobile a pantalla completa */}
      <div
        id="mobile-menu"
        className={`${style.mobileMenu} ${menuOpen ? style.mobileMenuOpen : ""}`}
        inert={!menuOpen}
      >
        <ul>
          {NAV_SECTIONS.map((section, idx) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={style.mobileLink}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(section.id);
                }}
              >
                <span className={style.mobileIndex}>0{idx + 1}</span>
                {t(section.labelKey)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TopBar;
