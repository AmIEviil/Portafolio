import { useTranslation } from "react-i18next";
import s from "./Footer.module.css";
import CustomButton from "../Button/CustomButton";
import ArrowIcon from "../../icons/ArrowIcon";
import { NAV_SECTIONS, scrollToSection } from "../../utils/navigation";
import { SOCIAL_LINKS } from "../../utils/contact";

const Footer = () => {
  const { t } = useTranslation();
  const options = [{ id: "home", labelKey: "nav.home" }, ...NAV_SECTIONS];

  return (
    <div className={s.footer_container}>
      <nav className={s.footer_menu}>
        <p className={s.footer_Title}>{t("nav.menu")}</p>
        <ul className={s.nav_barList}>
          {options.map((option) => (
            <li className={s.option_li} key={option.id}>
              <a
                href={`#${option.id}`}
                className={s.optionsText}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(option.id);
                }}
              >
                {t(option.labelKey)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={s.footer_socialMedia}>
        <p className={s.footer_Title}>{t("footer.social_media")}</p>
        <ul className={s.nav_barList}>
          {SOCIAL_LINKS.map((link) => (
            <li className={s.option_li} key={link.name}>
              <a
                href={link.href}
                className={s.optionsText}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <CustomButton
        className={s.back_to_top_btn}
        onClick={() => scrollToSection("home")}
        ariaLabel={t("footer.back_to_top")}
        icon={<ArrowIcon rotate={0} strokeWidth={2} />}
      />
    </div>
  );
};

export default Footer;
