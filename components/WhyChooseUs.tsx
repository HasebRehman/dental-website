"use client";

import { useEffect, useRef } from "react";
import { Sparkles, Clock, Heart, Sparkle, ShieldAlert, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const whyUsPillars = [
  {
    num: "01",
    title: "FAMILY FIRST",
    desc: "We treat every patient like a member of our own household, catering to all ages from children to seniors with warmth and respect.",
    icon: Heart,
  },
  {
    num: "02",
    title: "MODERN APPROACH",
    desc: "Digital imaging, low-radiation X-rays, and precision restorative materials for faster, safer, and longer-lasting dental results.",
    icon: Sparkle,
  },
  {
    num: "03",
    title: "COMFORTABLE CARE",
    desc: "Gentle technique and soothing environment designed for anxious patients so every visit is stress-free and relaxed.",
    icon: Award,
  },
  {
    num: "04",
    title: "CONVENIENT HOURS",
    desc: "Open till 7:00 PM on weekdays and open on Saturdays, allowing you to get quality care without missing work or school.",
    icon: Clock,
  },
  {
    num: "05",
    title: "PERSONALIZED ATTENTION",
    desc: "We never double-book or rush your appointment. You receive direct one-on-one time with your doctor every single visit.",
    icon: ShieldAlert,
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".why-item", {
        opacity: 0,
        y: 35,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#121820] text-[#F8F7F3] relative overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D9488]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F7F3]/10 border border-[#F8F7F3]/15 text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>The Illinois Dentistry Difference</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-6">
            WHY ILLINOIS <br />
            <span className="italic text-[#2563EB]">FAMILY DENTISTRY?</span>
          </h2>

          <p className="font-sans text-lg text-[#94A3B8] font-light leading-relaxed">
            We don&apos;t just treat teeth. We take care of people. Our commitment to clinical excellence and genuine patient care sets us apart across Dallas.
          </p>
        </div>

        {/* Pillars List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="why-item group bg-[#1A222D] p-8 rounded-3xl border border-[#F8F7F3]/10 hover:border-[#2563EB]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-4xl font-normal text-[#2563EB]">
                    {pillar.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F8F7F3]/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2563EB] text-[#F8F7F3] transition-all">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-sans text-base uppercase tracking-widest font-bold text-[#F8F7F3] mb-3">
                  {pillar.title}
                </h3>

                <p className="font-sans text-xs text-[#94A3B8] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#F8F7F3]/10 mt-8 group-hover:bg-[#2563EB] transition-colors" />
            </div>
          ))}

          {/* Quick CTA Card in Grid */}
          <div className="why-item bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-8 rounded-3xl text-[#F8F7F3] flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#F8F7F3]/80">
                Dallas Patient Care
              </span>
              <h3 className="font-serif text-3xl font-normal mt-3 mb-4">
                Ready for a better dental experience?
              </h3>
              <p className="text-xs text-[#F8F7F3]/90 font-light leading-relaxed">
                Schedule your comprehensive exam or emergency visit today. Hablamos Español.
              </p>
            </div>

            <a
              href="#appointment"
              className="mt-8 w-full text-center py-3.5 rounded-full bg-[#F8F7F3] text-[#121820] font-semibold text-xs uppercase tracking-widest hover:bg-[#121820] hover:text-[#F8F7F3] transition-colors"
            >
              Book Appointment Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
