import { BiText } from "@/lib/i18n";

export type { BiText };

export type ActivityType =
  | "flight"
  | "drive"
  | "hotel"
  | "hike"
  | "tour"
  | "food"
  | "show"
  | "sightseeing"
  | "free-time"
  | "other";

export interface TripLink {
  label: string;
  url: string;
}

export interface TripActivity {
  time?: string;
  title: string | BiText;
  description?: string | BiText;
  type?: ActivityType;
  locationName?: string; // kept as plain string — used directly in Maps URLs
  links?: TripLink[];
  note?: string | BiText;
  /** Absolute public path for this activity's background image.
   *  e.g. "/images/trips/vegas-zion/day1-arrive-las.jpg"
   *  Falls back to a plain dark surface if omitted. */
  bgImage?: string;
}

export interface TripDay {
  dayNumber: number;
  dateLabel: string;
  title: string | BiText;
  hotel?: string; // proper noun, stays as string
  activities: TripActivity[];
  notes?: string[];
}

export interface Trip {
  slug: string;
  title: string | BiText;
  displayName?: string | BiText;
  duration?: string;
  subtitle?: string | BiText;
  dateRange: string;
  summary?: string | BiText;
  coverImage?: string;
  days: TripDay[];
  quickNotes?: (string | BiText)[];
}
