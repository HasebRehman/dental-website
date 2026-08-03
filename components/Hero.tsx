"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Calendar, Phone, Star, ShieldCheck, Heart } from "lucide-react";
import { images } from "@/data/images";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-44 sm:pt-48 lg:pt-52 pb-16 md:pb-24 bg-gradient-to-b from-[#F0F6FF] via-[#FFFFFF] to-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#1B69B6]/20 text-xs font-bold text-[#1B69B6] mb-6 w-fit">
              <Check className="w-3.5 h-3.5 text-[#1B69B6]" />
              <span>ACCEPTING NEW PATIENTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="leading-[1.02] tracking-tight mb-4 font-sans font-black text-4xl sm:text-6xl lg:text-7xl text-[#0B2545]">
              DENTISTRY YOU
              <span className="block font-script text-5xl sm:text-7xl lg:text-8xl text-[#FF7A00] font-normal leading-tight -mt-1 sm:-mt-3">
                Can Trust.
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#475569] max-w-xl font-normal leading-relaxed mb-6">
              Compassionate care for your whole family. Healthier smiles. Happier lives.
            </p>

            {/* Google Rating Bar */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1 text-[#FFB800]">
                <Star className="w-4 h-4 fill-[#FFB800]" />
                <Star className="w-4 h-4 fill-[#FFB800]" />
                <Star className="w-4 h-4 fill-[#FFB800]" />
                <Star className="w-4 h-4 fill-[#FFB800]" />
                <Star className="w-4 h-4 fill-[#FFB800]" />
              </div>
              <span className="font-extrabold text-sm text-[#0B2545]">4.9</span>
              {/* Google G Icon */}
              <div className="w-5 h-5 rounded-full bg-[#FFFFFF] border border-[#CBD5E1] flex items-center justify-center text-[10px] font-bold text-[#4285F4] shadow-xs">
                G
              </div>
              <span className="text-xs text-[#64748B] font-medium">
                Based on 700+ Google Reviews
              </span>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold tracking-wide hover:bg-[#1B69B6] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Appointment</span>
              </Link>

              <a
                href={`tel:${siteData.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] border border-[#1B69B6]/40 text-[#1B69B6] text-xs font-extrabold tracking-wide hover:bg-[#F0F6FF] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#1B69B6]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* 4 Feature Pills Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#E2E8F0] pt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#334155]">
                <div className="w-7 h-7 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#1B69B6] shrink-0">
                  🕒
                </div>
                <div>
                  <div className="font-extrabold text-[11px] leading-tight text-[#0B2545]">Same Day</div>
                  <div className="text-[10px] text-[#64748B]">Appointments</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#334155]">
                <div className="w-7 h-7 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#1B69B6] shrink-0">
                  🔬
                </div>
                <div>
                  <div className="font-extrabold text-[11px] leading-tight text-[#0B2545]">Advanced</div>
                  <div className="text-[10px] text-[#64748B]">Technology</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#334155]">
                <div className="w-7 h-7 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#1B69B6] shrink-0">
                  🛡️
                </div>
                <div>
                  <div className="font-extrabold text-[11px] leading-tight text-[#0B2545]">Insurance</div>
                  <div className="text-[10px] text-[#64748B]">Accepted</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#334155]">
                <div className="w-7 h-7 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#1B69B6] shrink-0">
                  🛋️
                </div>
                <div>
                  <div className="font-extrabold text-[11px] leading-tight text-[#0B2545]">Comfortable</div>
                  <div className="text-[10px] text-[#64748B]">Environment</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Column (5 cols) - Operatory Room Photo & Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            {/* Decorative Dot Grid Pattern behind top-left */}
            <div className="absolute -top-6 -left-6 w-32 h-32 opacity-30 pointer-events-none hidden sm:block">
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1B69B6]" />
                ))}
              </div>
            </div>

            {/* Main Operatory Room Photo */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFFFFF] z-10">
              <Image
                src="/img/off-3.jpg"
                alt="Illinois Family Dentistry Modern Dental Clinic"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Floating Card at Bottom: Team Photo + "Exceptional Care for the Whole Family" */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 left-4 right-4 sm:-bottom-8 sm:left-6 sm:right-6 bg-[#FFFFFF] rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-[#E2E8F0] flex items-center justify-between z-20"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border border-[#E2E8F0]">
                  <Image
                    src="/img/team.jpg"
                    alt="Illinois Family Dentistry Doctors Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-xs sm:text-sm text-[#0B2545]">
                    Exceptional Care
                  </div>
                  <div className="text-[11px] text-[#64748B] font-medium">
                    for the Whole Family
                  </div>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-[#FFF1F2] flex items-center justify-center text-[#FF4D4D] shrink-0 border border-[#FECDD3]">
                <Heart className="w-4 h-4 text-[#FF4D4D]" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
