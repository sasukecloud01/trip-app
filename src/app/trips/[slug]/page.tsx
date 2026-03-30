import { getTripBySlug } from "@/lib/trips";
import { notFound } from "next/navigation";
import { TripNav } from "@/components/trip/trip-nav";
import { TripView } from "@/components/trip/trip-view";
import { t } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TripPage({ params }: PageProps) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);

  if (!trip) notFound();

  return (
    <main className="h-dvh flex flex-col bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="relative z-10 shrink-0 w-full max-w-lg mx-auto px-6 pt-12">
        <TripNav title={t(trip.displayName ?? trip.title, "en")} />
      </div>
      <TripView trip={trip} />
    </main>
  );
}
