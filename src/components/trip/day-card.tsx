"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TripDay } from "@/types/trip";
import { Lang, t } from "@/lib/i18n";
import { TimelineItem } from "./timeline-item";

interface DayCardProps {
  day: TripDay;
  lang: Lang;
}

export function DayCard({ day, lang }: DayCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden bg-white dark:bg-stone-900 mb-3 shadow-sm">
        <CollapsibleTrigger className="w-full text-left px-4 py-4 flex items-start justify-between gap-3 touch-manipulation active:bg-stone-50 dark:active:bg-stone-800/50 transition-colors">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-0.5">
              {day.dateLabel}
            </p>
            <p className="text-lg font-bold text-stone-900 dark:text-stone-50 leading-snug">
              {t(day.title, lang)}
            </p>
            {day.hotel && (
              <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                <span aria-hidden>🏨</span>
                <span>{day.hotel}</span>
              </p>
            )}
          </div>
          <ChevronDown
            className={`h-5 w-5 text-stone-400 dark:text-stone-500 mt-1 shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="border-t border-stone-100 dark:border-stone-800 px-4 pt-4 pb-1">
            {day.activities.map((activity, index) => (
              <TimelineItem
                key={index}
                activity={activity}
                lang={lang}
                isLast={index === day.activities.length - 1}
              />
            ))}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
