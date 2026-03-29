import { Trip } from "@/types/trip";
import { tripRegistry } from "@/data/trips";

export function getTripBySlug(slug: string): Trip | undefined {
  return tripRegistry[slug];
}

export function getAllTrips(): Trip[] {
  return Object.values(tripRegistry);
}
