"use client";

import Image from "next/image";
import { Sparkles, ShieldCheck, CreditCard, DollarSign, ArrowRight } from "lucide-react";
import { images } from "@/data/images";

export default function Financing() {
  return (
    <section
      id="financing"
      className="py-24 md:py-36 bg-[#F8F7F3] border-b border-[#121820]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative & Information (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6] border border-[#121820]/10 text-xs font-semibold uppercase tracking-widest text-[#5A6472] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Transparent Insurance & Payment Options</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121820] leading-[1.05] tracking-tight mb-8">
              QUALITY CARE <br />
              <span className="italic text-[#2563EB]">SHOULDN&apos;T FEEL OUT OF REACH.</span>
            </h2>

            <p className="font-sans text-base text-[#5A6472] font-light leading-relaxed mb-10">
              At Illinois Family Dentistry, we believe every family in Dallas deserves access to exceptional dental care without financial stress. We accept most major PPO insurances, Medicaid/CHIP for children, and offer flexible financing plans.
            </p>

            {/* Financial Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#121820]/10 pt-8 mb-10">
              <div className="p-5 rounded-2xl bg-[#EFECE6] border border-[#121820]/5">
                <ShieldCheck className="w-6 h-6 text-[#2563EB] mb-3" />
                <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-[#121820] mb-1">
                  PPO Insurance
                </h3>
                <p className="text-[11px] text-[#5A6472] leading-relaxed">
                  We accept most preferred provider insurance plans & file claims on your behalf.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#EFECE6] border border-[#121820]/5">
                <CreditCard className="w-6 h-6 text-[#0D9488] mb-3" />
                <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-[#121820] mb-1">
                  Medicaid & CHIP
                </h3>
                <p className="text-[11px] text-[#5A6472] leading-relaxed">
                  Comprehensive dental coverage accepted for eligible children and families.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#EFECE6] border border-[#121820]/5">
                <DollarSign className="w-6 h-6 text-[#D97706] mb-3" />
                <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-[#121820] mb-1">
                  Flexible Plans
                </h3>
                <p className="text-[11px] text-[#5A6472] leading-relaxed">
                  CareCredit & monthly payment arrangements available for out-of-pocket costs.
                </p>
              </div>
            </div>

            <a
              href="#appointment"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#121820] text-[#F8F7F3] text-xs uppercase tracking-widest font-semibold hover:bg-[#2563EB] transition-colors"
            >
              <span>Explore Financial Options</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#121820]/10">
              <Image
                src={images.financing}
                alt="Affordable Family Dental Financial Options Dallas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121820]/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#F8F7F3]/95 backdrop-blur-md border border-[#121820]/10 text-xs font-semibold text-[#121820] text-center">
                Questions about your insurance coverage? Call us at 469-809-1919
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
