export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "appointments" | "treatments";
}

export const faqsData: FAQItem[] = [
  // Appointments Tab
  {
    id: "faq-a1",
    category: "appointments",
    question: "How do I schedule an appointment at Illinois Family Dentistry?",
    answer:
      "Scheduling is simple! You can request an appointment online through our website, or call our Dallas office directly at 469-809-1919. Our friendly team will help you find a convenient date and time for your visit.",
  },
  {
    id: "faq-a2",
    category: "appointments",
    question: "Do you accept same-day emergency dental appointments?",
    answer:
      "Yes! We reserve dedicated daily appointment slots for same-day dental emergencies. If you are experiencing severe tooth pain, a chipped or knocked-out tooth, or swelling, call us immediately at 469-809-1919 for fast relief.",
  },
  {
    id: "faq-a3",
    category: "appointments",
    question: "What insurance plans do you accept?",
    answer:
      "We accept most preferred PPO dental insurance plans and file all claims on your behalf to maximize your benefits. Contact our office with your insurance information, and we’ll happily verify your coverage.",
  },
  {
    id: "faq-a4",
    category: "appointments",
    question: "Do you accept Medicaid and CHIP for children?",
    answer:
      "Yes! We are proud to accept Medicaid and CHIP coverage for eligible children and teenagers. We strive to make quality pediatric dental care accessible to all families across Dallas, Oak Cliff, Grand Prairie, and Duncanville.",
  },
  {
    id: "faq-a5",
    category: "appointments",
    question: "What financing options are available if I don't have dental insurance?",
    answer:
      "We believe budget concerns should never stand between you and a healthy smile. We offer low-interest and flexible monthly payment plans through CareCredit financing, as well as affordable cash pay options.",
  },
  {
    id: "faq-a6",
    category: "appointments",
    question: "What should I bring to my first dental visit?",
    answer:
      "Please bring a valid photo ID, your dental insurance card (if applicable), and your completed New Patient Forms. You can download and print the forms in English or Spanish directly from our website to save time!",
  },
  {
    id: "faq-a7",
    category: "appointments",
    question: "Are evening or Saturday appointments available?",
    answer:
      "Yes! We offer extended evening hours on Mondays through Fridays (up to 7:00 PM) as well as Saturday appointments (10:00 AM – 2:00 PM) for busy families and working adults.",
  },

  // Treatments Tab
  {
    id: "faq-t1",
    category: "treatments",
    question: "What is included in a routine dental exam and cleaning?",
    answer:
      "A routine preventive checkup includes gentle scaling and polishing to remove plaque and tartar, digital low-radiation X-rays, a comprehensive tooth and gum health assessment, an oral cancer screening, and personalized home care guidance.",
  },
  {
    id: "faq-t2",
    category: "treatments",
    question: "How often should my child visit the dentist?",
    answer:
      "The American Academy of Pediatric Dentistry recommends bringing your child for their first dental checkup by their first birthday or when their first tooth appears, and every 6 months thereafter for preventive cleanings and sealants.",
  },
  {
    id: "faq-t3",
    category: "treatments",
    question: "What is Invisalign® and how does it work?",
    answer:
      "Invisalign® uses a series of custom, clear, medical-grade aligners to gently shift your teeth into proper alignment without metal brackets or wires. Aligners are virtually invisible and removable for easy eating and brushing.",
  },
  {
    id: "faq-t4",
    category: "treatments",
    question: "Does root canal therapy hurt?",
    answer:
      "No! Modern root canal therapy is no more uncomfortable than receiving a routine filling. We use effective local anesthesia and gentle techniques to eliminate infection and relieve severe toothache pain immediately.",
  },
  {
    id: "faq-t5",
    category: "treatments",
    question: "What are tooth-colored composite fillings?",
    answer:
      "Tooth-colored fillings are made of a durable, aesthetic composite resin that matches the exact shade of your natural teeth. They bond directly to the tooth structure, restoring cavity damage seamlessly without silver or mercury.",
  },
  {
    id: "faq-t6",
    category: "treatments",
    question: "How long do custom dental crowns and bridges last?",
    answer:
      "With proper oral hygiene and regular dental checkups every 6 months, custom porcelain crowns and bridges can comfortably last 10 to 15 years or even longer.",
  },
  {
    id: "faq-t7",
    category: "treatments",
    question: "What teeth whitening options do you offer?",
    answer:
      "We offer custom professional take-home teeth whitening kits with custom-molded trays and high-potency whitening gel that safely lifts stubborn coffee, tea, and wine stains in the comfort of your home.",
  },
  {
    id: "faq-t8",
    category: "treatments",
    question: "What are my options for replacing missing teeth?",
    answer:
      "We offer complete custom dentures, partial dentures, fixed dental bridges, and dental implant restorations to restore your smile's natural appearance, chewing ability, and jawbone stability.",
  },
];
