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
      <section className="pt-44 pb-20 bg-[#43ACE0] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4A261]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-4">
              <Camera className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>Virtual Practice Tour</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-4">
              ILLINOIS DENTISTRY <span className="text-[#F4A261]">OFFICE TOUR</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
              Explore our modern, state-of-the-art dental facility in Dallas, TX. Built from the ground up for maximum patient comfort, advanced diagnostics, and hospital-grade sterilization.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule In-Person Visit</span>
              </Link>
              <a
                href="tel:4698091919"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F4A261]" />
                <span>469-809-1919</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facility Highlights Bar */}
      <section className="py-12 bg-[#5FCAEF]/10 border-b border-[#43ACE0]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-[#F4A261] shrink-0" />
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#000000]">
                  Modern Reception Lounge
                </div>
                <div className="text-[11px] text-[#000000]/70">Relaxing & Kid-Friendly</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-[#43ACE0] shrink-0" />
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#000000]">
                  Digital Low-Radiation X-Rays
                </div>
                <div className="text-[11px] text-[#000000]/70">90% Less Radiation Exposure</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-[#F4A261] shrink-0" />
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#000000]">
                  Hospital-Grade Sterilization
                </div>
                <div className="text-[11px] text-[#000000]/70">Exceeds CDC & OSHA Guidelines</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-[#43ACE0] shrink-0" />
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#000000]">
                  Ergonomic Treatment Chairs
                </div>
                <div className="text-[11px] text-[#000000]/70">Overhead Entertainment Screens</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        {/* Category Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-md flex-wrap justify-center gap-1">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#43ACE0] text-[#FFFFFF] shadow-md"
                  : "text-[#000000] hover:text-[#43ACE0]"
              }`}
            >
              All Facility Photos ({officePhotos.length})
            </button>

            <button
              onClick={() => setSelectedCategory("reception")}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                selectedCategory === "reception"
                  ? "bg-[#43ACE0] text-[#FFFFFF] shadow-md"
                  : "text-[#000000] hover:text-[#43ACE0]"
              }`}
            >
              Reception & Lounge
            </button>

            <button
              onClick={() => setSelectedCategory("operatory")}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                selectedCategory === "operatory"
                  ? "bg-[#43ACE0] text-[#FFFFFF] shadow-md"
                  : "text-[#000000] hover:text-[#43ACE0]"
              }`}
            >
              Treatment Suites
            </button>

            <button
              onClick={() => setSelectedCategory("technology")}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                selectedCategory === "technology"
                  ? "bg-[#43ACE0] text-[#FFFFFF] shadow-md"
                  : "text-[#000000] hover:text-[#43ACE0]"
              }`}
            >
              Technology & Sterilization
            </button>
          </div>
        </div>

        {/* 7 Photos Grid Layout with Ambient Drop Shadow & Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
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
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#43ACE0]/20 via-[#5FCAEF]/25 to-[#F4A261]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div
                onClick={() => setActivePhoto(photo)}
                className="bg-[#5FCAEF]/10 rounded-3xl overflow-hidden border border-[#43ACE0]/20 shadow-[0_20px_50px_rgba(67,172,224,0.2)] hover:shadow-[0_25px_60px_rgba(67,172,224,0.3)] transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
              >
                <div>
                  {/* Photo Image Container */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#43ACE0]/10">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                    {/* Hover Lightbox Icon Pill */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[11px] font-extrabold text-[#43ACE0] flex items-center gap-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5 text-[#F4A261]" />
                      <span>View Larger</span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6 text-[#FFFFFF]">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold">
                        {photo.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6">
                    <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed font-normal">
                      {photo.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#43ACE0]/15 mt-2 flex items-center justify-between text-xs font-bold text-[#43ACE0]">
                  <span>Illinois Family Dentistry Dallas</span>
                  <span className="text-[#F4A261] group-hover:translate-x-1 transition-transform">
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
            className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFFFF] rounded-3xl overflow-hidden max-w-4xl w-full border border-[#43ACE0]/30 shadow-2xl relative"
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
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#000000]/60 text-[#FFFFFF] hover:bg-[#F4A261] transition-colors flex items-center justify-center font-bold text-lg cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-[#000000] mb-2">
                  {activePhoto.title}
                </h3>
                <p className="font-sans text-sm text-[#000000] leading-relaxed font-normal mb-4">
                  {activePhoto.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-[#000000] pt-4 border-t border-[#43ACE0]/15">
                  <MapPin className="w-4 h-4 text-[#F4A261]" />
                  <span>2300 W Illinois Ave, Dallas, TX 75224</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Booking Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65 }}
          className="mt-20 bg-[#43ACE0] rounded-3xl p-8 sm:p-12 text-[#FFFFFF] shadow-2xl text-center relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-xs font-bold uppercase tracking-widest text-[#F4A261] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#F4A261]" />
            <span>Visit Us In Person in Dallas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3 text-[#FFFFFF]">
            Ready to See Our Office in Person?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FFFFFF]/90 max-w-xl mx-auto mb-8 font-normal">
            Call our Dallas clinic at 469-809-1919 or schedule your family&apos;s checkup online today!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-lg"
            >
              Book Appointment Online
            </Link>
            <a
              href="tel:4698091919"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
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
