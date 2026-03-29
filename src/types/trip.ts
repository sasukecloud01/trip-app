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
  title: string;
  description?: string;
  type?: ActivityType;
  locationName?: string;
  links?: TripLink[];
  note?: string;
}

export interface TripDay {
  dayNumber: number;
  dateLabel: string;
  title: string;
  hotel?: string;
  activities: TripActivity[];
  notes?: string[];
}

export interface Trip {
  slug: string;
  title: string;
  subtitle?: string;
  dateRange: string;
  summary?: string;
  coverImage?: string;
  days: TripDay[];
  quickNotes?: string[];
}