import { Trip } from "@/types/trip";
import { vegasZionTrip } from "./vegas-zion";

export const tripRegistry: Record<string, Trip> = {
  [vegasZionTrip.slug]: vegasZionTrip,
};
