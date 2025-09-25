import { useEffect, useState } from "react";
import { toggleTheme } from "../../utils/theme";
import SunIcon from "../../icons/SunIcon";
import MoonIcon from "../../icons/MoonIcon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof document !== "undefined"
      ? (document.documentElement.getAttribute("data-theme") as
          | "light"
          | "dark") ?? "light"
      : "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const t =
        (document.documentElement.getAttribute("data-theme") as
          | "light"
          | "dark") ?? "light";
      setTheme(t);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <button
      onClick={() => toggleTheme()}
      aria-label="Cambiar tema"
      style={{
        padding: "6px 10px",
        borderRadius: 8,
        background: "transparent",
        cursor: "pointer",
      }}
      title={
        theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
      }
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
