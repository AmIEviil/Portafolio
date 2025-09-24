import { useTranslation } from "react-i18next";
import "./LanguageSwitch.css";
interface LanguageSwitcherProps {
  version?: string;
}

const LanguageSwitcher = ({ version = "clasic" }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  // Opciones de idioma
  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
  };

  return (
    <div className={`language-switcher ${version}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`btn-language 
            ${i18n.language === lang.code ? "active" : ""}
            ${version === "clasic" ? "py-1 px-3" : "short"}
            `}
          disabled={i18n.language === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
