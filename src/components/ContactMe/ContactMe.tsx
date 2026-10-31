import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import s from "./ContactMe.module.css";
import CustomInput from "../Input/CustomInput";
import CustomButton from "../Button/CustomButton";
import { CONTACT_EMAIL } from "../../utils/contact";

// Access key pública de Web3Forms (https://web3forms.com), se define en .env / Vercel
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Status = "idle" | "sending" | "success" | "error";

const ContactMe = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const subject = t("contact_me.subject", { name });

    // sin access key (ej. en local) se abre el cliente de correo como respaldo
    if (!WEB3FORMS_KEY) {
      const body = `${data.get("message")}\n\n${name} · ${data.get("email")}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", subject);
    data.append("from_name", "Portafolio");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={s.contact_container}>
      <h2 className={s.idea_text}>
        {t("contact_me.ideas")}
        <br /> {t("contact_me.make_it_real")}
      </h2>
      <form className={s.form_container} onSubmit={handleSubmit}>
        <span className={s.form_label}>{t("contact_me.your_idea")}</span>
        {/* honeypot anti-spam de Web3Forms: oculto para personas */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <CustomInput
          id="contact-name"
          name="name"
          placeholder={t("contact_me.name")}
          type="text"
          autoComplete="name"
          required
        />
        <CustomInput
          id="contact-email"
          name="email"
          placeholder={t("contact_me.email")}
          type="email"
          autoComplete="email"
          required
        />
        <CustomInput
          id="contact-message"
          name="message"
          placeholder={t("contact_me.message")}
          type="text-area"
          required
        />
        <CustomButton
          type="submit"
          label={
            status === "sending"
              ? t("contact_me.sending")
              : t("contact_me.send_message")
          }
          disabled={status === "sending"}
          className="w-full items-center justify-center font-bold text-lg"
        />
        <p className={s.status} role="status" aria-live="polite">
          {status === "success" && t("contact_me.success")}
          {status === "error" &&
            t("contact_me.error", { email: CONTACT_EMAIL })}
        </p>
      </form>
    </div>
  );
};
export default ContactMe;
