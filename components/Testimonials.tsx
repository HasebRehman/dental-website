"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeTestimonial = testimonialsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-36 bg-[#121820] text-[#F8F7F3] relative overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F7F3]/10 border border-[#F8F7F3]/15 text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Verified Patient Experiences</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight">
              PATIENT <span className="italic text-[#2563EB]">STORIES</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous patient story"
              className="w-12 h-12 rounded-full border border-[#F8F7F3]/20 flex items-center justify-center hover:bg-[#F8F7F3] hover:text-[#121820] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-[#94A3B8] px-2">
              0{currentIndex + 1} / 0{testimonialsData.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next patient story"
              className="w-12 h-12 rounded-full border border-[#F8F7F3]/20 flex items-center justify-center hover:bg-[#F8F7F3] hover:text-[#121820] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Editorial Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[#1A222D] p-8 md:p-14 rounded-3xl border border-[#F8F7F3]/10 shadow-2xl relative"
            >
              <Quote className="w-12 h-12 text-[#2563EB]/40 absolute top-8 right-8" />

              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-8">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#D97706] text-[#D97706]"
                  />
                ))}
                <span className="ml-2 text-xs uppercase tracking-widest font-semibold text-[#94A3B8]">
                  5.0 Exceptional Care
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F8F7F3] leading-snug mb-10 font-normal">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>

              {/* Author Footer */}
              <div className="flex flex-wrap items-center justify-between border-t border-[#F8F7F3]/10 pt-6 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-base font-bold text-[#F8F7F3]">
                      {activeTestimonial.name}
                    </span>
                    {activeTestimonial.verified && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-[10px] uppercase font-semibold">
                        <CheckCircle className="w-3 h-3" /> Verified Patient
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">
                    {activeTestimonial.location}
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-[#F8F7F3]/5 border border-[#F8F7F3]/10 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                  Treatment: {activeTestimonial.treatment}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
