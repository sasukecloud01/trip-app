import { MapPin } from "lucide-react";
import { TripActivity } from "@/types/trip";
import { Lang, t } from "@/lib/i18n";

interface TimelineItemProps {
  activity: TripActivity;
  lang: Lang;
  isLast?: boolean;
}

export function TimelineItem({ activity, lang, isLast }: TimelineItemProps) {
  const mapsUrl = activity.locationName
    ? `https://maps.google.com/?q=${encodeURIComponent(activity.locationName)}`
    : null;

  const description = activity.description
    ? t(activity.description, lang)
    : null;

  return (
    <div className="flex">
      {/* Left: dot + connecting line */}
      <div className="flex flex-col items-center w-5 shrink-0">
        <div className="w-2 h-2 rounded-full bg-stone-200 dark:bg-stone-700 mt-[5px] shrink-0" />
        {!isLast && (
          <div className="w-px flex-1 bg-stone-100 dark:bg-stone-800 mt-1.5" />
        )}
      </div>

      {/* Activity block */}
      <div className={`flex-1 min-w-0 ${!isLast ? "pb-5" : "pb-4"}`}>
        {/* Line 1: title (left) + time (right) */}
        <div className="flex items-start justify-between gap-3">
          <p className="text-[15px] font-bold text-stone-900 dark:text-stone-50 leading-snug flex-1 min-w-0">
            {t(activity.title, lang)}
          </p>
          {activity.time && (
            <span className="text-xs font-medium text-stone-400 dark:text-stone-500 tabular-nums shrink-0 pt-[2px]">
              {activity.time}
            </span>
          )}
        </div>

        {/* Line 2: location or description */}
        {(activity.locationName || description) && (
          <p className="mt-0.5 text-sm text-stone-400 dark:text-stone-500 leading-snug">
            {activity.locationName ?? description}
          </p>
        )}

        {/* Note callout */}
        {activity.note && (
          <p className="mt-2 text-xs text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1.5 rounded-lg leading-snug">
            {t(activity.note, lang)}
          </p>
        )}

        {/* Line 3: Open Maps */}
        {mapsUrl && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 min-h-[44px] py-1 text-xs font-medium text-stone-400 dark:text-stone-500 touch-manipulation hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
          >
            <MapPin className="h-3 w-3" />
            Open Maps
          </a>
        )}

        {/* Extra booking/tour links */}
        {activity.links && activity.links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {activity.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[44px] px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-xl touch-manipulation active:bg-blue-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
