"use client";

import { motion } from "framer-motion";
import { UserCheck, Cpu, HeartHandshake, Wallet } from "lucide-react";

const whyUsFeatures = [
  {
    icon: UserCheck,
    title: "Experienced Doctors",
    description: "Skilled, caring professionals with years of experience.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    description: "Modern equipment for accurate and comfortable treatment.",
  },
  {
    icon: HeartHandshake,
    title: "Comfortable Environment",
    description: "A relaxing, friendly space designed for your comfort.",
  },
  {
    icon: Wallet,
    title: "Affordable Care",
    description: "Quality care with flexible payment and insurance options.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-10 md:py-28 bg-[#F8FAFC] text-[#000000] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-4 flex flex-col justify-center text-left"
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight leading-tight mb-4">
              WHY CHOOSE <br />
              <span className="text-[#1B69B6]">ILLINOIS FAMILY DENTISTRY?</span>
            </h2>

            <p className="font-sans text-sm text-[#64748B] font-normal leading-relaxed">
              We combine advanced technology with compassionate care to deliver the best experience for you and your family.
            </p>
          </motion.div>

          {/* Right Column (8 cols): 4 Feature Columns in 1 Row */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E2E8F0] shadow-xs text-center flex flex-col items-center justify-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#EBF3FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] mb-4 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-sans text-base font-extrabold text-[#0B2545] mb-2">
                    {feature.title}
                  </h3>

                  <p className="font-sans text-xs text-[#64748B] font-normal leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
