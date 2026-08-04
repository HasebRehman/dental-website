"use client";

import { motion } from "framer-motion";
import { Users, Home, Globe, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

const highlights = [
  {
    id: "all-ages",
    title: "ALL AGES WELCOME",
    badge: "Infants to Seniors",
    description:
      "We welcome family members of all ages and stages of life. From infants to toddlers, school-aged kids, teens, adults, and golden agers, we proudly serve the tiniest to the wisest of smiles!",
    icon: Users,
    colSpanDesktop: "lg:col-span-2",
    accentColor: "from-[#1B69B6] to-[#0B2545]",
    badgeBg: "bg-[#EBF3FF] text-[#1B69B6] border-[#1B69B6]/20",
  },
  {
    id: "locally-owned",
    title: "LOCALLY OWNED",
    badge: "Independent Practice",
    description:
      "We invite you to experience open communication and trusted dental care at our locally-owned, non-corporate practice, where you and every member of your family will feel right at home!",
    icon: Home,
    colSpanDesktop: "lg:col-span-2",
    accentColor: "from-[#1B69B6] to-[#2563EB]",
    badgeBg: "bg-[#F0FDF4] text-[#166534] border-[#166534]/20",
  },
  {
    id: "hablamos-espanol",
    title: "HABLAMOS ESPAÑOL",
    badge: "Atención En Español",
    description:
      "En Illinois Family Dentistry, estamos dedicados a su salud bucal. Nuestro equipo está listo para brindar atención de calidad y tratamientos modernos para una sonrisa radiante. ¡Confía en nosotros para cuidar tu bienestar dental!",
    icon: Globe,
    colSpanDesktop: "lg:col-span-2",
    accentColor: "from-[#FF7A00] to-[#EA580C]",
    badgeBg: "bg-[#FFF7ED] text-[#C2410C] border-[#EA580C]/20",
  },
  {
    id: "flexible-hours",
    title: "EVENING & WEEKEND APPOINTMENTS",
    badge: "Urgent & Emergency Care",
    description:
      "If you or a family member experience a dental emergency, we are here to help. We are pleased to offer evening and Saturday appointments to provide you with urgent care services for prompt relief.",
    icon: Clock,
    colSpanDesktop: "lg:col-span-3",
    accentColor: "from-[#0B2545] to-[#1E3A8A]",
    badgeBg: "bg-[#FEF2F2] text-[#991B1B] border-[#991B1B]/20",
  },
  {
    id: "insurance-accepted",
    title: "MOST INSURANCE ACCEPTED",
    badge: "Affordable Financing",
    description:
      "We accept most traditional dental insurance plans and provide financing options to ensure you and your family members get the exceptional dental care you need at a price you can afford.",
    icon: ShieldCheck,
    colSpanDesktop: "lg:col-span-3",
    accentColor: "from-[#1B69B6] to-[#0284C7]",
    badgeBg: "bg-[#EFF6FF] text-[#1E40AF] border-[#1E40AF]/20",
  },
];

export default function PracticeHighlights() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F8FAFC] text-[#000000] border-t border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Background Decorative Light Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B69B6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#1B69B6]/20 text-[#1B69B6] text-xs font-extrabold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Why Families Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight leading-tight mb-4"
          >
            PATIENT-CENTERED CARE <br className="hidden sm:inline" />
            <span className="text-[#1B69B6]">BUILT AROUND YOU</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#64748B] font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We take pride in delivering accessible, compassionate, and personalized dental care for every member of your family.
          </motion.p>
        </div>

        {/* 5 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 items-stretch">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${item.colSpanDesktop} bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentColor} opacity-90 group-hover:h-2 transition-all duration-300`}
                />

                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#EBF3FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] group-hover:bg-[#1B69B6] group-hover:text-[#FFFFFF] transition-colors duration-300 shadow-xs shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span
                      className={`text-[11px] font-bold tracking-wide px-3 py-1 rounded-full border ${item.badgeBg} whitespace-nowrap`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg sm:text-xl font-black text-[#0B2545] tracking-tight mb-3 group-hover:text-[#1B69B6] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Indicator */}
                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-bold text-[#1B69B6]">
                  <CheckCircle2 className="w-4 h-4 text-[#1B69B6]" />
                  <span className="text-[#64748B] font-medium group-hover:text-[#0B2545] transition-colors">
                    Guaranteed Dedicated Care
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
