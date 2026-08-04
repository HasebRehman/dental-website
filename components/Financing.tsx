"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { images } from "@/data/images";

const insuranceLogos = [
  { name: "Delta Dental", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Delta_Dental_Logo.svg/512px-Delta_Dental_Logo.svg.png" },
  { name: "Aetna", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Aetna_logo.svg/512px-Aetna_logo.svg.png" },
  { name: "Cigna", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Cigna_logo.svg/512px-Cigna_logo.svg.png" },
  { name: "MetLife", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/MetLife_logo.svg/512px-MetLife_logo.svg.png" },
  { name: "BlueCross BlueShield", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Blue_Cross_Blue_Shield_Association_logo.svg/512px-Blue_Cross_Blue_Shield_Association_logo.svg.png" },
  { name: "Humana", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Humana_Logo.svg/512px-Humana_Logo.svg.png" },
  { name: "Guardian", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Guardian_Life_Insurance_Company_of_America_logo.svg/512px-Guardian_Life_Insurance_Company_of_America_logo.svg.png" },
  { name: "UnitedHealthcare", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/UnitedHealthcare_logo.svg/512px-UnitedHealthcare_logo.svg.png" },
];

export default function Financing() {
  return (
    <section id="financing" className="py-10 md:py-28 bg-[#F8FAFC] text-[#000000] border-t border-[#E2E8F0]">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Insurance Logos (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 bg-[#0B2545] text-[#FFFFFF] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-xl"
          >
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#93C5FD] block mb-2">
                WE ACCEPT
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-black text-[#FFFFFF] tracking-tight mb-8">
                MOST <span className="text-[#93C5FD]">INSURANCES</span>
              </h3>

              {/* 8 Insurance Badges Grid */}
              <div className="grid grid-cols-2 gap-3">
                {insuranceLogos.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#FFFFFF] rounded-xl p-3 flex items-center justify-center h-14 border border-[#FFFFFF]/20 shadow-xs hover:scale-102 transition-transform"
                  >
                    <span className="text-xs font-black text-[#0B2545] text-center tracking-tight truncate">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card: Affordable Care & Family Photo (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-7 bg-gradient-to-r from-[#EBF3FF] via-[#F0F6FF] to-[#E2E8F0]/40 rounded-3xl p-8 md:p-10 border border-[#1B69B6]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="flex-1 z-10">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1B69B6] block mb-2">
                AFFORDABLE CARE FOR
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight leading-tight mb-4">
                EVERY FAMILY
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#475569] font-normal leading-relaxed mb-6 max-w-md">
                We offer flexible payment options and financing to make quality dental care affordable.
              </p>

              {/* Checkmarks */}
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm font-bold text-[#0B2545] mb-8">
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1B69B6] text-[#FFFFFF] flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                  <span>No Insurance? No Problem!</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1B69B6] text-[#FFFFFF] flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                  <span>Flexible Payment Plans</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1B69B6] text-[#FFFFFF] flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                  <span>0% Financing Available</span>
                </li>
              </ul>

              <Link
                href="/financial-info"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1B69B6] text-[#FFFFFF] text-xs font-extrabold tracking-wide hover:bg-[#FF7A00] transition-colors shadow-md"
              >
                <span>Learn More About Financing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Family Image Cutout */}
            <div className="relative w-full md:w-64 h-64 md:h-full min-h-[220px] rounded-2xl overflow-hidden shrink-0 border-2 border-[#FFFFFF] shadow-md z-0">
              <Image
                src={images.about1}
                alt="Happy Family at Dental Clinic"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
