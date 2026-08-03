export interface Doctor {
  id: string;
  name: string;
  subtitle: string;
  bio: string;
  fullStoryUrl: string;
  image: string;
  quote: string;
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-raj",
    name: "Dr. Raj",
    subtitle: "Serving Dallas, TX and the Surrounding Areas",
    bio: "Dr. Rajvir Singh grew up in Arlington, TX, and is a Dallas local. As a native Texan, he uses his love for dentistry to help patients in his community of all ages by ensuring everyone has a smile they can be proud of. He looks forward to seeing you at your next visit, so he can help make a difference in your dental needs!",
    fullStoryUrl: "/doctors/dr-rajvir-singh",
    image: "/img/Dr.-Raj-Family.jpg",
    quote: "Every smile has a story. Our goal is to make sure yours is healthy, confident, and filled with comfort.",
  },
  {
    id: "dr-pham",
    name: "Dr. Pham",
    subtitle: "Serving Dallas, TX and the Surrounding Areas",
    bio: "Dr. Tiffany Pham is a highly accomplished dentist known for her dedication to providing exceptional oral care. She earned her degree with honors from the UTHealth School of Dentistry, showcasing her commitment to academic excellence and proficiency in the field.",
    fullStoryUrl: "/doctors/dr-tiffany-pham",
    image: "/img/Dr.-Pham-Family.jpg",
    quote: "Dentistry should feel welcoming. We craft an environment where fear melts away from the moment you step in.",
  },
];
