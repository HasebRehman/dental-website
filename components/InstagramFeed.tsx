"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const galleryPhotos = [
  { id: "1", image: "/img/off-1.jpg", alt: "Patient Smile 1" },
  { id: "2", image: "/img/off-2.jpg", alt: "Patient Smile 2" },
  { id: "3", image: "/img/off-3.jpg", alt: "Patient Smile 3" },
  { id: "4", image: "/img/off-4.jpg", alt: "Patient Smile 4" },
  { id: "5", image: "/img/off-5.jpg", alt: "Patient Smile 5" },
  { id: "6", image: "/img/off-6.jpg", alt: "Patient Smile 6" },
];

export default function InstagramFeed() {
  return (
    <section id="gallery" className="py-10 md:py-28 bg-[#FFFFFF] text-[#000000] border-t border-[#E2E8F0]">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-20">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1B69B6] block mb-1">
              FOLLOW OUR
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight">
              DALLAS SMILES
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#64748B] mt-1 font-normal">
              See real smiles from real patients.
            </p>
          </div>

          <Link
            href="/office-tour"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFFFF] border border-[#1B69B6] text-[#1B69B6] text-xs font-extrabold tracking-wide hover:bg-[#1B69B6] hover:text-[#FFFFFF] transition-colors shadow-xs shrink-0"
          >
            <span>View Smile Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Square Photos Grid in 1 Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-xs border border-[#E2E8F0] cursor-pointer"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1B69B6]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#FFFFFF]">
                <InstagramIcon className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
