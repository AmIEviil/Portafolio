import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./Works.module.css";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Piscinas El Maipo",
      description: t("work.projects.piscinas.description"),
      link: "https://example.com/project-one",
      state: t("work.projects.states.development"),
      year: 2025,
    },
    {
      id: 2,
      title: "Casona Encantada",
      description: t("work.projects.casona.description"),
      link: "https://example.com/project-two",
      state: t("work.projects.states.development"),
      year: 2025,
    },
    {
      id: 3,
      title: "Teteria Encantada",
      description: t("work.projects.teteria.description"),
      link: "https://example.com/project-three",
      state: t("work.projects.states.coming_soon"),
      year: 2025,
    },
  ];

  return (
    <div className={s.worksContainer}>
      <div className={s.worksContent}>
        <span className={s.title}>{t("work.title")}</span>
        <div className={s.sectionTitle}>
          <div className={s.projectsInfo}>
            <p className={s.projectTitle}>{t("work.projects.title")}</p>
            <span className={s.experienceText}>
              {t("work.projects.description")}
            </span>
          </div>
        </div>
        <div className={s.projectLinks}>
          <div className={s.scrollingProjects}>
            {projects.map((project) => (
              <div key={project.id} className={s.projectWrapper}>
                <div className={s.fixedNumber}>0{project.id}</div>
                <div className={s.projectCard}>
                  <img
                    src="./src/assets/img1.png"
                    alt={project.title}
                    className={s.projectImg}
                  />
                  <div className={s.projectDetails}>
                    <div className={s.projectText}>
                      <p className={s.projectDesc}>{project.description}</p>
                      <h3 className={s.projectName}>{project.title}</h3>
                    </div>
                    <div className={s.projectMeta}>
                      <span className={s.projectState}>{project.state}</span>
                      <span className={s.projectYear}>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
