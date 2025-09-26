import { useTranslation } from "react-i18next";
import s from "./ContactMe.module.css";
import CustomInput from "../Input/CustomInput";
import CustomButton from "../Button/CustomButton";

const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <div className={s.contact_container}>
      <p className={s.idea_text}>
        {t("contact_me.ideas")}
        <br /> {t("contact_me.make_it_real")}
      </p>
      <div className={s.form_container}>
        <span className={s.form_label}>{t("contact_me.your_idea")}</span>
        <CustomInput
          placeholder={t("contact_me.name")}
          type="text"
          onChange={() => {}}
        />
        <CustomInput
          placeholder={t("contact_me.email")}
          type="email"
          onChange={() => {}}
        />
        <CustomInput
          placeholder={t("contact_me.message")}
          type="text-area"
          onChange={() => {}}
        />
        <CustomButton
          label={t("contact_me.send_message")}
          onClick={() => {}}
          className="w-full items-center justify-center font-bold text-lg"
        />
      </div>
    </div>
  );
};
export default ContactMe;
