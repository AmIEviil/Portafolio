import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./Works.module.css";

type Category = "professional" | "personal";
type ProjectState =
  "production" | "development" | "upcoming" | "paused" | "finished";
type Filter = "all" | Category;

interface Project {
  key: string;
  // título fijo; si no viene se usa work.projects.<key>.title
  title?: string;
  category: Category;
  client: "water" | "consulting" | "independent";
  period: string;
  state: ProjectState;
  stack: string[];
  // captura opcional: importar desde src/assets y asignarla aquí
  image?: string;
  link?: string;
}

const PROJECTS: Project[] = [
  {
    key: "club",
    category: "professional",
    client: "consulting",
    period: "2025 — 2026",
    state: "upcoming",
    stack: [
      "Next.js",
      "NestJS",
      "MySQL",
      "TypeORM",
      "AWS",
      "Azure Storage",
      "SonarQube",
    ],
  },
  {
    key: "wildlife",
    category: "professional",
    client: "consulting",
    period: "2025 — 2026",
    state: "development",
    stack: ["React", "NestJS", "PostgreSQL", "Azure", "Azure Storage"],
  },
  {
    key: "wells",
    category: "professional",
    client: "water",
    period: "2024 — 2025",
    state: "production",
    stack: ["Vue.js", "NestJS", "Prisma", "TailwindCSS", "i18n", "AWS"],
  },
  {
    key: "water_data",
    category: "professional",
    client: "water",
    period: "2023 — 2024",
    state: "finished",
    stack: ["Vue.js", "NestJS", "Prisma", "TailwindCSS", "i18n", "AWS"],
  },
  {
    key: "pools",
    title: "Piscinas El Maipo",
    category: "personal",
    client: "independent",
    period: "2025 — 2026",
    state: "production",
    stack: ["React", "NestJS", "PostgreSQL", "Docker", "Ubuntu VPS"],
  },
  {
    key: "encanto",
    title: "Experiencias de Encanto",
    category: "personal",
    client: "independent",
    period: "2025 — 2026",
    state: "paused",
    stack: [
      "React",
      "NestJS",
      "PostgreSQL",
      "Mercado Pago",
      "Google OAuth",
      "VPS",
    ],
  },
];

const FILTERS: Filter[] = ["all", "professional", "personal"];

// Iniciales para la portada generada, ignorando palabras cortas ("de", "El"...)
const getMonogram = (title: string) =>
  title
    .split(/[\s:]+/)
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

const Works = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");

  const projects = PROJECTS.filter(
    (project) => filter === "all" || project.category === filter,
  );

  // al filtrar cambia el alto de la sección; ScrollSmoother/ScrollTrigger deben recalcular
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [filter]);

  return (
    <div className={s.worksContainer}>
      <div className={s.worksContent}>
        <h2 className={s.title}>{t("work.title")}</h2>
        <div className={s.sectionTitle}>
          <div className={s.projectsInfo}>
            <p className={s.projectTitle}>{t("work.projects.title")}</p>
            <span className={s.experienceText}>
              {t("work.projects.description")}
            </span>
          </div>
        </div>

        <div className={s.filters} role="group">
          {FILTERS.map((option) => (
            <button
              key={option}
              type="button"
              className={`${s.filterBtn} ${filter === option ? s.filterActive : ""}`}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {t(`work.projects.filters.${option}`)}
            </button>
          ))}
        </div>

        <ul className={s.projectList}>
          {projects.map((project, idx) => {
            const title =
              project.title ?? t(`work.projects.${project.key}.title`);
            return (
              <li key={project.key} className={s.projectWrapper}>
                <div className={s.fixedNumber}>
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <article className={s.projectCard}>
                  {/* sin captura se muestra una portada generada con sector e iniciales */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={title}
                      className={s.projectImg}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`${s.projectCover} ${s[`cover_${project.category}`]}`}
                      aria-hidden="true"
                    >
                      <span className={s.coverSector}>
                        {t(`work.projects.${project.key}.sector`)}
                      </span>
                      <span className={s.coverMonogram}>
                        {getMonogram(title)}
                      </span>
                    </div>
                  )}
                  <div className={s.projectDetails}>
                    <div className={s.projectHeader}>
                      <span className={s.projectCategory}>
                        {t(`work.projects.categories.${project.category}`)}
                      </span>
                      <span className={s.projectYear}>{project.period}</span>
                    </div>
                    <div className={s.projectText}>
                      <h3 className={s.projectName}>{title}</h3>
                      <p className={s.projectClient}>
                        {t(`work.projects.clients.${project.client}`)} ·{" "}
                        {t("fullstack_developer")}
                      </p>
                      <p className={s.projectDesc}>
                        {t(`work.projects.${project.key}.description`)}
                      </p>
                    </div>
                    <ul className={s.projectStack}>
                      {project.stack.map((tech) => (
                        <li key={tech} className={s.tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className={s.projectMeta}>
                      <span className={`${s.projectState} ${s[project.state]}`}>
                        {t(`work.projects.states.${project.state}`)}
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={s.projectLink}
                        >
                          {project.link.replace(/^https?:\/\//, "")}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Works;
