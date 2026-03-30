"use client";

import { Trip } from "@/types/trip";
import { DayCarousel } from "./day-carousel";

interface TripViewProps {
  trip: Trip;
}

export function TripView({ trip }: TripViewProps) {
  return (
    <div className="flex-1 flex flex-col max-w-lg mx-auto w-full overflow-hidden">
      <DayCarousel trip={trip} />
    </div>
  );
}
