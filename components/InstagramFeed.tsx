"use client";

import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { images } from "@/data/images";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const instagramPhotos = [
  { id: "insta-1", src: images.gallery1, alt: "Patient smile consultation Dallas" },
  { id: "insta-2", src: images.gallery2, alt: "Gentle pediatric checkup cleanings" },
  { id: "insta-3", src: images.gallery3, alt: "Modern dental hygiene clinic room" },
  { id: "insta-4", src: images.gallery4, alt: "Tooth colored crowns and restorations" },
  { id: "insta-5", src: images.hero, alt: "Illinois Family Dentistry patient room" },
  { id: "insta-6", src: images.about1, alt: "Friendly Dallas dental staff" },
  { id: "insta-7", src: images.about2, alt: "Advanced low radiation digital X-ray" },
  { id: "insta-8", src: images.doctorRaj, alt: "Dr. Rajvir Singh Dallas Dentist" },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-28 bg-[#5FCAEF]/10 border-b border-[#43ACE0]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#43ACE0]/15 border border-[#43ACE0]/30 text-xs font-extrabold uppercase tracking-widest text-[#43ACE0] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>@illinoisdentistrydallas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#000000] font-bold tracking-tight">
              FOLLOW OUR DALLAS <span className="text-[#43ACE0]">SMILES</span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F4A261] transition-all duration-300 shadow-md w-fit"
          >
            <InstagramIcon className="w-4 h-4 text-[#FFFFFF]" />
            <span>Follow Us on Instagram</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4x2 Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {instagramPhotos.map((photo) => (
            <a
              key={photo.id}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden shadow-md group border border-[#43ACE0]/20 bg-[#FFFFFF]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#000000]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#43ACE0] transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                  <InstagramIcon className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
