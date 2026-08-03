export interface PracticeInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    plaza: string;
    city: string;
    state: string;
    zip: string;
    full: string;
    mapUrl: string;
  };
  hours: {
    day: string;
    time: string;
  }[];
  badges: string[];
}

export const siteData: PracticeInfo = {
  name: "Illinois Family Dentistry",
  tagline: "Modern dentistry. Personal care. Built around your family.",
  phone: "469-809-1919",
  phoneRaw: "+14698091919",
  email: "info@illinoisdentistrydallas.com",
  address: {
    street: "2300 W Illinois Ave",
    plaza: "Illinois and Hampton Plaza (Next to El Rancho)",
    city: "Dallas",
    state: "TX",
    zip: "75224",
    full: "2300 W Illinois Ave, Dallas, TX 75224",
    mapUrl: "https://maps.google.com/?q=2300+W+Illinois+Ave,+Dallas,+TX+75224",
  },
  hours: [
    { day: "Monday", time: "1:00 PM – 7:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
    { day: "Thursday", time: "10:00 AM – 7:00 PM" },
    { day: "Friday", time: "10:00 AM – 7:00 PM" },
    { day: "Saturday", time: "10:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  badges: [
    "FAMILY DENTISTRY",
    "5★ PATIENT CARE",
    "ALL AGES WELCOME",
    "EVENING & SATURDAY CARE",
    "HABLAMOS ESPAÑOL",
    "MOST INSURANCE ACCEPTED",
    "SAME-DAY EMERGENCY CARE",
  ],
};
