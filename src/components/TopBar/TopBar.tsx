import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitch/LanguageSwitcher";
import style from "./TopBar.module.css";
import ThemeToggle from "../ThemeTogle/ThemeTogle";

const TopBar = () => {
  const { t } = useTranslation();

  const options = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about-me" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <>
      <div className={style.nav_bar}>
        <h3 className={style.nav_barTitle}>{t("fullstack_developer")}</h3>
        <ul className={style.nav_barList}>
          {options.map((option) => (
            <li
              className={style.nav_barOptions}
              key={option.name}
              onClick={() => {
                const el = document.getElementById(
                  option.href.replace("#", "")
                );
                if (el) {
                  const y =
                    el.getBoundingClientRect().top + window.scrollY - 80; // 80px = alto navbar
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              <span className={style.optionsText}>{option.name}</span>
            </li>
          ))}
          <ThemeToggle />
          <LanguageSwitcher version="short" />
        </ul>
      </div>
    </>
  );
};

export default TopBar;
