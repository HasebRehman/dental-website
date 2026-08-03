"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Shield, HeartHandshake, Smile } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "@/data/images";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax scroll effect on main about image
      if (parallaxImgRef.current) {
        gsap.to(parallaxImgRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Fade & slide reveals
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F8F7F3] border-b border-[#121820]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Eyebrow */}
        <div className="about-reveal flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#5A6472] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Our Philosophy & Brand Story</span>
        </div>

        {/* Editorial Heading */}
        <div className="about-reveal max-w-4xl mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#121820] leading-[1.02] tracking-tight">
            DENTISTRY THAT FEELS <br />
            <span className="italic text-[#2563EB]">A LITTLE MORE HUMAN.</span>
          </h2>
        </div>

        {/* Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Photography with Parallax (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-[#121820]/10">
              <div ref={parallaxImgRef} className="absolute -top-10 -bottom-10 inset-x-0">
                <Image
                  src={images.about}
                  alt="Warm Family Dentistry Environment in Dallas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            {/* Stat callout card */}
            <div className="about-reveal absolute -bottom-8 -right-6 md:right-8 bg-[#121820] text-[#F8F7F3] p-6 rounded-2xl shadow-2xl max-w-xs border border-[#F8F7F3]/10">
              <div className="font-serif text-4xl font-normal text-[#F8F7F3] mb-1">
                15+ Years
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#94A3B8]">
                Serving Dallas & Oak Cliff Families With Excellence
              </div>
            </div>
          </div>

          {/* Right Narrative & 3 Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="about-reveal font-sans text-lg text-[#5A6472] font-light leading-relaxed mb-12">
              At Illinois Family Dentistry, we believe high-end dental care shouldn’t feel intimidating, cold, or transactional. Located in the heart of Dallas at Illinois and Hampton Plaza, our practice was founded to provide warm, comprehensive, and compassionate oral healthcare for every member of your family.
            </p>

            {/* Three Pillars */}
            <div className="space-y-8 border-t border-[#121820]/10 pt-8">
              {[
                {
                  num: "01",
                  title: "FAMILY FOCUSED CARE",
                  desc: "From toddlers having their first checkup to seniors restoring function, we provide gentle tailored care for all generations under one roof.",
                  icon: HeartHandshake,
                },
                {
                  num: "02",
                  title: "MODERN CLINICAL EXCELLENCE",
                  desc: "We utilize advanced digital imaging, gentle techniques, and tooth-colored materials for optimal long-term oral health.",
                  icon: Shield,
                },
                {
                  num: "03",
                  title: "PERSONAL ATTENTION & COMFORT",
                  desc: "We listen first. No pressure, no unnecessary treatments — just honest advice, clear pricing, and flexible appointment hours.",
                  icon: Smile,
                },
              ].map((pillar) => (
                <div
                  key={pillar.num}
                  className="about-reveal group flex flex-col sm:flex-row items-start gap-6 p-6 rounded-xl hover:bg-[#EFECE6] transition-colors duration-300"
                >
                  <span className="font-serif text-3xl font-normal text-[#2563EB] shrink-0">
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="font-sans text-sm uppercase tracking-widest font-bold text-[#121820] mb-2 flex items-center gap-2">
                      <pillar.icon className="w-4 h-4 text-[#2563EB]" />
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-[#5A6472] font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
