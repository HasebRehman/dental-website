"use client";

import { siteData } from "@/data/siteData";

export default function TrustMarquee() {
  const marqueeItems = [
    ...siteData.badges,
    ...siteData.badges,
    ...siteData.badges,
  ];

  return (
    <div className="w-full bg-[#121820] text-[#F8F7F3] py-4 border-y border-[#F8F7F3]/10 overflow-hidden relative select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {marqueeItems.map((badge, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F8F7F3]/90">
              {badge}
            </span>
            <span className="text-[#2563EB] text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
