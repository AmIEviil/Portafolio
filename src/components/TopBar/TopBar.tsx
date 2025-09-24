import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitch/LanguageSwitcher";
import style from "./TopBar.module.css";

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
      <nav className={style.nav_bar}>
        <h3 className={style.nav_barTitle}>{t("fullstack_developer")}</h3>
        <ul className={style.nav_barList}>
          {options.map((option) => (
            <li className={style.nav_barOptions} key={option.name}>
              <a className={style.optionsText} href={option.href}>
                {option.name}
              </a>
            </li>
          ))}
          <LanguageSwitcher version="short" />
        </ul>
      </nav>
    </>
  );
};

export default TopBar;
