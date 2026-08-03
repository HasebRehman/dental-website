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
    id: "exams-cleanings",
    number: "01",
    title: "Dental Exams & Cleanings",
    subtitle: "Routine Preventive Care & Oral Health Checkups",
    description:
      "Routine dental exams and cleanings are the foundation of preventive dental care, designed to maintain healthy, beautiful smiles for life!",
    features: [
      "Gentle Dental Cleanings & Polishing",
      "Comprehensive Oral Exams & Digital X-Rays",
      "Oral Cancer & Cavity Screenings",
      "Fluoride & Preventive Sealants",
    ],
    image: "/img/img-1.jpg",
    accent: "#00A8E8",
  },
  {
    id: "childrens-dentistry",
    number: "02",
    title: "Children's Dentistry",
    subtitle: "Kid-Centered Care & Positive Experiences",
    description:
      "Our team is committed to providing kid-centered care and positive dental experiences to lay the foundation for a lifetime of healthy, happy smiles!",
    features: [
      "Pediatric Checkups & Kid-Friendly Cleanings",
      "Cavity Prevention & Protective Sealants",
      "Growth & Alignment Monitoring",
      "Stress-Free Visits for Anxious Kids",
    ],
    image: "/img/img-2.jpg",
    accent: "#FF6B00",
  },
  {
    id: "periodontal-therapy",
    number: "03",
    title: "Periodontal Therapy",
    subtitle: "Prevention & Treatment of Gum Disease",
    description:
      "We are dedicated to the prevention, treatment, and management of periodontal disease to prevent its devastating oral and overall health impacts.",
    features: [
      "Deep Scaling & Root Planing",
      "Gum Infection Treatment",
      "Periodontal Maintenance",
      "Laser & Gentle Gum Therapy",
    ],
    image: "/img/img-3.jpg",
    accent: "#00A8E8",
  },
  {
    id: "tooth-colored-fillings",
    number: "04",
    title: "Tooth-Colored Fillings",
    subtitle: "Aesthetic Composite Restorations",
    description:
      "Tooth-colored fillings are becoming increasingly popular as an aesthetic alternative to traditional silver fillings, delivering seamless smiles.",
    features: [
      "Natural-Looking Composite Resin",
      "Seamless Aesthetic Matching",
      "Durable & Mercury-Free",
      "Preserves Healthy Tooth Structure",
    ],
    image: "/img/img-4.jpg",
    accent: "#0F2C59",
  },
  {
    id: "crowns-bridges",
    number: "05",
    title: "Dental Crowns & Bridges",
    subtitle: "Restoring Health, Function & Aesthetics",
    description:
      "If you have a damaged or missing tooth, you may require a dental crown or bridge to restore your smile’s health, function, and aesthetics.",
    features: [
      "Custom Porcelain Crowns",
      "Fixed Restorative Bridges",
      "Full Chewing Function Restoration",
      "Long-Lasting Aesthetic Protection",
    ],
    image: "/img/img-1.jpg",
    accent: "#FF6B00",
  },
  {
    id: "teeth-whitening",
    number: "06",
    title: "Teeth Whitening",
    subtitle: "Custom Take-Home Whitening Kits",
    description:
      "We are pleased to offer custom teeth whitening treatments in the comfort of your home to reveal a beautifully bright and dazzling smile!",
    features: [
      "Custom-Fitted Whitening Trays",
      "Professional-Grade Gel Formulation",
      "Safe, Effective & Comfortable",
      "Long-Lasting Stain Removal",
    ],
    image: "/img/img-3.jpg",
    accent: "#00A8E8",
  },
  {
    id: "root-canal-therapy",
    number: "07",
    title: "Root Canal Therapy",
    subtitle: "Relieving Pain & Saving Natural Teeth",
    description:
      "Root canal therapy is a relatively comfortable procedure that treats tooth pulp infection, relieving your pain and saving the affected tooth.",
    features: [
      "Gentle Pain Relief Protocol",
      "Single-Visit Root Canal Treatment",
      "Infection Control & Sealing",
      "Saves Your Natural Tooth",
    ],
    image: "/img/img-2.jpg",
    accent: "#0F2C59",
  },
  {
    id: "invisalign",
    number: "08",
    title: "Invisalign® Clear Aligners",
    subtitle: "Discreet Orthodontic Straightening",
    description:
      "Invisalign by Align Technology is a clear alternative to traditional metal braces that gently and discreetly delivers beautiful, straight smiles.",
    features: [
      "Virtually Invisible Aligners",
      "Removable for Eating & Brushing",
      "No Metal Brackets or Wires",
      "Custom Digital Treatment Plan",
    ],
    image: "/img/img-4.jpg",
    accent: "#FF6B00",
  },
  {
    id: "emergencies",
    number: "09",
    title: "Dental Emergencies",
    subtitle: "Same-Day, Late & Saturday Relief",
    description:
      "We are pleased to offer same-day, late, and even Saturday emergency appointments to provide the prompt urgent care and relief you need.",
    features: [
      "Same-Day Emergency Slots",
      "Saturday & Evening Availability",
      "Immediate Toothache Relief",
      "Urgent Care Protocol",
    ],
    image: "/img/img-1.jpg",
    accent: "#FF6B00",
  },
  {
    id: "missing-teeth",
    number: "10",
    title: "Missing Teeth Replacements",
    subtitle: "Dentures, Partials & Implant Restorations",
    description:
      "We offer complete dentures, partials, and a range of dental implant restorations, to get you back in a beautiful, healthy, and functional smile!",
    features: [
      "Complete & Partial Dentures",
      "Dental Implant Restorations",
      "Functional Chewing Ability",
      "Natural Smile Enhancement",
    ],
    image: "/img/img-3.jpg",
    accent: "#00A8E8",
  },
];
