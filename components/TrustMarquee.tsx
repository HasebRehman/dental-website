"use client";

import { Users, HeartPulse, CreditCard, MapPin } from "lucide-react";

export default function TrustMarquee() {
  return (
    <div className="bg-[#1B69B6] text-[#FFFFFF] py-4 overflow-hidden border-y border-[#FFFFFF]/20 shadow-md select-none relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-xs sm:text-sm font-bold tracking-wide">
        {[1, 2, 3, 4].map((repeat) => (
          <div key={repeat} className="flex items-center gap-12 shrink-0">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#93C5FD]" />
              <span>Family & Cosmetic Dentistry</span>
            </div>
            <span className="text-[#93C5FD]/60">•</span>

            <div className="flex items-center gap-2.5">
              <HeartPulse className="w-4 h-4 text-[#93C5FD]" />
              <span>Gentle & Pain-Free Care</span>
            </div>
            <span className="text-[#93C5FD]/60">•</span>

            <div className="flex items-center gap-2.5">
              <CreditCard className="w-4 h-4 text-[#93C5FD]" />
              <span>Flexible Payment Options</span>
            </div>
            <span className="text-[#93C5FD]/60">•</span>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#93C5FD]" />
              <span>Proudly Serving Dallas, TX</span>
            </div>
            <span className="text-[#93C5FD]/60">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
