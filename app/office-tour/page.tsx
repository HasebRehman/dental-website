"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Phone, ShieldCheck, MapPin, CheckCircle2, Eye, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface TourPhoto {
  id: string;
  title: string;
  category: "reception" | "operatory" | "technology";
  description: string;
  image: string;
}

const officePhotos: TourPhoto[] = [
  {
    id: "off-1",
    title: "Main Reception & Welcome Desk",
    category: "reception",
    description: "Our warm, bilingual reception staff welcomes you with instant check-in and friendly smiles.",
    image: "/img/off-1.jpg",
  },
  {
    id: "off-2",
    title: "Patient Lounge & Refreshment Area",
    category: "reception",
    description: "Relax in our comfortable, spacious seating area designed to make children and adults feel at ease.",
    image: "/img/off-2.jpg",
  },
  {
    id: "off-3",
    title: "Advanced Operatory Suite 1",
    category: "operatory",
    description: "Ergonomic treatment chairs equipped with soft padding and overhead monitors for relaxing visits.",
    image: "/img/off-3.jpg",
  },
  {
    id: "off-4",
    title: "Digital Diagnostic X-Ray Suite",
    category: "technology",
    description: "State-of-the-art low-radiation digital imaging provides instant, crystal-clear diagnostic views.",
    image: "/img/off-4.jpg",
  },
  {
    id: "off-5",
    title: "Cosmetic & Invisalign® Suite",
    category: "operatory",
    description: "Dedicated clinical room for clear aligner simulations, teeth whitening, and cosmetic enhancements.",
    image: "/img/off-5.jpg",
  },
  {
    id: "off-6",
    title: "Hospital-Grade Sterilization Center",
    category: "technology",
    description: "Strict multi-step CDC & OSHA sterilization procedures ensuring 100% hygiene for every instrument.",
    image: "/img/off-6.jpg",
  },
  {
    id: "off-7",
    title: "Private Patient Consultation Room",
    category: "reception",
    description: "Private room for discussing treatment plans, insurance benefits, and CareCredit monthly options.",
    image: "/img/off-7.jpg",
  },
];

export default function OfficeTourPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<TourPhoto | null>(null);

  const filteredPhotos = officePhotos.filter((photo) => {
    if (selectedCategory === "all") return true;
    return photo.category === selectedCategory;
  });

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] relative">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-32 sm:pt-44 pb-10 sm:pb-20 bg-[#1B69B6] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            {/* Top Pill Badge (Sleek & Compact on Mobile) */}
            <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[9px] sm:text-xs font-extrabold uppercase tracking-wider text-[#FFFFFF] mb-3 sm:mb-4 w-fit mx-auto">
              <Camera className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#FF7A00] shrink-0" />
              <span>Virtual Practice Tour</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FFFFFF] mb-3 sm:mb-4">
              ILLINOIS DENTISTRY <span className="text-[#93C5FD]">OFFICE TOUR</span>
            </h1>

            <p className="font-sans text-xs sm:text-base md:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-5 sm:mb-8">
              Explore our modern, state-of-the-art dental facility in Dallas, TX. Built from the ground up for maximum patient comfort, advanced diagnostics, and hospital-grade sterilization.
            </p>

            {/* Compact Responsive Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-[220px] sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Schedule Visit</span>
              </Link>
              <a
                href="tel:4698091919"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#93C5FD]" />
                <span>469-809-1919</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facility Highlights Bar (2 Per Row on Mobile) */}
      <section className="py-6 sm:py-12 bg-[#F0F6FF] border-b border-[#1B69B6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 font-sans">
            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border border-[#1B69B6]/20 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#FF7A00] shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-tight sm:tracking-wider text-[#0B2545] leading-tight truncate">
                  Modern Reception
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#64748B] leading-tight truncate">Relaxing & Kid-Friendly</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border border-[#1B69B6]/20 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#1B69B6] shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-tight sm:tracking-wider text-[#0B2545] leading-tight truncate">
                  Low-Radiation X-Rays
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#64748B] leading-tight truncate">90% Less Radiation</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border border-[#1B69B6]/20 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#FF7A00] shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-tight sm:tracking-wider text-[#0B2545] leading-tight truncate">
                  Sterilization Center
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#64748B] leading-tight truncate">Exceeds CDC & OSHA</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border border-[#1B69B6]/20 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#1B69B6] shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-tight sm:tracking-wider text-[#0B2545] leading-tight truncate">
                  Ergonomic Chairs
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#64748B] leading-tight truncate">Overhead Entertainment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-8 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Category Filter Controls (Scrollable 1-Row Tabs on Mobile) */}
        <div className="w-full overflow-x-auto no-scrollbar scrollbar-none pb-2 mb-6 sm:mb-12 flex justify-start sm:justify-center">
          <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm shrink-0 whitespace-nowrap gap-1">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-[#1B69B6] text-[#FFFFFF] shadow-sm"
                  : "text-[#334155] hover:text-[#1B69B6]"
              }`}
            >
              All Photos ({officePhotos.length})
            </button>

            <button
              onClick={() => setSelectedCategory("reception")}
              className={`px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 whitespace-nowrap ${
                selectedCategory === "reception"
                  ? "bg-[#1B69B6] text-[#FFFFFF] shadow-sm"
                  : "text-[#334155] hover:text-[#1B69B6]"
              }`}
            >
              Reception & Lounge
            </button>

            <button
              onClick={() => setSelectedCategory("operatory")}
              className={`px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 whitespace-nowrap ${
                selectedCategory === "operatory"
                  ? "bg-[#1B69B6] text-[#FFFFFF] shadow-sm"
                  : "text-[#334155] hover:text-[#1B69B6]"
              }`}
            >
              Treatment Suites
            </button>

            <button
              onClick={() => setSelectedCategory("technology")}
              className={`px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 whitespace-nowrap ${
                selectedCategory === "technology"
                  ? "bg-[#1B69B6] text-[#FFFFFF] shadow-sm"
                  : "text-[#334155] hover:text-[#1B69B6]"
              }`}
            >
              Technology & Hygiene
            </button>
          </div>
        </div>

        {/* 7 Photos Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
              className="relative group"
            >
              {/* Backlight Ambient Glow Halo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#1B69B6]/15 via-[#93C5FD]/20 to-[#FF7A00]/15 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div
                onClick={() => setActivePhoto(photo)}
                className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-md hover:shadow-xl hover:border-[#1B69B6]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
              >
                <div>
                  {/* Photo Image Container */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#1B69B6]/10">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                    {/* Hover Lightbox Icon Pill */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[10px] sm:text-[11px] font-extrabold text-[#1B69B6] flex items-center gap-1 shadow-xs">
                      <Eye className="w-3 h-3 text-[#FF7A00]" />
                      <span>View Larger</span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-[#FFFFFF]">
                      <h3 className="font-sans text-lg sm:text-2xl font-black">
                        {photo.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-4 sm:p-6">
                    <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {photo.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 pt-0 border-t border-[#E2E8F0] mt-2 flex items-center justify-between text-xs font-bold text-[#1B69B6]">
                  <span>Illinois Family Dentistry Dallas</span>
                  <span className="text-[#FF7A00] font-extrabold group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox Preview */}
        {activePhoto && (
          <div
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl overflow-hidden max-w-4xl w-full border border-[#43ACE0]/30 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <div className="relative aspect-[16/10] w-full bg-[#000000]">
                <Image
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                />
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#000000]/60 text-[#FFFFFF] hover:bg-[#FF7A00] transition-colors flex items-center justify-center font-bold text-sm sm:text-lg cursor-pointer z-10"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#000000] mb-2">
                  {activePhoto.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed font-normal mb-4">
                  {activePhoto.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-[#000000] pt-4 border-t border-[#43ACE0]/15">
                  <MapPin className="w-4 h-4 text-[#FF7A00]" />
                  <span>2300 W Illinois Ave, Dallas, TX 75224</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Booking Banner (Super Sleek & Compact on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65 }}
          className="mt-8 sm:mt-20 bg-gradient-to-r from-[#0B2545] via-[#1B69B6] to-[#0B2545] rounded-2xl sm:rounded-3xl p-4 sm:p-10 text-[#FFFFFF] shadow-xl text-center relative overflow-hidden border border-[#1B69B6]/40"
        >
          <h2 className="font-sans text-base sm:text-3xl lg:text-4xl font-black mb-1.5 sm:mb-2 text-[#FFFFFF] tracking-tight">
            Ready to See Our Office <span className="text-[#93C5FD]">in Person?</span>
          </h2>
          <p className="font-sans text-[11px] sm:text-base text-[#FFFFFF]/90 max-w-md sm:max-w-xl mx-auto mb-4 sm:mb-8 font-normal leading-relaxed">
            Call our Dallas clinic at 469-809-1919 or schedule your family&apos;s checkup online today!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-[200px] sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-md"
            >
              Book Appointment Online
            </Link>
            <a
              href="tel:4698091919"
              className="w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-3.5 rounded-full bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 text-[#FFFFFF] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors"
            >
              Call 469-809-1919
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
