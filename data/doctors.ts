export interface Doctor {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  education: string;
  image: string;
  quote: string;
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-singh",
    name: "Dr. Rajvir Singh",
    role: "Lead General & Cosmetic Dentist",
    bio: "Dr. Rajvir Singh is dedicated to delivering personalized, compassionate dental care to families in Dallas. With expertise across restorative dentistry, cosmetic smile transformations, and gentle preventive care, Dr. Singh focuses on building trust and long-lasting patient relationships.",
    specialties: ["Cosmetic Dentistry", "Full Mouth Restorations", "Invisalign®", "Preventive Care"],
    education: "Doctor of Dental Surgery (DDS)",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=85&w=800",
    quote: "Every smile has a story. Our goal is to make sure yours is healthy, confident, and filled with comfort.",
  },
  {
    id: "dr-pham",
    name: "Dr. Tiffany Pham",
    role: "Family & Pediatric Dentist",
    bio: "Dr. Tiffany Pham brings a gentle touch and warm enthusiasm to family dentistry. She prioritizes patient comfort, taking time to explain treatments clearly and ensuring children and adults alike feel completely at ease during their visits.",
    specialties: ["Children's Dentistry", "Preventive Care", "Emergency Relief", "Teeth Whitening"],
    education: "Doctor of Dental Surgery (DDS)",
    image: "https://images.unsplash.com/photo-1594824813566-78853c8ec532?auto=format&fit=crop&q=85&w=800",
    quote: "Dentistry should feel welcoming. We craft an environment where fear melts away from the moment you step in.",
  },
  {
    id: "dr-mcbride",
    name: "Dr. Alexandra McBride",
    role: "Restorative & Implant Specialist",
    bio: "Dr. Alexandra McBride specializes in complex restorative procedures, implant restorations, and root canal therapy. Her detail-oriented clinical approach ensures precision, aesthetics, and optimal long-term oral health.",
    specialties: ["Implant Restorations", "Root Canal Therapy", "Porcelain Crowns", "Periodontal Health"],
    education: "Doctor of Dental Medicine (DMD)",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=85&w=800",
    quote: "Using state-of-the-art technology alongside personal attention allows us to achieve remarkable, life-changing outcomes.",
  },
];
