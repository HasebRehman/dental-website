"use client";

import Image from "next/image";
import { Phone, Sparkles, Calendar } from "lucide-react";
import AppointmentForm from "./AppointmentForm";
import { siteData } from "@/data/siteData";
import { images } from "@/data/images";

export default function AppointmentCTA() {
  return (
    <section
      id="appointment"
      className="py-24 md:py-36 bg-[#121820] text-[#F8F7F3] relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Callout & Photo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F7F3]/10 border border-[#F8F7F3]/15 text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Begin Your Smile Journey</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight mb-6">
                READY TO LOVE <br />
                <span className="italic text-[#2563EB]">YOUR SMILE?</span>
              </h2>

              <p className="font-sans text-base text-[#94A3B8] font-light leading-relaxed mb-8">
                Make your next dental visit a more comfortable, personal, and rewarding experience. Request your appointment online or reach out to our team directly.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href={`tel:${siteData.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#F8F7F3]/20 text-[#F8F7F3] font-semibold text-xs uppercase tracking-widest hover:bg-[#F8F7F3] hover:text-[#121820] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2563EB]" />
                  <span>Call {siteData.phone}</span>
                </a>
              </div>
            </div>

            {/* Photo Card */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#F8F7F3]/10 shadow-xl hidden sm:block">
              <Image
                src={images.cta}
                alt="Illinois Family Dentistry Patient Smile Care"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121820] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-[#94A3B8] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#2563EB]" />
                <span>Open Mon–Fri 10am–7pm • Sat 10am–2pm</span>
              </div>
            </div>
          </div>

          {/* Right Form Container (7 cols) */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
