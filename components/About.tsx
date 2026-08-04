"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Award, HeartHandshake, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { images } from "@/data/images";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#FFFFFF] border-b border-[#43ACE0]/20 overflow-hidden relative"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#5FCAEF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Composite Image Collages with Ambient Drop Shadows */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative group"
          >
            {/* Ambient Backlight Glow behind collages */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#43ACE0]/20 via-[#5FCAEF]/25 to-[#F4A261]/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Main Image 1 */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(67,172,224,0.3)] border-4 border-[#FFFFFF] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={images.about1}
                  alt="Illinois Family Dentistry Staff Care Dallas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF] text-xs font-bold">
                  Bilingual Care • Hablamos Español
                </div>
              </div>

              {/* Main Image 2 */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(244,162,97,0.3)] border-4 border-[#FFFFFF] transform rotate-2 hover:rotate-0 transition-transform duration-500 mt-8">
                <Image
                  src={images.about2}
                  alt="Illinois Family Dentistry Dental Equipment Dallas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF] text-xs font-bold">
                  Modern Dental Diagnostics
                </div>
              </div>
            </div>

            {/* Center Floating Trust Pill with Floating Motion */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3.5 rounded-full bg-[#FFFFFF] border border-[#43ACE0]/30 shadow-[0_15px_35px_rgba(0,0,0,0.15)] text-center whitespace-nowrap z-20"
            >
              <span className="font-sans text-xs uppercase tracking-widest font-extrabold text-[#43ACE0] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F4A261]" />
                <span>Dallas Family Dentistry</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column (6 cols): Copy & Content with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Top Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5FCAEF]/15 border border-[#43ACE0]/20 text-xs font-extrabold uppercase tracking-widest text-[#43ACE0] mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>THE ILLINOIS FAMILY DENTISTRY PROMISE</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] tracking-tight leading-[1.1] mb-6">
              YOUR SMILE DESERVES <br />
              <span className="text-[#43ACE0]">COMPASSIONATE CARE.</span>
            </h2>

            {/* Paragraph Text */}
            <p className="font-sans text-sm sm:text-base text-[#000000] font-normal leading-relaxed mb-8">
              At Illinois Family Dentistry, we treat every patient like a member of our own family. Located in Dallas, TX, we combine state-of-the-art dental technology with a warm, welcoming environment designed to eliminate anxiety for children, adults, and seniors alike.
            </p>

            {/* 4 Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15 shadow-xs hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-wider font-extrabold text-[#000000]">
                    PPO & Medicaid Accepted
                  </h3>
                  <p className="text-[11px] text-[#000000]/70 mt-0.5">
                    We accept most PPO insurances, Medicaid/CHIP for kids & CareCredit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15 shadow-xs hover:shadow-md transition-shadow">
                <HeartHandshake className="w-5 h-5 text-[#43ACE0] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-wider font-extrabold text-[#000000]">
                    Bilingual Staff (Español)
                  </h3>
                  <p className="text-[11px] text-[#000000]/70 mt-0.5">
                    Our team speaks English & Spanish to serve our Dallas community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15 shadow-xs hover:shadow-md transition-shadow">
                <ShieldCheck className="w-5 h-5 text-[#43ACE0] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-wider font-extrabold text-[#000000]">
                    Gentle Pain-Free Dentistry
                  </h3>
                  <p className="text-[11px] text-[#000000]/70 mt-0.5">
                    Comfort-first protocols for anxious patients of all ages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15 shadow-xs hover:shadow-md transition-shadow">
                <Award className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-wider font-extrabold text-[#000000]">
                    Same-Day Emergency Slots
                  </h3>
                  <p className="text-[11px] text-[#000000]/70 mt-0.5">
                    Urgent appointments reserved daily for toothaches & injuries.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button - Redirects to /office-tour */}
            <div>
              <Link
                href="/office-tour"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#43ACE0] text-[#FFFFFF] font-sans font-extrabold text-xs uppercase tracking-widest hover:bg-[#F4A261] transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>Learn More About Our Clinic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
