import { useTranslation } from "react-i18next";
import s from "./Footer.module.css";
import CustomButton from "../Button/CustomButton";
import ArrowIcon from "../../icons/ArrowIcon";

const Footer = () => {
  const { t } = useTranslation();
  const options = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about-me" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];
  const socialMedia = [
    { name: "GitHub", href: "https://github.com/AmIEviil" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/gcaro-otarola/" },
    { name: "Instagram", href: "https://www.instagram.com/bastardo.caro/" },
    { name: "Email", href: "mailto:gcarootarola@gmail.com" },
  ];
  return (
    <div className={s.footer_container}>
      <div className={s.footer_menu}>
        <p className={s.footer_Title}>Menu</p>
        <ul className={s.nav_barList}>
          {options.map((option) => (
            <li
              className={s.option_li}
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
              <span className={s.optionsText}>{option.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.footer_socialMedia}>
        <p className={s.footer_Title}>{t("footer.social_media")}</p>
        <ul className={s.nav_barList}>
          {socialMedia.map((option) => (
            <li
              className={s.option_li}
              key={option.name}
              onClick={() => {
                window.open(option.href, "_blank");
              }}
            >
              <span className={s.optionsText}>{option.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <CustomButton
        className={s.back_to_top_btn}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        icon={<ArrowIcon rotate={0} strokeWidth={2} />}
      />
    </div>
  );
};

export default Footer;
