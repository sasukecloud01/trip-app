import { Trip } from "@/types/trip";

export const vegasZionTrip: Trip = {
  slug: "vegas-zion",
  title: {
    en: "Las Vegas → Zion → Antelope Canyon",
    zh: "拉斯維加斯 → 錫安 → 羚羊峽谷",
  },
  displayName: {
    en: "Zion Trip",
    zh: "錫安之旅",
  },
  duration: "5 days · 4 nights",
  dateRange: "5-day trip",
  coverImage: "/images/trips/vegas-zion/cover.png",
  summary: {
    en: "Southwest road trip with Zion hikes, Antelope Canyon, and Vegas shows.",
    zh: "美國西南自駕，探索錫安健行、羚羊峽谷與拉斯維加斯精彩夜晚。",
  },

  days: [
    {
      dayNumber: 1,
      dateLabel: "Day 1",
      title: { en: "Las Vegas Arrival", zh: "抵達拉斯維加斯" },
      hotel: "Virgin Hotels Las Vegas",
      activities: [
        {
          time: "7:48 PM",
          title: { en: "Arrive at LAS", zh: "抵達 LAS 機場" },
          description: {
            en: "Arrive at Las Vegas Harry Reid International Airport.",
            zh: "抵達拉斯維加斯哈利·里德國際機場。",
          },
          type: "flight",
          locationName: "Las Vegas Harry Reid International Airport",
          bgImage: "/images/trips/vegas-zion/D1S1.png",
        },
        {
          time: "9:30 PM",
          title: { en: "Pick Up Rental Car", zh: "取車" },
          description: {
            en: "Take the shuttle to the rental center and pick up the car at Enterprise.",
            zh: "搭乘接駁車至租車中心，在 Enterprise 取車。",
          },
          type: "drive",
          locationName: "Enterprise Rent-A-Car Las Vegas Airport",
          bgImage: "/images/trips/vegas-zion/D1S2.png",
        },
        {
          time: "10:30 PM",
          title: { en: "Dinner Nearby", zh: "飯店附近晚餐" },
          description: {
            en: "Grab dinner at the hotel or somewhere nearby after check-in.",
            zh: "辦理入住後，在飯店或附近用餐。",
          },
          type: "food",
          locationName: "Virgin Hotels Las Vegas",
          bgImage: "/images/trips/vegas-zion/D1S3.png",
        },
      ],
    },

    {
      dayNumber: 2,
      dateLabel: "Day 2",
      title: { en: "Vegas → Zion", zh: "拉斯維加斯 → 錫安" },
      hotel: "Hyatt Place Springdale",
      activities: [
        {
          time: "9:30 AM",
          title: { en: "Drive to Zion", zh: "驅車前往錫安" },
          description: {
            en: "Drive from Las Vegas to Zion National Park. The trip takes about 2.5 to 3 hours.",
            zh: "從拉斯維加斯驅車前往錫安國家公園，車程約 2.5 至 3 小時。",
          },
          type: "drive",
          locationName: "Zion National Park",
          bgImage: "/images/trips/vegas-zion/D2S1.png",
        },
        {
          time: "1:00 PM",
          title: { en: "Check In", zh: "辦理入住" },
          description: {
            en: "Arrive in Springdale and check in at the hotel before heading into the park.",
            zh: "抵達 Springdale，辦理入住後再前往公園。",
          },
          type: "hotel",
          locationName: "Hyatt Place Springdale Zion National Park",
          bgImage: "/images/trips/vegas-zion/D2S2.png",
        },
        {
          time: "2:30 PM",
          title: { en: "Riverside Walk", zh: "河邊步道" },
          description: {
            en: "A relaxed scenic walk inside Zion and a good first stop after arrival.",
            zh: "錫安園內輕鬆的景觀步道，是抵達後的第一個好去處。",
          },
          type: "hike",
          locationName: "Riverside Walk Zion National Park",
          bgImage: "/images/trips/vegas-zion/D2S3.png",
        },
        {
          time: "4:30 PM",
          title: { en: "Canyon Overlook Trail", zh: "峽谷瞭望台步道" },
          description: {
            en: "A short and rewarding hike with one of the best panoramic views in Zion.",
            zh: "短程健行，可飽覽錫安最壯觀的全景之一。",
          },
          type: "hike",
          locationName: "Canyon Overlook Trail Zion National Park",
          bgImage: "/images/trips/vegas-zion/D2S4.png",
        },
        {
          time: "7:00 PM",
          title: { en: "Dinner in Springdale", zh: "Springdale 晚餐" },
          description: {
            en: "Have dinner in Springdale and rest after the hike.",
            zh: "在 Springdale 用餐，健行後好好休息。",
          },
          type: "food",
          locationName: "Springdale Utah Restaurants",
          bgImage: "/images/trips/vegas-zion/D2S5.png",
        },
      ],
    },

    {
      dayNumber: 3,
      dateLabel: "Day 3",
      title: {
        en: "Antelope Canyon & Horseshoe Bend",
        zh: "羚羊峽谷與馬蹄灣",
      },
      hotel: "Hyatt Place Springdale",
      activities: [
        {
          time: "11:00 AM",
          title: { en: "Drive to Page", zh: "驅車前往佩奇" },
          description: {
            en: "Leave Zion and drive toward Page for the canyon tour.",
            zh: "離開錫安，驅車前往佩奇參加峽谷導覽。",
          },
          type: "drive",
          locationName: "Page Arizona",
          bgImage: "/images/trips/vegas-zion/D3S1.png",
        },
        {
          time: "1:30 PM",
          title: { en: "Check In for Tour", zh: "到場報到" },
          description: {
            en: "Arrive and check in before the Lower Antelope Canyon tour begins.",
            zh: "抵達並完成報到，準備開始下羚羊峽谷導覽。",
          },
          type: "tour",
          locationName: "Dixies Lower Antelope Canyon Tours",
          bgImage: "/images/trips/vegas-zion/D3S2.png",
        },
        {
          time: "2:15 PM",
          title: { en: "Lower Antelope Canyon", zh: "下羚羊峽谷" },
          description: {
            en: "Join the guided canyon tour and explore the slot canyon.",
            zh: "參加導覽，探索壯麗的羚羊峽谷。",
          },
          type: "tour",
          locationName: "Lower Antelope Canyon",
          bgImage: "/images/trips/vegas-zion/D3S3.png",
        },
        {
          time: "4:00 PM",
          title: { en: "Late Lunch in Page", zh: "佩奇午餐" },
          description: {
            en: "Take a break and eat in Page before heading to sunset.",
            zh: "在佩奇休息用餐，為日落行程養精蓄銳。",
          },
          type: "food",
          locationName: "Page Arizona Restaurants",
          bgImage: "/images/trips/vegas-zion/D3S4.png",
        },
        {
          time: "6:15 PM",
          title: { en: "Horseshoe Bend Sunset", zh: "馬蹄灣日落" },
          description: {
            en: "Walk to the overlook and catch sunset before driving back to Zion.",
            zh: "步行至觀景台欣賞日落，再驅車返回錫安。",
          },
          type: "sightseeing",
          locationName: "Horseshoe Bend",
          bgImage: "/images/trips/vegas-zion/D3S5.png",
        },
      ],
    },

    {
      dayNumber: 4,
      dateLabel: "Day 4",
      title: { en: "Zion → Las Vegas", zh: "錫安 → 拉斯維加斯" },
      hotel: "The Palazzo at The Venetian",
      activities: [
        {
          time: "8:00 AM",
          title: { en: "Morning Hike Option", zh: "晨間健行" },
          description: {
            en: "Choose either Scout Lookout or Emerald Pools for a final Zion morning.",
            zh: "選擇瞭望台步道或翡翠池，在錫安度過美好的最後早晨。",
          },
          type: "hike",
          locationName: "Scout Lookout Zion National Park",
          bgImage: "/images/trips/vegas-zion/D4S1.png",
        },
        {
          time: "11:00 AM",
          title: { en: "Return to Hotel", zh: "返回飯店" },
          description: {
            en: "Head back, freshen up, and prepare to leave Zion.",
            zh: "返回飯店整理，準備離開錫安。",
          },
          type: "hotel",
          locationName: "Hyatt Place Springdale Zion National Park",
          bgImage: "/images/trips/vegas-zion/D4S2.png",
        },
        {
          time: "12:00 PM",
          title: { en: "Drive to Las Vegas", zh: "驅車返回拉斯維加斯" },
          description: {
            en: "Drive back to Las Vegas and check in at the hotel.",
            zh: "驅車返回拉斯維加斯並辦理入住。",
          },
          type: "drive",
          locationName: "The Palazzo at The Venetian Resort",
          bgImage: "/images/trips/vegas-zion/D4S3.png",
        },
        {
          time: "6:30 PM",
          title: { en: "Awakening Show & Strip Night", zh: "Awakening 秀與大道漫步" },
          description: {
            en: "Watch the show, then enjoy dinner and a walk along the Las Vegas Strip.",
            zh: "觀賞表演後，在拉斯維加斯大道享用晚餐並漫步。",
          },
          type: "show",
          locationName: "Awakening Theater at Wynn Las Vegas",
          bgImage: "/images/trips/vegas-zion/D4S4.png",
        },
      ],
    },

    {
      dayNumber: 5,
      dateLabel: "Day 5",
      title: { en: "Las Vegas → Madison", zh: "拉斯維加斯 → 麥迪遜" },
      activities: [
        {
          time: "6:30 AM",
          title: { en: "Return Rental Car", zh: "還車" },
          description: {
            en: "Return the car at the airport rental center before the flight.",
            zh: "在班機起飛前將車輛歸還至機場租車中心。",
          },
          type: "drive",
          locationName: "Enterprise Rent-A-Car Las Vegas Airport",
          bgImage: "/images/trips/vegas-zion/D5S1.png",
        },
        {
          time: "8:54 AM",
          title: { en: "Flight to Chicago", zh: "飛往芝加哥" },
          description: {
            en: "Depart from Las Vegas and fly to Chicago.",
            zh: "從拉斯維加斯起飛，前往芝加哥。",
          },
          type: "flight",
          locationName: "Las Vegas Harry Reid International Airport",
          bgImage: "/images/trips/vegas-zion/D5S2.png",
        },
        {
          time: "3:59 PM",
          title: { en: "Connection Flight", zh: "轉機" },
          description: {
            en: "Transfer in Chicago before the final flight home.",
            zh: "在芝加哥轉機，搭乘最後一段班機返家。",
          },
          type: "flight",
          locationName: "Chicago O'Hare International Airport",
          bgImage: "/images/trips/vegas-zion/D5S3.png",
        },
        {
          time: "5:12 PM",
          title: { en: "Arrive in Madison", zh: "抵達麥迪遜" },
          description: {
            en: "Arrive back in Madison and wrap up the trip.",
            zh: "返抵麥迪遜，圓滿結束此次旅程。",
          },
          type: "flight",
          locationName: "Madison Wisconsin",
          bgImage: "/images/trips/vegas-zion/D5S4.png",
        },
      ],
    },
  ],

  quickNotes: [
    {
      en: "Antelope Canyon requires early check-in",
      zh: "羚羊峽谷須提前到場報到",
    },
    {
      en: "Horseshoe Bend requires ~20 min walk from parking",
      zh: "馬蹄灣停車場距觀景台約 20 分鐘步行",
    },
    {
      en: "Time zone change when returning from Arizona to Utah",
      zh: "從亞利桑那返回猶他州有時差",
    },
  ],
};
