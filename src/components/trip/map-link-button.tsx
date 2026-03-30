import { MapPin } from "lucide-react";

interface MapLinkButtonProps {
  locationName: string;
}

export function MapLinkButton({ locationName }: MapLinkButtonProps) {
  const url = `https://maps.google.com/?q=${encodeURIComponent(locationName)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 rounded-xl bg-stone-100 text-sm font-medium text-stone-700 touch-manipulation active:bg-stone-200 transition-colors"
      aria-label={`Open ${locationName} in Maps`}
    >
      <MapPin className="h-4 w-4 text-stone-500 shrink-0" />
      <span>{locationName}</span>
    </a>
  );
}
