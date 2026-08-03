"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [pageIndex, setPageIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const handleNext = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentStories = testimonialsData.slice(
    pageIndex * itemsPerPage,
    (pageIndex + 1) * itemsPerPage
  );

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-[#43ACE0] text-[#FFFFFF] relative overflow-hidden border-b border-[#FFFFFF]/20"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4A261]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#FFFFFF]">
              PATIENT <span className="italic text-[#F4A261]">STORIES</span>
            </h2>
            <p className="font-sans text-base text-[#FFFFFF]/90 mt-3 font-normal">
              Read real reviews from patients and families across Dallas & Oak Cliff.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous 3 stories"
              className="w-12 h-12 rounded-full border border-[#FFFFFF]/30 bg-[#FFFFFF]/10 flex items-center justify-center text-[#FFFFFF] hover:bg-[#F4A261] hover:border-[#F4A261] transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 px-3">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPageIndex(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === pageIndex
                      ? "w-8 bg-[#F4A261]"
                      : "w-2.5 bg-[#FFFFFF]/40 hover:bg-[#FFFFFF]/80"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next 3 stories"
              className="w-12 h-12 rounded-full border border-[#FFFFFF]/30 bg-[#FFFFFF]/10 flex items-center justify-center text-[#FFFFFF] hover:bg-[#F4A261] hover:border-[#F4A261] transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Stories Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {currentStories.map((story) => (
              <div
                key={story.id}
                className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#FFFFFF]/30 shadow-xl flex flex-col justify-between h-full hover:border-[#F4A261] transition-all duration-300 text-[#000000]"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F4A261] text-[#F4A261]"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-medium">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-[#43ACE0]/20 pt-5 flex items-center justify-between mt-4">
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-wider font-extrabold text-[#000000]">
                      {story.name}
                    </h3>
                    <p className="text-[11px] text-[#000000]/70 mt-0.5 font-normal">
                      {story.location}
                    </p>
                  </div>
                  <Quote className="w-5 h-5 text-[#F4A261] shrink-0" />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
