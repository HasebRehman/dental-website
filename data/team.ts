export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  languages: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Maria Garcia",
    role: "Lead Registered Dental Hygienist (RDH)",
    bio: "Maria brings over 8 years of experience in preventive oral hygiene and periodontal therapy. She is passionate about educating patients on gentle daily oral care routines.",
    image: "/img/per-1.jpg",
    languages: "English & Español",
  },
  {
    id: "team-2",
    name: "Jessica Martinez",
    role: "Patient Care Coordinator & Front Desk Lead",
    bio: "Jessica ensures every patient receives a warm, welcoming check-in. She manages scheduling, emergency slots, and answer all patient questions with care.",
    image: "/img/per-2.jpg",
    languages: "English & Español",
  },
  {
    id: "team-3",
    name: "David Nguyen",
    role: "Expanded Function Dental Assistant (EFDA)",
    bio: "David works alongside Dr. Raj & Dr. Pham during procedures, ensuring patients are 100% comfortable, relaxed, and informed throughout their visit.",
    image: "/img/per-3.jpg",
    languages: "English & Vietnamese",
  },
  {
    id: "team-4",
    name: "Brenda Flores",
    role: "Office & Financial Manager",
    bio: "Brenda assists families with PPO insurance verification, Medicaid/CHIP paperwork, and CareCredit monthly payment arrangements with complete transparency.",
    image: "/img/per-4.jpg",
    languages: "English & Español",
  },
  {
    id: "team-5",
    name: "Sarah Jenkins",
    role: "Registered Dental Hygienist (RDH)",
    bio: "Specializing in gentle pediatric cleanings and preventive sealants, Sarah loves helping children build lifelong positive feelings toward visiting the dentist.",
    image: "/img/per-5.jpg",
    languages: "English",
  },
  {
    id: "team-6",
    name: "Carlos Ramos",
    role: "Certified Dental Assistant (CDA)",
    bio: "Carlos ensures our clinical rooms exceed hospital-grade sterilization standards and assists during emergency pain relief and restorative procedures.",
    image: "/img/per-6.jpg",
    languages: "English & Español",
  },
  {
    id: "team-7",
    name: "Ana Hernandez",
    role: "Insurance & Medicaid Coordinator",
    bio: "Ana works directly with insurance companies to file claims on behalf of our patients, helping maximize annual benefits and eliminate financial stress.",
    image: "/img/per-7.jpg",
    languages: "English & Español",
  },
  {
    id: "team-8",
    name: "Emily Rodriguez",
    role: "Dental Hygiene Specialist",
    bio: "Emily provides thorough diagnostic cleanings, fluoride treatments, and gentle deep cleanings to keep your gums healthy and your smile glowing.",
    image: "/img/per-8.jpg",
    languages: "English & Español",
  },
  {
    id: "team-9",
    name: "Michael Torres",
    role: "Clinical Operations & Treatment Coordinator",
    bio: "Michael helps guide patients through their personalized treatment plans, ensuring all questions regarding procedures and scheduling are thoroughly answered.",
    image: "/img/per-9.jpg",
    languages: "English & Español",
  },
];
