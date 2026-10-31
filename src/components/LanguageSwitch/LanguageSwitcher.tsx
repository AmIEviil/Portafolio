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

  // el LanguageDetector ya persiste la elección en localStorage (i18nextLng)
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const current = i18n.resolvedLanguage;

  return (
    <div className={`language-switcher ${version}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`btn-language 
            ${current === lang.code ? "active" : "cursor-pointer"}
            ${version === "clasic" ? "py-1 px-3" : "short"}
            `}
          disabled={current === lang.code}
          aria-pressed={current === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
