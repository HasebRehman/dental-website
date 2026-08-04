"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { images } from "@/data/images";

const showcaseServices = [
  {
    id: "cleanings",
    title: "Dental Cleanings",
    description: "Preventive care to keep your teeth and gums healthy.",
    image: images.services.general,
    icon: "🦷",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Replace missing teeth with strong, natural-looking implants.",
    image: images.services.restorative,
    icon: "🦷",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with whitening, veneers & more.",
    image: images.services.cosmetic,
    icon: "😁",
  },
  {
    id: "invisalign",
    title: "Invisalign®",
    description: "Straighten your teeth comfortably and discreetly.",
    image: images.services.invisalign,
    icon: "😬",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-28 bg-[#FFFFFF] text-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Paragraph (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-4 flex flex-col justify-center text-left"
          >
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1B69B6] mb-2 block">
              COMPLETE CARE FOR EVERY SMILE
            </span>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight leading-tight mb-4">
              OUR DENTAL <br className="hidden sm:inline" />
              SERVICES
            </h2>

            <p className="font-sans text-sm text-[#64748B] font-normal leading-relaxed mb-8 max-w-sm">
              From routine checkups to advanced treatments, we provide everything you need for a healthy, beautiful smile.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1B69B6] text-[#FFFFFF] text-xs font-extrabold tracking-wide hover:bg-[#FF7A00] transition-colors shadow-md w-fit"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column: 4 Service Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {showcaseServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F8FAFC] rounded-2xl p-4 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Circular Image Container with Floating Light Blue Icon */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-[#E2E8F0]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-full bg-[#EBF3FF] border border-[#1B69B6]/20 flex items-center justify-center text-sm shadow-xs">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="font-sans text-base font-extrabold text-[#0B2545] mb-1.5">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs text-[#64748B] font-normal leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B69B6] group-hover:text-[#FF7A00] transition-colors pt-2 border-t border-[#E2E8F0]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
