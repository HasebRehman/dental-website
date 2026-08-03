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
  announcements: string[];
  badges: string[];
  pdfForms: {
    english: string;
    spanish: string;
  };
}

export const siteData: PracticeInfo = {
  name: "Illinois Family Dentistry",
  tagline: "Smiles You Can Trust! High-Quality Family Dentistry in Dallas, TX.",
  phone: "469-809-1919",
  phoneRaw: "+14698091919",
  email: "info@illinoisdentistrydallas.com",
  address: {
    street: "2300 W Illinois Ave",
    plaza: "Illinois and Hampton Plaza (Next to El Rancho Supermercado)",
    city: "Dallas",
    state: "TX",
    zip: "75224",
    full: "2300 W Illinois Ave, Dallas, TX 75224",
    mapUrl: "https://goo.gl/maps/qf3d9Rc87jkN5s8b6",
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
  announcements: [
    "Insurance / Medicaid / CHIP",
    "Special Offers",
    "Same-Day Emergencies",
    "Evening & Weekend Appointments",
    "Hablamos Español",
  ],
  badges: [
    "SMILES YOU CAN TRUST",
    "FAMILY DENTISTRY DALLAS",
    "ALL AGES WELCOME",
    "EVENING & SATURDAY SLOTS",
    "HABLAMOS ESPAÑOL",
    "MOST INSURANCE ACCEPTED",
    "SAME-DAY EMERGENCY RELIEF",
  ],
  pdfForms: {
    english: "https://illinoisdentistrydallas.com/wp-content/uploads/2023/10/IFD-New-Patient-Forms-English.pdf",
    spanish: "https://illinoisdentistrydallas.com/wp-content/uploads/2024/02/Illinois-Family-Dentistry-New-Patient-Form-Spanish.pdf",
  },
};
