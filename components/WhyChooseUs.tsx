"use client";

import Link from "next/link";
import { Clock, Heart, Sparkle, ShieldAlert, Award } from "lucide-react";
import { motion } from "framer-motion";

const whyUsPillars = [
  {
    num: "01",
    title: "EXPERIENCED & CARING TEAM",
    desc: "Led by Dr. Rajvir Singh ('Dr. Raj') and Dr. Tiffany Pham. We prioritize patient comfort and gentle technique for every generation.",
    icon: Heart,
  },
  {
    num: "02",
    title: "STATE-OF-THE-ART DENTISTRY",
    desc: "Low-radiation digital X-rays, modern diagnostic equipment, and tooth-colored materials for long-lasting aesthetic beauty.",
    icon: Sparkle,
  },
  {
    num: "03",
    title: "COMFORT-FIRST & BILINGUAL",
    desc: "Our warm staff speaks English & Spanish (Hablamos Español). We take time to listen so nervous patients feel completely relaxed.",
    icon: Award,
  },
  {
    num: "04",
    title: "EVENING & SATURDAY SLOTS",
    desc: "Open until 7:00 PM on weekdays and open on Saturdays, allowing you to receive care without taking off work or missing school.",
    icon: Clock,
  },
  {
    num: "05",
    title: "INSURANCE & MEDICAID ACCEPTED",
    desc: "We accept most PPO insurances, Medicaid/CHIP for children, and offer flexible payment arrangements via CareCredit.",
    icon: ShieldAlert,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-32 bg-[#43ACE0] text-[#FFFFFF] relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5FCAEF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4A261]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          {/* Headline in 2 lines */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5">
            <span className="block text-[#FFFFFF]">WHY CHOOSE</span>
            <span className="block text-[#F4A261]">ILLINOIS FAMILY DENTISTRY?</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#FFFFFF]/90 font-normal leading-relaxed">
            We don&apos;t just treat teeth. We take care of people. Our commitment to clinical excellence and compassionate patient care makes us Dallas&apos;s trusted choice.
          </p>
        </motion.div>

        {/* 6-Box Grid with Staggered Scroll Reveal & Multi-Layer Shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {whyUsPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="group bg-[#FFFFFF] p-8 rounded-3xl border border-[#FFFFFF]/30 hover:border-[#F4A261] transition-all duration-300 flex flex-col justify-between h-full shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] text-[#000000]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl font-bold text-[#43ACE0]">
                    {pillar.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#5FCAEF]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#43ACE0] group-hover:text-[#FFFFFF] text-[#43ACE0] transition-all">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-sans text-sm uppercase tracking-widest font-extrabold text-[#000000] mb-3">
                  {pillar.title}
                </h3>

                <p className="font-sans text-xs text-[#000000]/70 font-normal leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#43ACE0]/20 mt-8 group-hover:bg-[#F4A261] transition-colors" />
            </motion.div>
          ))}

          {/* 6th Card: Exact Peach CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="bg-[#F4A261] p-8 rounded-3xl text-[#FFFFFF] flex flex-col justify-between h-full shadow-2xl border border-[#FFFFFF]/20 hover:scale-[1.01] transition-transform"
          >
            <div>
              <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#FFFFFF]/90 block mb-2">
                DALLAS FAMILY HEALTHCARE
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] leading-tight mb-3">
                Ready for a stress-free experience?
              </h3>
              <p className="font-sans text-xs text-[#FFFFFF]/95 font-normal leading-relaxed mb-4">
                Schedule your family&apos;s checkup or emergency visit today with Dr. Raj & Dr. Pham. Hablamos Español.
              </p>
            </div>

            <div className="pt-4 border-t border-[#FFFFFF]/20">
              <Link
                href="/contact"
                className="w-full text-center block py-4 rounded-full bg-[#000000] text-[#FFFFFF] font-extrabold text-xs uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-all duration-300 shadow-md"
              >
                RESERVE YOUR SPOT NOW
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
