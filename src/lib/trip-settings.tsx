"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Lang } from "@/lib/i18n";

type Theme = "light" | "dark";

interface TripSettings {
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
}

const TripSettingsContext = createContext<TripSettings>({
  lang: "en",
  theme: "light",
  setLang: () => {},
  toggleTheme: () => {},
});

export function TripSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("light");

  // Restore persisted preferences on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("trip-lang") as Lang | null;
    const savedTheme = localStorage.getItem("trip-theme") as Theme | null;
    if (savedLang) setLangState(savedLang);
    if (savedTheme) setThemeState(savedTheme);
  }, []);

  // Apply .dark class to <html> whenever theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("trip-theme", theme);
  }, [theme]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("trip-lang", l);
  };

  const toggleTheme = () =>
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <TripSettingsContext.Provider value={{ lang, theme, setLang, toggleTheme }}>
      {children}
    </TripSettingsContext.Provider>
  );
}

export function useTripSettings() {
  return useContext(TripSettingsContext);
}
