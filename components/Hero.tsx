"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { images } from "@/data/images";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.0 } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 20, delay: 0.2 })
        .from(".hero-title-line", { opacity: 0, y: 40, stagger: 0.15 }, "-=0.6")
        .from(".hero-sub", { opacity: 0, y: 20 }, "-=0.6")
        .from(".hero-cta", { opacity: 0, y: 20, stagger: 0.1 }, "-=0.6")
        .from(imageWrapperRef.current, { opacity: 0, scale: 0.96, duration: 1.2 }, "-=0.8")
        .from(".hero-badge-item", { opacity: 0, y: 15, stagger: 0.1 }, "-=0.6");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-[#F8F7F3] overflow-hidden"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full border-x border-[#121820]/10 flex justify-between">
          <div className="w-1/3 border-r border-[#121820]/5 hidden md:block" />
          <div className="w-1/3 border-r border-[#121820]/5 hidden md:block" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Top Eyebrow Tag */}
        <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6] border border-[#121820]/10 text-xs font-semibold uppercase tracking-widest text-[#121820] mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Premier Dallas Family Dentistry • Hablamos Español</span>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Typography & CTAs (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1
              ref={headlineRef}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-[#121820] tracking-tight mb-8"
            >
              <span className="hero-title-line block">YOUR SMILE.</span>
              <span className="hero-title-line block text-[#2563EB] italic font-normal">
                YOUR CONFIDENCE.
              </span>
              <span className="hero-title-line block text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-widest text-[#5A6472] uppercase mt-2">
                OUR EXPERTISE.
              </span>
            </h1>

            <p className="hero-sub font-sans text-base sm:text-lg text-[#5A6472] max-w-xl font-light leading-relaxed mb-10">
              Welcome to Illinois Family Dentistry. We deliver gentle, state-of-the-art dental care tailored for every generation. Experience modern comfort, personal attention, and transparent family healthcare in Dallas.
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#appointment"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#121820] text-[#F8F7F3] font-sans font-semibold text-xs uppercase tracking-widest hover:bg-[#2563EB] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#121820]/20 text-[#121820] font-sans font-semibold text-xs uppercase tracking-widest hover:bg-[#EFECE6] transition-colors"
              >
                <span>Explore Our Care</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#5A6472]" />
              </a>
            </div>

            {/* Trust Highlights */}
            <div
              ref={badgesRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#121820]/10 pt-6"
            >
              {[
                "Family Dentistry",
                "All Ages Welcome",
                "Evening & Saturday Care",
                "PPO & Medicaid Accepted",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="hero-badge-item flex items-center gap-2 text-xs font-semibold text-[#121820]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Editorial Photography Composition (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageWrapperRef}
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#121820]/10"
            >
              <Image
                src={images.hero}
                alt="Modern Illinois Family Dentistry Dallas Patient Care"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121820]/60 via-transparent to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#F8F7F3]/90 backdrop-blur-md border border-[#121820]/10 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB] text-[#F8F7F3] flex items-center justify-center font-bold text-sm">
                    5.0
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#121820]">
                      Top Rated Family Dentist
                    </div>
                    <div className="text-[11px] text-[#5A6472]">
                      Dallas, TX • 2300 W Illinois Ave
                    </div>
                  </div>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
              </div>
            </div>

            {/* Decorative Offset Backdrop */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[#121820]/10 -z-10 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
