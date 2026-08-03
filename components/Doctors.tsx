"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, Award, Quote } from "lucide-react";
import { doctorsData } from "@/data/doctors";

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="py-20 md:py-32 bg-[#FFFFFF] border-b border-[#43ACE0]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5FCAEF]/15 border border-[#43ACE0]/20 text-xs font-bold uppercase tracking-widest text-[#43ACE0] mb-3">
            <Award className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Expert & Compassionate Dallas Dentists</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#000000] font-bold tracking-tight">
            MEET OUR <span className="text-[#43ACE0]">DOCTORS</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#000000] mt-4 font-normal leading-relaxed">
            Our experienced practitioners combine advanced clinical mastery with gentle, personalized care for your entire family.
          </p>
        </motion.div>

        {/* 2 Doctor Cards Grid with Scroll Reveal and Ambient Glow Shadows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {doctorsData.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Backlight Ambient Drop Shadow Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#43ACE0]/20 via-[#5FCAEF]/25 to-[#F4A261]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="bg-[#5FCAEF]/10 rounded-3xl overflow-hidden border border-[#43ACE0]/20 shadow-[0_20px_50px_rgba(67,172,224,0.2)] flex flex-col justify-between hover:shadow-[0_25px_60px_rgba(67,172,224,0.3)] transition-all duration-300 h-full">
                <div>
                  {/* Doctor Portrait Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#43ACE0]/10">
                    <Image
                      src={doc.image}
                      alt={`${doc.name} - Dallas Family Dentist`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent" />

                    {/* Doctor Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
                      <div className="text-xs uppercase font-extrabold tracking-widest text-[#F4A261] mb-1">
                        {doc.subtitle}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                        {doc.name}
                      </h3>
                    </div>
                  </div>

                  {/* Bio Summary & Speciality Highlights */}
                  <div className="p-8">
                    <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                      {doc.bio}
                    </p>

                    <div className="border-t border-[#43ACE0]/15 pt-4 flex items-start gap-3 bg-[#FFFFFF] p-4 rounded-2xl shadow-xs">
                      <Quote className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
                      <p className="font-serif italic text-xs text-[#000000]">
                        &ldquo;{doc.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons Container */}
                <div className="p-8 pt-0 flex flex-col sm:flex-row items-center gap-3.5">
                  <Link
                    href={doc.fullStoryUrl}
                    className="w-full sm:w-1/2 py-3.5 px-6 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest text-center hover:bg-[#F4A261] transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>READ FULL STORY</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full sm:w-1/2 py-3.5 px-6 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest text-center hover:bg-[#000000] transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#FFFFFF]" />
                    <span>BOOK VISIT</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
