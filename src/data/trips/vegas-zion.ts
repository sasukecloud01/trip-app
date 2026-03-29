import { Trip } from "@/types/trip";

export const vegasZionTrip: Trip = {
  slug: "vegas-zion",
  title: "Las Vegas → Zion → Antelope Canyon",
  dateRange: "5-day trip",
  summary: "Southwest road trip with Zion hikes, Antelope Canyon, and Vegas shows.",

  days: [
    {
      dayNumber: 1,
      dateLabel: "Day 1",
      title: "Las Vegas Arrival",
      hotel: "Virgin Hotels Las Vegas",
      activities: [
        {
          time: "7:48 PM",
          title: "Arrive at LAS",
          type: "flight",
        },
        {
          time: "9:30 PM",
          title: "Pick up rental car (Enterprise LAS)",
          type: "drive",
        },
        {
          title: "Dinner (hotel or nearby)",
          type: "food",
        },
      ],
    },

    {
      dayNumber: 2,
      dateLabel: "Day 2",
      title: "Vegas → Zion",
      hotel: "Hyatt Place Springdale",
      activities: [
        {
          time: "09:30",
          title: "Drive to Zion",
          type: "drive",
        },
        {
          time: "13:00",
          title: "Arrive / check-in",
          type: "hotel",
        },
        {
          title: "Riverside Walk",
          type: "hike",
        },
        {
          title: "Canyon Overlook Trail",
          type: "hike",
        },
        {
          title: "Dinner in Springdale",
          type: "food",
        },
      ],
    },

    {
      dayNumber: 3,
      dateLabel: "Day 3",
      title: "Zion → Antelope Canyon → Page → Zion",
      hotel: "Hyatt Place Springdale",
      activities: [
        {
          time: "11:00",
          title: "Depart Zion",
          type: "drive",
        },
        {
          time: "2:15 PM",
          title: "Lower Antelope Canyon Tour",
          type: "tour",
        },
        {
          title: "Dinner in Page",
          type: "food",
        },
        {
          title: "Horseshoe Bend Sunset",
          type: "sightseeing",
        },
        {
          title: "Drive back to Zion",
          type: "drive",
        },
      ],
    },

    {
      dayNumber: 4,
      dateLabel: "Day 4",
      title: "Zion → Las Vegas",
      hotel: "The Palazzo at The Venetian",
      activities: [
        {
          title: "Morning hike (Emerald Pools / Scout Lookout)",
          type: "hike",
        },
        {
          time: "12:00",
          title: "Drive back to Las Vegas",
          type: "drive",
        },
        {
          time: "6:30 PM",
          title: "Awakening Show at Wynn",
          type: "show",
        },
        {
          title: "Bellagio fountains / dinner / Strip",
          type: "sightseeing",
        },
      ],
    },

    {
      dayNumber: 5,
      dateLabel: "Day 5",
      title: "Las Vegas → Madison",
      activities: [
        {
          time: "06:30",
          title: "Return rental car",
          type: "drive",
        },
        {
          time: "08:54",
          title: "Flight LAS → ORD",
          type: "flight",
        },
        {
          time: "15:59",
          title: "Flight ORD → MSN",
          type: "flight",
        },
      ],
    },
  ],

  quickNotes: [
    "Antelope Canyon requires early check-in",
    "Horseshoe Bend requires ~20 min walk from parking",
    "Time zone change when returning from Arizona to Utah",
  ],
};