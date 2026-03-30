import { Trip } from "@/types/trip";
import { Lang, t } from "@/lib/i18n";

interface TripHeaderProps {
  trip: Pick<Trip, "displayName" | "title">;
  lang: Lang;
}

export function TripHeader({ trip, lang }: TripHeaderProps) {
  const name = trip.displayName ?? trip.title;

  return (
    <div className="px-6 pt-3 pb-2">
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 truncate">
        {t(name, lang)}
      </h2>
    </div>
  );
}
