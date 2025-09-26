import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./CardInfo.module.css";

gsap.registerPlugin(ScrollTrigger);
const CardInfo = () => {
  const { t } = useTranslation();

  const fullStackSkills = [
    {
      index: "01",
      skills: ["Vue.js", "React", "Node.js"],
    },
    {
      index: "02",
      skills: ["REST APIs", "MySQL", "Oracle "],
    },
    {
      index: "03",
      skills: ["Postman", "Git", "GitHub"],
    },
  ];

  const uiUxSkills = [
    {
      index: "01",
      skills: ["TailwindCSS", "GSAP", "Bootstrap"],
    },
    {
      index: "02",
      skills: ["Figma a Codigo"],
    },
    {
      index: "03",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className={s.card_container}>
      <div className={s.presentation_container}>
        <span className={s.card_title}>{t("card_info.who_im")}</span>
        <div className={s.card_text_container}>
          <p className={s.card_subtitle}>{t("card_info.about_me")}</p>
          <span className={s.card_description}>
            {t("card_info.my_description")}
          </span>
        </div>
      </div>
      <div className={s.skills_container}>
        <div className={s.card_title_container}>
          <span className={s.card_title_secondary}>(01)</span>
          <span className={s.card_title_secondary}>
            {t("fullstack_developer")}
          </span>
        </div>
        <div className={s.card_text_container}>
          <span className={s.card_description}>
            {t("card_info.skills_description")}
          </span>
        </div>
        {fullStackSkills.map((item, idx) => (
          <div
            key={item.index}
            className={`${s.skills_list} ${idx === 0 ? s.first : ""}`}
          >
            <span>{item.index}</span>
            {item.skills.map((skill) => (
              <span key={skill} className={s.skill_item}>
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className={s.ui_ux_container}>
        <div className={s.card_title_container}>
          <span className={s.card_title_secondary}>(02)</span>
          <span className={s.card_title_secondary}>UI/UX & Frontend</span>
        </div>
        <div className={s.card_text_container}>
          <span className={s.card_description}>
            {t("card_info.ux_ui_description")}
          </span>
        </div>
        {uiUxSkills.map((item, idx) => (
          <div
            key={item.index}
            className={`${s.skills_list} ${idx === 0 ? s.first : ""}`}
          >
            <span>{item.index}</span>
            {item.skills.map((skill) => (
              <span key={skill} className={s.skill_item}>
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
