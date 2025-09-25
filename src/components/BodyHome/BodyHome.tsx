import { useTranslation } from "react-i18next";
import "./BodyHome.css";
import CustomButton from "../../Button/CustomButton";
import ArrowIcon from "../../icons/ArrowIcon";
const BodyHome = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <section id="home">
        <div className="home_container">
          <div className="name_container">
            <span className="my_name">GONZALO CARO</span>
          </div>
          <ArrowIcon size={32} rotate={140} strokeWidth={1} />
          <div className="mt-4">
            <p>{t("body.first_text")}</p>
            <p>{t("body.second_text")}</p>
            <p>{t("body.third_text")}</p>
            <p>{t("body.fourth_text")}</p>
            <img src="" alt="" />
          </div>
        </div>
        <div className="btn_contact-me-container">
          <CustomButton
            label={t("contact")}
            onClick={() => {
              window.location.href = "#contact";
            }}
            className="btn"
            iconPosition="right"
            icon={<ArrowIcon rotate={45} className="ml-1" strokeWidth={3} />}
          />

        </div>
      </section>
    </div>
  );
};

export default BodyHome;
