"use client";

import Link from "next/link";
import { ChevronLeft, Sun, Moon } from "lucide-react";
import { useTripSettings } from "@/lib/trip-settings";

interface TripNavProps {
  title?: string;
}

export function TripNav({ title }: TripNavProps) {
  const { lang, theme, setLang, toggleTheme } = useTripSettings();

  return (
    <div className="flex items-center justify-between mb-5">
      {/* Back to home */}
      <Link
        href="/"
        className="flex items-center justify-center h-9 w-9 rounded-full text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors touch-manipulation"
        aria-label="Back"
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>

      {/* Center label — trip name or fallback */}
      <h2 className="text-base font-bold text-zinc-900 dark:text-white select-none truncate flex-1 mx-3">
        {title ?? (lang === "en" ? "Trip" : "行程")}
      </h2>

      {/* Right: language + theme */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          aria-label="Toggle language"
          className="flex items-center justify-center h-9 w-9 rounded-full text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors touch-manipulation"
        >
          {lang === "en" ? "繁" : "EN"}
        </button>

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
