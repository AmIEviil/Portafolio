import { useTranslation } from "react-i18next";
import s from "./CardInfo.module.css";

const CardInfo = () => {
  const { t } = useTranslation();

  // Cada servicio agrupa sus skills en filas (01, 02, 03)
  const services = [
    {
      title: t("fullstack_developer"),
      description: t("card_info.skills_description"),
      rows: [
        ["React", "Next.js", "Vue.js"],
        ["NestJS", "Node.js", "REST APIs"],
        ["PostgreSQL", "MySQL", "Prisma", "TypeORM"],
      ],
    },
    {
      title: "UI/UX & Frontend",
      description: t("card_info.ux_ui_description"),
      rows: [
        ["TailwindCSS", "GSAP"],
        [t("card_info.figma_to_code"), t("card_info.responsive")],
        [t("card_info.i18n"), "TypeScript"],
      ],
    },
    {
      title: t("card_info.cloud_title"),
      description: t("card_info.cloud_description"),
      rows: [
        ["AWS", "Azure"],
        ["Docker", t("card_info.vps")],
        ["SonarQube", "Git", "GitHub"],
      ],
    },
  ];

  return (
    <div className={s.card_container}>
      <div className={s.presentation_container}>
        <h2 className={s.card_title}>{t("card_info.who_im")}</h2>
        <div className={s.card_text_container}>
          <p className={s.card_subtitle}>{t("card_info.about_me")}</p>
          <span className={s.card_description}>
            {t("card_info.my_description")}
          </span>
        </div>
      </div>
      {services.map((service, serviceIdx) => (
        <div key={service.title} className={s.skills_container}>
          <div className={s.card_title_container}>
            <span className={s.card_title_secondary}>
              (0{serviceIdx + 1})
            </span>
            <h3 className={s.card_title_secondary}>{service.title}</h3>
          </div>
          <div className={s.card_text_container}>
            <span className={s.card_description}>{service.description}</span>
          </div>
          {service.rows.map((row, idx) => (
            <div
              key={idx}
              className={`${s.skills_list} ${idx === 0 ? s.first : ""}`}
            >
              <span>0{idx + 1}</span>
              {row.map((skill) => (
                <span key={skill} className={s.skill_item}>
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardInfo;
