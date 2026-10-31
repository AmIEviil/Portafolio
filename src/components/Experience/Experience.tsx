import { useTranslation } from "react-i18next";
import s from "./Experience.module.css";

const Experience = () => {
  const { t } = useTranslation();

  // Textos en locales: experience.jobs.<key>.{role,company,description}
  const jobs = [
    {
      key: "consulting",
      period: `2025 — ${t("experience.present")}`,
      stack: ["React", "Next.js", "NestJS", "PostgreSQL", "MySQL", "AWS", "Azure"],
    },
    {
      key: "water",
      period: "2023 — 2025",
      stack: ["Vue.js", "NestJS", "Prisma", "TailwindCSS", "AWS"],
    },
    {
      key: "internship",
      period: "2022",
      stack: [],
    },
  ];

  const degrees = ["engineering", "analyst"];

  return (
    <div className={s.experienceContainer}>
      <h2 className={s.title}>{t("experience.title")}</h2>
      <div className={s.intro}>
        <p className={s.subtitle}>{t("experience.subtitle")}</p>
        <span className={s.introText}>{t("experience.description")}</span>
      </div>

      <ol className={s.timeline}>
        {jobs.map((job) => (
          <li key={job.key} className={s.job}>
            <span className={s.period}>{job.period}</span>
            <div className={s.jobInfo}>
              <h3 className={s.role}>{t(`experience.jobs.${job.key}.role`)}</h3>
              <p className={s.company}>
                {t(`experience.jobs.${job.key}.company`)}
              </p>
              <p className={s.description}>
                {t(`experience.jobs.${job.key}.description`)}
              </p>
              {job.stack.length > 0 && (
                <ul className={s.stack}>
                  {job.stack.map((tech) => (
                    <li key={tech} className={s.tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className={s.education}>
        <h3 className={s.educationTitle}>{t("experience.education")}</h3>
        <ul className={s.degrees}>
          {degrees.map((degree) => (
            <li key={degree} className={s.degree}>
              <span>{t(`experience.degrees.${degree}`)}</span>
              <span className={s.graduated}>{t("experience.graduated")}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
