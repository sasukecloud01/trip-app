import { getTripBySlug } from "@/lib/trips";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TripPage({ params }: PageProps) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);

  if (!trip) notFound();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{trip.title}</h1>
      <p>{trip.dateRange}</p>

      <hr />

      {trip.days.map((day) => (
        <div key={day.dayNumber} style={{ marginBottom: "20px" }}>
          <h2>
            {day.dateLabel} — {day.title}
          </h2>

          {day.hotel && <p>Hotel: {day.hotel}</p>}

          <ul>
            {day.activities.map((activity, index) => (
              <li key={index}>
                {activity.time && <strong>{activity.time} — </strong>}
                {activity.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
