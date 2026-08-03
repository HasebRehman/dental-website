export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  accent: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "general",
    number: "01",
    title: "General & Preventive Care",
    subtitle: "Routine Checkups, Cleanings & Protection",
    description:
      "A healthy smile starts with consistent care. We offer gentle cleanings, comprehensive oral exams, digital X-rays, custom mouthguards, and early cavity detection designed to keep your natural teeth healthy for life.",
    features: [
      "Comprehensive Dental Exams & Cleanings",
      "Digital X-Rays & Oral Cancer Screenings",
      "Nightguards & Sports Mouthguards",
      "Fluoride & Sealant Treatments",
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=85&w=1000",
    accent: "#3B82F6",
  },
  {
    id: "cosmetic",
    number: "02",
    title: "Cosmetic Dentistry",
    subtitle: "Teeth Whitening, Veneers & Invisalign",
    description:
      "Transform your confidence with bespoke aesthetic dental treatments. From professional in-office whitening to custom porcelain veneers and invisible clear aligners, we craft natural, radiant smiles.",
    features: [
      "Professional Teeth Whitening",
      "Custom Porcelain Veneers",
      "Invisalign® Clear Aligners",
      "Full Smile Makeover Design",
    ],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=85&w=1000",
    accent: "#0D9488",
  },
  {
    id: "children",
    number: "03",
    title: "Children's Dentistry",
    subtitle: "Gentle Care for Kids & Teenagers",
    description:
      "We build positive dental habits for a lifetime. Our warm, compassionate team makes every child feel safe, comfortable, and excited about taking care of their teeth in a fun environment.",
    features: [
      "Pediatric Checkups & Gently Cleanings",
      "Cavity Prevention & Dental Sealants",
      "Space Maintainers & Early Evaluation",
      "Comfort-First Kids Dental Visits",
    ],
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=85&w=1000",
    accent: "#F59E0B",
  },
  {
    id: "emergency",
    number: "04",
    title: "Same-Day Emergency Care",
    subtitle: "Immediate Relief When You Need It Most",
    description:
      "Dental emergencies happen unexpectedly. Whether you have severe tooth pain, a chipped tooth, broken restoration, or a knocked-out tooth, we reserve urgent appointment slots to get you out of pain fast.",
    features: [
      "Same-Day Emergency Slots Available",
      "Immediate Tooth Pain Relief",
      "Chipped & Broken Tooth Repair",
      "Sedation Options for Nervous Patients",
    ],
    image: "https://images.unsplash.com/photo-1600170311833-c2cf5380488a?auto=format&fit=crop&q=85&w=1000",
    accent: "#EF4444",
  },
  {
    id: "restorative",
    number: "05",
    title: "Restorative Dentistry",
    subtitle: "Crowns, Bridges & Dental Implants",
    description:
      "Reclaim full function and beauty. Our restorative treatments rebuild damaged or missing teeth using durable, natural-looking tooth-colored materials designed for long-term comfort and chewing strength.",
    features: [
      "Tooth-Colored Fillings & Inlays",
      "Custom Porcelain Crowns & Bridges",
      "Dental Implant Restorations",
      "Root Canal Therapy & Periodontal Care",
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=85&w=1000",
    accent: "#6366F1",
  },
];
