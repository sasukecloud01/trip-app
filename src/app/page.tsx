import { getAllTrips } from "@/lib/trips";
import { TripCard } from "@/components/trip/trip-card";
import { HomeHeader } from "@/components/trip/home-header";

export default function HomePage() {
  const trips = getAllTrips();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-lg mx-auto px-4 pt-12 pb-12">

        {/* Top bar: title + language + theme */}
        <HomeHeader />

        {/* Trip cards */}
        <div className="flex flex-col gap-5">
          {trips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>

      </div>
    </main>
  );
}
