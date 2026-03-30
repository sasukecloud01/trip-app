"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Trip } from "@/types/trip";
import { useTripSettings } from "@/lib/trip-settings";
import { t } from "@/lib/i18n";

interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  const { lang } = useTripSettings();
  const name = trip.displayName ?? trip.title;

  return (
    <Link href={`/trips/${trip.slug}`} className="block group touch-manipulation">
      {/* aspect-[3/2] ≈ 67% height-to-width — hero proportions */}
      <div className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden shadow-md">

        {/* Background: cover image or neutral gradient fallback */}
        {trip.coverImage ? (
          <Image
            src={trip.coverImage}
            alt={t(name, lang)}
            fill
            className="object-cover transition-transform duration-500 group-active:scale-[1.02]"
            sizes="(max-width: 512px) 100vw, 512px"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800" />
        )}

        {/* Bottom gradient — text readability without killing the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        {/* Text block — anchored to bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pr-14">
          {trip.duration && (
            <p className="text-white/55 text-[11px] font-semibold tracking-widest uppercase mb-1.5">
              {trip.duration}
            </p>
          )}
          <h2 className="text-white text-xl font-bold leading-snug">
            {t(name, lang)}
          </h2>
          {trip.summary && (
            <p className="text-white/65 text-sm leading-snug mt-1 line-clamp-2">
              {t(trip.summary, lang)}
            </p>
          )}
        </div>

        {/* Arrow — lightweight affordance, bottom-right */}
        <div className="absolute bottom-5 right-5">
          <ArrowUpRight className="h-5 w-5 text-white/50 group-active:text-white/90 transition-colors" />
        </div>

      </div>
    </Link>
  );
}
