"use client";

import { Sun, Moon } from "lucide-react";
import { useTripSettings } from "@/lib/trip-settings";

export function HomeHeader() {
  const { lang, theme, setLang, toggleTheme } = useTripSettings();

  return (
    <div className="flex items-center justify-between mb-5">
      {/* Primary page title */}
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
        Upcoming Trip
      </h1>

      {/* Controls — right aligned, compact */}
      <div className="flex items-center gap-1">
        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          aria-label="Toggle language"
          className="flex items-center justify-center h-9 w-9 rounded-full text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors touch-manipulation"
        >
          {lang === "en" ? "繁" : "EN"}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          className="flex items-center justify-center h-9 w-9 rounded-full text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors touch-manipulation"
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
