"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { doctorsData } from "@/data/doctors";

export default function Doctors() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".doc-card", {
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
      id="doctors"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#F8F7F3] border-b border-[#121820]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#5A6472] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Clinical Expertise & Leadership</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121820] tracking-tight">
              MEET OUR <span className="italic text-[#2563EB]">DOCTORS</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5A6472] max-w-md font-light">
            Our highly trained dentists bring decades of combined experience, continuous education, and a shared passion for compassionate family care.
          </p>
        </div>

        {/* Doctor Profiles Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="doc-card group relative bg-[#EFECE6] rounded-3xl overflow-hidden border border-[#121820]/10 flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121820]/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#F8F7F3]/90 backdrop-blur-md text-[11px] font-semibold uppercase tracking-widest text-[#121820] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#2563EB]" />
                    {doc.education}
                  </div>

                  {/* Bottom Image Name Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-[#F8F7F3]">
                    <h3 className="font-serif text-3xl font-normal group-hover:translate-x-1 transition-transform duration-300">
                      {doc.name}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-[#94A3B8] font-semibold mt-1">
                      {doc.role}
                    </p>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-8">
                  <blockquote className="font-serif italic text-sm text-[#121820] border-l-2 border-[#2563EB] pl-4 mb-6 leading-relaxed">
                    &ldquo;{doc.quote}&rdquo;
                  </blockquote>

                  <p className="font-sans text-xs text-[#5A6472] font-light leading-relaxed mb-6">
                    {doc.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {doc.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#F8F7F3] border border-[#121820]/10 text-[10px] uppercase font-semibold text-[#121820]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0">
                <a
                  href="#appointment"
                  className="w-full py-3.5 rounded-2xl bg-[#121820] text-[#F8F7F3] group-hover:bg-[#2563EB] transition-colors duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold"
                >
                  <span>Book Visit with {doc.name.split(" ")[1]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
