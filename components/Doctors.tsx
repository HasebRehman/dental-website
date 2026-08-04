"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Award, MessageSquare } from "lucide-react";
import { images } from "@/data/images";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const doctorsData = [
  {
    id: "dr-rajvir-singh",
    name: "Dr. Rajvir Singh",
    specialty: "General & Family Dentistry",
    experience: "11+ Years Clinical Experience",
    education: "DDS, Nova Southeastern University",
    languages: "Speaks English, Punjabi, Urdu",
    image: images.doctorsTeam.drRaj,
    link: "/doctors/dr-rajvir-singh",
  },
  {
    id: "dr-tiffany-pham",
    name: "Dr. Tiffany Pham",
    specialty: "Pediatric & Family Care",
    experience: "10+ Years Dedicated Experience",
    education: "DDS, UTHealth School of Dentistry",
    languages: "Speaks English, Spanish",
    image: images.doctorsTeam.drPham,
    link: "/doctors/dr-tiffany-pham",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-10 md:py-28 bg-[#FFFFFF] text-[#000000] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-4 flex flex-col justify-center text-left"
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight leading-tight mb-6">
              MEET OUR <br />
              <span className="text-[#1B69B6]">DOCTORS</span>
            </h2>

            <Link
              href="/meet-the-team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFFFF] border border-[#1B69B6] text-[#1B69B6] text-xs font-extrabold tracking-wide hover:bg-[#1B69B6] hover:text-[#FFFFFF] transition-colors shadow-xs w-fit"
            >
              <span>View All Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column: 2 Side-by-Side Doctor Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {doctorsData.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0] shadow-sm flex flex-col justify-between group"
              >
                <div className="flex items-start gap-4">
                  {/* Doctor Avatar Photo */}
                  <div className="relative w-24 h-32 rounded-xl overflow-hidden shrink-0 border border-[#E2E8F0] bg-[#EBF3FF]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Doctor Info Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-lg font-extrabold text-[#0B2545] leading-snug">
                      {doctor.name}
                    </h3>
                    <p className="font-sans text-xs font-bold text-[#1B69B6] mb-3">
                      {doctor.specialty}
                    </p>

                    <div className="space-y-1.5 font-sans text-xs text-[#64748B]">
                      <div className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                        <span className="truncate">{doctor.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#1B69B6] shrink-0" />
                        <span className="truncate">{doctor.education}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#1B69B6] shrink-0" />
                        <span className="truncate">{doctor.languages}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Icons & View Bio Link */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0] mt-4 text-[#94A3B8]">
                  <div className="flex items-center gap-2.5">
                    <a href="#" className="hover:text-[#1B69B6] transition-colors p-1">
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a href="#" className="hover:text-[#1B69B6] transition-colors p-1">
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a href="#" className="hover:text-[#1B69B6] transition-colors p-1">
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <Link
                    href={doctor.link}
                    className="text-xs font-extrabold text-[#1B69B6] hover:text-[#FF7A00] transition-colors"
                  >
                    View Bio →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
