import { useTranslation } from "react-i18next";
import s from "./MySelf.module.css";

const MySelf = () => {
  const { t } = useTranslation();

  const languages = [
    "Python",
    "SQL",
    "JAVA",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Git",
    "GitHub",
    "Figma",
    "Postman",
    "Docker",
  ];

  const frameworks = [
    "React",
    "Vue.js",
    "Node.js",
    "Bootstrap",
    "GSAP",
    "TailwindCSS",
    "TypeORM",
    "GSAP",
    "JQuery",
  ];

  return (
    <div className={s.myselfContainer}>
      <div className={s.myselfContent}>
        <div className={s.titleContainer}>
          <p className={s.title}>{t("my_self.title")}</p>
        </div>
        <div className={s.descriptionContainer}>
          <span className={s.subtitle}>{t("my_self.skills")}</span>
          <div className={s.descriptionSkills}>
            <div className={s.descriptionText}>
              <span className={s.subtitleSkill}>
                {t("my_self.languages_tools")}
              </span>
              {languages.map((lang) => (
                <span key={lang} className={s.language}>
                  {lang}
                </span>
              ))}
            </div>
            <div className={s.descriptionText}>
              <span className={s.subtitleSkill}>{t("my_self.frameworks")}</span>
              {frameworks.map((framework) => (
                <span key={framework} className={s.language}>
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={s.aboutMeContainer}>
        <div>
          <img
            src="./src/assets/my_space.jpeg"
            alt="My Self"
            className={s.imgContainer}
          />
        </div>
        <div className={s.aboutMeTextContainer}>
          <span className="text-2xl font-bold w-3/4">
            {t("my_self.my_self_text")}
          </span>
          <div className={s.aboutMeDescriptionText}>
            <p className="w-1/6">{t("my_self.about_me")}</p>
            <span className={s.aboutMeText}>
              {t("my_self.about_me_description")}
              <br />
              <br />
              <br />
              {t("my_self.about_me_description2")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
