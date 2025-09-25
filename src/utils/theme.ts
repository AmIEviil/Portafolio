export type Theme = "light" | "dark";
const LS_KEY = "theme";

export function getSavedTheme(): Theme | null {
  try {
    const v = localStorage.getItem(LS_KEY);
    return v === "dark" || v === "light" ? (v as Theme) : null;
  } catch {
    return null;
  }
}

export function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(LS_KEY, theme);
  } catch {
    // noop
  }
}

export function initTheme() {
  const saved = getSavedTheme();
  const theme = saved ?? getPreferredTheme();
  applyTheme(theme);
}

export function toggleTheme() {
  const current =
    (document.documentElement.getAttribute("data-theme") as Theme) ?? "light";
  const next: Theme = current === "dark" ? "light" : "dark";
  applyTheme(next);
}
