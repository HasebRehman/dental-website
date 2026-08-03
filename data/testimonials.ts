export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  quote: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Maria G.",
    location: "Dallas, TX",
    rating: 5,
    treatment: "Family Care & Whitening",
    quote: "Illinois Family Dentistry is by far the best dental practice in Dallas! The staff speaks Spanish, the clinic is immaculate, and Dr. Singh took the time to explain everything thoroughly. My kids actually look forward to their checkups now!",
    verified: true,
  },
  {
    id: "t2",
    name: "Robert M.",
    location: "Oak Cliff, Dallas",
    rating: 5,
    treatment: "Same-Day Emergency & Crown",
    quote: "I called in pain on a Thursday afternoon and they got me in right away. Dr. Pham was incredibly gentle and relieved my tooth pain immediately. Highly professional, transparent about costs, and very caring.",
    verified: true,
  },
  {
    id: "t3",
    name: "Elena R.",
    location: "Dallas, TX",
    rating: 5,
    treatment: "Invisalign & Veneers",
    quote: "I was always self-conscious about my smile until I visited Illinois Family Dentistry. Their cosmetic team designed a treatment plan that transformed my confidence completely. The results exceeded all my expectations!",
    verified: true,
  },
  {
    id: "t4",
    name: "David K.",
    location: "Grand Prairie, TX",
    rating: 5,
    treatment: "Preventive Care & Cleaning",
    quote: "Clean, luxury feel with true family-oriented care. They accepted my PPO insurance and made billing completely hassle-free. Evening hours are so convenient after work!",
    verified: true,
  },
  {
    id: "t5",
    name: "Sofia L.",
    location: "Dallas, TX",
    rating: 5,
    treatment: "Pediatric Dentistry & Checkup",
    quote: "Finding a dentist who takes Medicaid and provides top-tier care for children was a dream come true. The office is warm and my kids love coming here!",
    verified: true,
  },
  {
    id: "t6",
    name: "Carlos V.",
    location: "Duncanville, TX",
    rating: 5,
    treatment: "Crowns & Restorations",
    quote: "Exceptional service! The entire team is attentive and bilingual. I received a custom porcelain crown that matches my natural teeth perfectly.",
    verified: true,
  },
];
