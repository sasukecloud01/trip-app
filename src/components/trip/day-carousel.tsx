"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MapPin, Plane, Car, BedDouble, Footprints, Utensils, Camera, Ticket, Clock, Star } from "lucide-react";
import { Trip, TripDay, TripActivity, ActivityType } from "@/types/trip";
import { useTripSettings } from "@/lib/trip-settings";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";


// ─── Activity type icon ───────────────────────────────────────────────────────
function TypeIcon({ type }: { type?: ActivityType }) {
  const cls = "h-5 w-5 shrink-0";
  switch (type) {
    case "flight":      return <Plane className={cls} />;
    case "drive":       return <Car className={cls} />;
    case "hotel":       return <BedDouble className={cls} />;
    case "hike":        return <Footprints className={cls} />;
    case "food":        return <Utensils className={cls} />;
    case "tour":        return <Camera className={cls} />;
    case "show":        return <Ticket className={cls} />;
    case "sightseeing": return <Star className={cls} />;
    case "free-time":   return <Clock className={cls} />;
    default:            return <MapPin className={cls} />;
  }
}

// ─── Single activity card ─────────────────────────────────────────────────────
function ActivityCard({
  activity,
  index,
  total,
  dayHotel,
}: {
  activity: TripActivity;
  index: number;
  total: number;
  dayHotel?: string;
}) {
  const { lang } = useTripSettings();

  const title = t(activity.title, lang);
  const description = activity.description ? t(activity.description, lang) : null;

  const mapsLocation =
    activity.type === "hotel" && dayHotel ? dayHotel : activity.locationName;

  const mapsUrl = mapsLocation
    ? `https://maps.google.com/?q=${encodeURIComponent(mapsLocation)}`
    : null;

  return (
    <div
      className="flex-shrink-0 w-[82vw] h-[600px] flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xl"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Image — flex-1 so it grows to fill all space above the content area */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        {activity.bgImage ? (
          <Image
            src={activity.bgImage}
            alt={title}
            fill
            className="object-cover"
            sizes="82vw"
            loading={index === 0 ? "eager" : "lazy"}
          />
        ) : (
          <div className="w-full h-full bg-zinc-800" />
        )}
      </div>

      {/* Content section — fixed height, CTA always at bottom */}
      <div className="shrink-0 flex flex-col gap-2.5 px-5 pt-4 pb-5">

        {/* Counter */}
        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-500 tabular-nums">
          {index + 1} / {total}
        </p>

        {/* Icon + Title */}
        <div className="flex items-start gap-2.5 text-zinc-900 dark:text-white">
          <TypeIcon type={activity.type} />
          <h3 className="text-[1.15rem] font-bold leading-snug -mt-0.5 line-clamp-1">
            {title}
          </h3>
        </div>

        {/* Description — fixed height so CTA position is always consistent */}
        <p className="h-9 text-sm text-zinc-600 dark:text-zinc-400 leading-snug line-clamp-2 overflow-hidden">
          {description ?? mapsLocation ?? ""}
        </p>

        {/* Time */}
        <p className="text-2xl font-bold text-zinc-900 dark:text-white tabular-nums h-8 leading-none flex items-center">
          {activity.time ?? ""}
        </p>

        {/* CTA — full width, always at bottom */}
        <a
          href={mapsUrl ?? "#"}
          target={mapsUrl ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center w-full h-[46px] rounded-xl text-sm font-semibold transition-colors mt-0.5",
            mapsUrl
              ? "bg-[#BBEA00] text-black dark:bg-[#E3FF36] dark:text-zinc-900 touch-manipulation transition-colors duration-75 active:bg-[#8faf00] dark:active:bg-[#b8cc00]"
              : "bg-zinc-300 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-600 pointer-events-none"
          )}
        >
          {lang === "en" ? "Open Google Maps" : "開啟地圖"}
        </a>

      </div>
    </div>
  );
}

// ─── Card strip + dots for a single day ──────────────────────────────────────
function DayActivityStrip({ day }: { day: TripDay }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Reset scroll position when this component remounts (day changed via key)
  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: "instant" });
    setActiveIdx(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    // card = 82vw + gap-4 (16px); leading spacer w-6 (24px) offsets first snap
    const cardUnit = window.innerWidth * 0.82 + 16;
    const idx = Math.min(
      Math.round(el.scrollLeft / cardUnit),
      day.activities.length - 1
    );
    if (idx !== activeIdx) setActiveIdx(idx);
  }, [activeIdx, day.activities.length]);

  return (
    <div>
      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto"
        style={{
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: "1.5rem",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Leading spacer — aligns first card to 24px gutter */}
        <div className="flex-shrink-0 w-6" aria-hidden />
        {day.activities.map((activity, idx) => (
          <ActivityCard
            key={idx}
            activity={activity}
            index={idx}
            total={day.activities.length}
            dayHotel={day.hotel}
          />
        ))}
        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-6" aria-hidden />
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {day.activities.map((_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-full transition-all duration-200",
              i === activeIdx
                ? "w-5 h-[4px] bg-zinc-600 dark:bg-zinc-300"
                : "w-[4px] h-[4px] bg-zinc-300 dark:bg-zinc-600"
            )}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function DayCarousel({ trip }: { trip: Trip }) {
  const { lang } = useTripSettings();
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  const selectedDay = trip.days[selectedDayIdx];

  const handleDaySelect = (idx: number) => {
    setSelectedDayIdx(idx);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">

      {/* Day selector pills — on page background, above image area */}
      <div
        className="shrink-0 flex gap-2 overflow-x-auto px-6 pb-3"
        style={{ scrollbarWidth: "none" }}
      >
        {trip.days.map((day, idx) => (
          <button
            key={day.dayNumber}
            onClick={() => handleDaySelect(idx)}
            className={cn(
              "flex-shrink-0 flex flex-col items-center justify-center",
              "h-[48px] w-[48px] rounded-2xl border text-center",
              "transition-all duration-150 active:scale-95 touch-manipulation",
              selectedDayIdx === idx
                ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white shadow-sm"
                : "bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800"
            )}
          >
            <span className="text-[17px] font-bold leading-none">
              {day.dayNumber}
            </span>
            <span className="text-[10px] font-medium opacity-60 mt-[3px]">
              {lang === "en" ? "Day" : "天"}
            </span>
          </button>
        ))}
      </div>

      {/* Separator */}
      <div className="shrink-0 border-t border-zinc-200 dark:border-zinc-800" />

      {/* Activity cards */}
      <div className="flex-1 flex flex-col justify-end pt-5 pb-11">
        <DayActivityStrip
          key={selectedDayIdx}
          day={selectedDay}
        />
      </div>

    </div>
  );
}
