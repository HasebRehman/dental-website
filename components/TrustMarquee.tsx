"use client";

const marqueeItems = [
  "ACCEPTING NEW PATIENTS & FAMILIES IN DALLAS",
  "HABLAMOS ESPAÑOL",
  "PPO INSURANCE, MEDICAID & CHIP ACCEPTED",
  "SAME-DAY EMERGENCY DENTAL APPOINTMENTS",
  "FLEXIBLE FINANCING WITH CARECREDIT®",
  "OPEN SATURDAYS & EVENING HOURS UNTIL 7 PM",
  "DENTISTRY YOU CAN TRUST IN OAK CLIFF & DALLAS",
];

export default function TrustMarquee() {
  return (
    <div className="bg-[#43ACE0] text-[#FFFFFF] py-6 sm:py-7 md:py-8 overflow-hidden border-y-2 border-[#FFFFFF]/25 shadow-xl select-none relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-10 sm:gap-14 md:gap-16 text-sm sm:text-base md:text-lg lg:text-xl font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em]">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={index} className="inline-flex items-center gap-10 sm:gap-14 md:gap-16">
            <span className="hover:text-[#F4A261] transition-colors drop-shadow-sm font-sans">
              {item}
            </span>
            <span className="text-[#F4A261] text-lg sm:text-xl md:text-2xl drop-shadow-md">
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
