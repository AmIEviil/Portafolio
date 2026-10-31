import { useTranslation } from "react-i18next";
import s from "./MySelf.module.css";
import mySpace from "../../assets/my_space.jpeg";

// Fecha de nacimiento: 31/03/2000 (mes 2 = marzo, base 0)
const BIRTH_DATE = new Date(2000, 2, 31);

// Edad actual, restando un año si aún no llega el cumpleaños de este año
const getAge = (birth: Date, today = new Date()) => {
  const age = today.getFullYear() - birth.getFullYear();
  const hadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());
  return hadBirthday ? age : age - 1;
};

const AGE = getAge(BIRTH_DATE);

const TRAITS = ["resolutive", "committed", "passionate", "team"];

const HOBBIES = ["music", "vinyl", "games", "bike"];

const MySelf = () => {
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: t("my_self.languages"),
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      title: t("my_self.frameworks"),
      items: [
        "React",
        "Next.js",
        "Vue.js",
        "NestJS",
        "Node.js",
        "Prisma",
        "TypeORM",
        "TailwindCSS",
        "GSAP",
        "i18next",
      ],
    },
    {
      title: t("my_self.tools"),
      items: [
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Azure",
        "PostgreSQL",
        "MySQL",
        "Postman",
        "SonarQube",
        "Figma",
      ],
    },
  ];

  const facts = [
    {
      label: t("my_self.facts.age"),
      value: t("my_self.facts.age_value", { age: AGE }),
    },
    {
      label: t("my_self.facts.location"),
      value: t("my_self.facts.location_value"),
    },
    {
      label: t("my_self.facts.experience"),
      value: t("my_self.facts.experience_value"),
    },
    {
      label: t("my_self.facts.modality"),
      value: t("my_self.facts.modality_value"),
    },
    {
      label: t("my_self.facts.english"),
      value: t("my_self.facts.english_value"),
    },
    { label: t("my_self.facts.focus"), value: t("my_self.facts.focus_value") },
  ];

  return (
    <div className={s.myselfContainer}>
      <div className={s.myselfContent}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>{t("my_self.title")}</h2>
        </div>
        <div className={s.descriptionContainer}>
          <span className={s.subtitle}>{t("my_self.skills")}</span>
          <div className={s.descriptionSkills}>
            {skillGroups.map((group) => (
              <div key={group.title} className={s.descriptionText}>
                <h3 className={s.subtitleSkill}>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item} className={s.language}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={s.aboutMeContainer}>
        <div className={s.imgWrapper}>
          <img
            src={mySpace}
            alt={t("my_self.photo_alt")}
            className={s.imgContainer}
            loading="lazy"
          />
          <dl className={s.facts}>
            {facts.map((fact) => (
              <div key={fact.label} className={s.fact}>
                <dt className={s.factLabel}>{fact.label}</dt>
                <dd className={s.factValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={s.aboutMeTextContainer}>
          <span className={s.availability}>{t("my_self.availability")}</span>
          <span className={s.highlight}>{t("my_self.my_self_text")}</span>
          <div className={s.aboutMeDescriptionText}>
            <p className={s.aboutMeLabel}>{t("my_self.about_me")}</p>
            <div className={s.aboutMeText}>
              <p>{t("my_self.about_me_description", { age: AGE })}</p>
              <p>{t("my_self.about_me_description2")}</p>
            </div>
          </div>
          <div className={s.traits}>
            <h3 className={s.traitsTitle}>{t("my_self.traits_title")}</h3>
            <ul className={s.traitsList}>
              {TRAITS.map((trait, idx) => (
                <li key={trait} className={s.trait}>
                  <span className={s.traitIndex}>0{idx + 1}</span>
                  <h4 className={s.traitTitle}>
                    {t(`my_self.traits.${trait}.title`)}
                  </h4>
                  <p className={s.traitText}>
                    {t(`my_self.traits.${trait}.text`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.traits}>
            <h3 className={s.traitsTitle}>{t("my_self.hobbies_title")}</h3>
            <ul className={s.hobbies}>
              {HOBBIES.map((hobby) => (
                <li key={hobby} className={s.hobby}>
                  {t(`my_self.hobbies.${hobby}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
