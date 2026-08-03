"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ChevronDown } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].id);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(
    servicesData[0].id
  );

  const activeService =
    servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-[#5FCAEF]/10 border-b border-[#43ACE0]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#F4A261] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Family Dentistry</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#000000] tracking-tight font-bold">
              OUR DENTAL <span className="text-[#43ACE0]">SERVICES</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-[#000000] max-w-md font-normal">
            From routine checkups and pediatric care to Invisalign®, emergency relief, and full implant restorations.
          </p>
        </motion.div>

        {/* Desktop Interactive Layout (10 Services) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
          {/* Left Menu List (5 cols) */}
          <div className="col-span-5 flex flex-col gap-2.5 max-h-[680px] overflow-y-auto pr-2">
            {servicesData.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-4.5 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[#43ACE0] text-[#FFFFFF] shadow-xl scale-[1.01] border-l-4 border-[#F4A261]"
                      : "bg-[#FFFFFF] text-[#000000] hover:bg-[#5FCAEF]/15 border border-[#43ACE0]/15 shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-serif text-lg font-bold ${
                        isActive ? "text-[#F4A261]" : "text-[#43ACE0]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <div className="font-sans text-xs sm:text-sm font-extrabold tracking-tight">
                        {service.title}
                      </div>
                      <div
                        className={`text-[11px] mt-0.5 ${
                          isActive ? "text-[#FFFFFF]/80" : "text-[#000000]/70"
                        }`}
                      >
                        {service.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive
                        ? "translate-x-1 text-[#F4A261]"
                        : "text-[#000000]/50 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Active Service Showcase (7 cols - Sticky Pinned with Glowing Shadow) */}
          <div className="col-span-7 sticky top-32 group">
            {/* Backlight Ambient Glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#43ACE0]/20 via-[#5FCAEF]/25 to-[#F4A261]/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-[#FFFFFF] rounded-3xl p-8 lg:p-10 shadow-[0_25px_60px_rgba(67,172,224,0.25)] border border-[#43ACE0]/20 flex flex-col justify-between"
              >
                <div>
                  {/* Service Photo with Shadow */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 shadow-lg border border-[#43ACE0]/20">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 50vw"
                    />
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl text-[#000000] mb-3 font-bold">
                    {activeService.title}
                  </h3>
                  <p className="font-sans text-sm text-[#000000] font-normal leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  {/* Bullet list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#43ACE0]/15 pt-6 mb-6">
                    {activeService.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-bold text-[#000000]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#43ACE0]/15">
                  <span className="text-xs uppercase tracking-widest text-[#000000]/70 font-bold">
                    Illinois Family Dentistry Dallas
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs uppercase tracking-widest font-bold hover:bg-[#F4A261] transition-colors shadow-md"
                  >
                    <span>Schedule Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden flex flex-col gap-3.5">
          {servicesData.map((service) => {
            const isExpanded = expandedMobile === service.id;
            return (
              <div
                key={service.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#43ACE0]/20 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setExpandedMobile(isExpanded ? null : service.id)
                  }
                  className="w-full p-4.5 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg font-bold text-[#F4A261]">
                      {service.number}
                    </span>
                    <div>
                      <div className="font-sans text-xs sm:text-sm font-bold text-[#000000]">
                        {service.title}
                      </div>
                      <div className="text-[11px] text-[#000000]/70">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#000000] transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-[#F4A261]" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-[#43ACE0]/15">
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 shadow-md">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-[#000000] font-normal leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-[#000000] font-bold"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A261]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="w-full text-center block py-3 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest shadow-md"
                    >
                      Book {service.title}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
