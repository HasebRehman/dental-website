"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Phone, Calendar, Star, Clock, MapPin } from "lucide-react";
import { images } from "@/data/images";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] lg:min-h-[92vh] pt-48 sm:pt-52 md:pt-56 lg:pt-60 pb-16 md:pb-24 flex flex-col justify-center bg-gradient-to-b from-[#5FCAEF]/15 via-[#FFFFFF] to-[#FFFFFF] overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[350px] bg-[#43ACE0]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-[350px] md:w-[500px] h-[400px] bg-[#F4A261]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Background Teeth Icon Watermark */}
      <div className="absolute top-36 right-8 w-72 h-72 opacity-5 pointer-events-none select-none hidden lg:block">
        <Image src={images.teethIcon} alt="Teeth Icon Watermark" fill className="object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Headline */}
            <h1 className="leading-[0.95] tracking-tight mb-6 font-bold">
              <span className="block text-[#43ACE0] font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight drop-shadow-sm">
                DENTISTRY YOU
              </span>
              <span className="block text-[#F4A261] font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl capitalize font-normal leading-none -mt-2 sm:-mt-4 drop-shadow-md">
                Can Trust.
              </span>
            </h1>

            {/* Subtitle Copy */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#000000] max-w-xl font-normal leading-relaxed mb-8">
              Tailored for Every Member of Your Family. Welcome to Illinois Family Dentistry. Located at 2300 W Illinois Ave in Dallas (Illinois & Hampton Plaza, next to El Rancho Supermercado).
            </p>

            {/* Responsive 3-Stat Cards */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl mb-8">
              <div className="p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-[#F4A261] mb-1">
                  <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-[#F4A261]" />
                  <span className="font-extrabold text-xs sm:text-sm text-[#000000]">5.0★</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-[#000000]/70 uppercase tracking-wider">
                  Patient Care
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-[#43ACE0] mb-1">
                  <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#43ACE0]" />
                  <span className="font-extrabold text-[11px] sm:text-xs text-[#000000]">Eve & Sat</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-[#000000]/70 uppercase tracking-wider">
                  Open Saturdays
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-[#F4A261] mb-1">
                  <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#F4A261]" />
                  <span className="font-extrabold text-[11px] sm:text-xs text-[#000000]">Dallas 75224</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-[#000000]/70 uppercase tracking-wider">
                  El Rancho Plaza
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 mb-8">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-[#43ACE0] text-[#FFFFFF] font-sans font-extrabold text-xs uppercase tracking-widest hover:bg-[#F4A261] transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Your Spot Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${siteData.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-[#000000] text-[#FFFFFF] font-sans font-extrabold text-xs uppercase tracking-widest hover:bg-[#43ACE0] transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-[#F4A261]" />
                <span>Call 469-809-1919</span>
              </a>
            </div>

            {/* Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#43ACE0]/20 pt-5 text-[11px] sm:text-xs font-bold text-[#000000]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A261] shrink-0" /> All Ages Welcome
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A261] shrink-0" /> PPO & Medicaid
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A261] shrink-0" /> Emergencies
              </span>
              <span className="flex items-center gap-1.5 font-extrabold text-[#000000]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A261] shrink-0" /> Hablamos Español
              </span>
            </div>
          </motion.div>

          {/* Right Column Image (5 cols) - Fully Visible with Framer Motion Entrance & Ambient Drop Shadow Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0 group"
          >
            {/* Ambient Multi-Layer Soft Glow Backdrop Behind Image */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#43ACE0]/35 via-[#5FCAEF]/25 to-[#F4A261]/35 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(67,172,224,0.35)] border-4 border-[#FFFFFF] transition-all duration-500 group-hover:shadow-[0_30px_70px_-10px_rgba(67,172,224,0.45)]">
              <Image
                src={images.hero}
                alt="Illinois Family Dentistry Modern Patient Clinic Dallas TX"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent" />

              {/* Bottom Floating Info Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#43ACE0]/30 shadow-[0_15px_35px_rgba(0,0,0,0.2)] flex items-center justify-between z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl bg-[#43ACE0] p-1.5 shrink-0 flex items-center justify-center shadow-md">
                    <Image
                      src={images.teethIcon}
                      alt="Teeth Graphic"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#000000]">
                      Illinois Family Dentistry
                    </div>
                    <div className="text-[11px] text-[#000000]/70 font-medium mt-0.5">
                      2300 W Illinois Ave • Next to El Rancho
                    </div>
                  </div>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#F4A261] shrink-0" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
