"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ChevronDown } from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

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
      className="py-24 md:py-32 bg-[#EFECE6] border-b border-[#121820]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#5A6472] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Comprehensive Dental Care</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121820] tracking-tight">
              OUR INTERACTIVE <span className="italic text-[#2563EB]">SERVICES</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5A6472] max-w-md font-light">
            Tailored dental solutions designed to preserve natural beauty, restore confidence, and provide lasting oral health for your entire family.
          </p>
        </div>

        {/* Desktop Interactive Layout (Hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start min-h-[520px]">
          {/* Left Service Menu Sidebar (5 cols) */}
          <div className="col-span-5 flex flex-col gap-3">
            {servicesData.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[#121820] text-[#F8F7F3] shadow-xl scale-[1.02]"
                      : "bg-[#F8F7F3] text-[#121820] hover:bg-[#F8F7F3]/80 border border-[#121820]/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-serif text-2xl font-normal ${
                        isActive ? "text-[#2563EB]" : "text-[#5A6472]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <div className="font-sans text-base font-bold tracking-tight">
                        {service.title}
                      </div>
                      <div
                        className={`text-xs mt-0.5 ${
                          isActive ? "text-[#94A3B8]" : "text-[#5A6472]"
                        }`}
                      >
                        {service.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive
                        ? "translate-x-1 text-[#2563EB]"
                        : "text-[#5A6472] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Active Service Showcase (7 cols) */}
          <div className="col-span-7 relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-[#F8F7F3] rounded-3xl p-8 lg:p-10 shadow-2xl border border-[#121820]/10 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Image */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#121820]/80 backdrop-blur-md text-[#F8F7F3] text-xs font-semibold tracking-wider uppercase">
                      {activeService.number} • {activeService.title}
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl text-[#121820] mb-3">
                    {activeService.title}
                  </h3>
                  <p className="font-sans text-sm text-[#5A6472] font-light leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  {/* Bullet list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#121820]/10 pt-6 mb-8">
                    {activeService.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-semibold text-[#121820]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#121820]/10">
                  <span className="text-xs uppercase tracking-widest text-[#5A6472] font-semibold">
                    Illinois Family Dentistry Dallas
                  </span>
                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121820] text-[#F8F7F3] text-xs uppercase tracking-widest font-semibold hover:bg-[#2563EB] transition-colors"
                  >
                    <span>Schedule Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion Experience */}
        <div className="lg:hidden flex flex-col gap-4">
          {servicesData.map((service) => {
            const isExpanded = expandedMobile === service.id;
            return (
              <div
                key={service.id}
                className="bg-[#F8F7F3] rounded-2xl border border-[#121820]/10 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() =>
                    setExpandedMobile(isExpanded ? null : service.id)
                  }
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-xl text-[#2563EB]">
                      {service.number}
                    </span>
                    <div>
                      <div className="font-sans text-base font-bold text-[#121820]">
                        {service.title}
                      </div>
                      <div className="text-xs text-[#5A6472]">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#121820] transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-[#2563EB]" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#121820]/5">
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-[#5A6472] font-light leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-[#121820] font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#appointment"
                      className="w-full text-center block py-3 rounded-full bg-[#121820] text-[#F8F7F3] text-xs font-semibold uppercase tracking-widest"
                    >
                      Book {service.title}
                    </a>
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
