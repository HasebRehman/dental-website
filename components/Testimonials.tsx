"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const patientReviews = [
  {
    id: "review-1",
    author: "Jessica M.",
    date: "2 weeks ago",
    content: "The team is amazing! They made me feel comfortable and explained every step. Best dental experience ever.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "review-2",
    author: "Michael T.",
    date: "1 month ago",
    content: "Professional, friendly, and gentle. My whole family comes here for checkups and we highly recommend Dr. Raj & team!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "review-3",
    author: "Sarah L.",
    date: "3 weeks ago",
    content: "I had cosmetic whitening & aligners done and the results exceeded my expectations. Thank you Illinois Family Dentistry!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "review-4",
    author: "David R.",
    date: "1 week ago",
    content: "Had a severe toothache on Saturday morning and they saw me immediately. Clean clinic and zero pain root canal treatment!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "review-5",
    author: "Maria G.",
    date: "1 month ago",
    content: "¡Excelente atención en español! Mis hijos se sintieron muy cómodos con la Dra. Pham. 100% recomendados.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "review-6",
    author: "Robert K.",
    date: "2 months ago",
    content: "They accept PPO insurance and offered flexible CareCredit payment options. Very honest and transparent pricing.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(patientReviews.length / 3));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const totalPages = Math.ceil(patientReviews.length / 3);
  const currentReviews = patientReviews.slice(activeIndex * 3, activeIndex * 3 + 3);

  return (
    <section id="testimonials" className="py-10 md:py-28 bg-[#FFFFFF] text-[#000000] border-t border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-10">
          
          {/* Left Column (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-4 flex flex-col justify-center text-left"
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight leading-tight mb-6">
              PATIENT <br />
              <span className="text-[#1B69B6]">STORIES</span>
            </h2>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-[#EBF3FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] shadow-xs">
                <Quote className="w-8 h-8 fill-[#1B69B6]" />
              </div>

              {/* Prev / Next Manual Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages)}
                  className="w-10 h-10 rounded-full bg-[#F1F5F9] text-[#0B2545] hover:bg-[#1B69B6] hover:text-[#FFFFFF] transition-colors flex items-center justify-center cursor-pointer border border-[#CBD5E1]"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % totalPages)}
                  className="w-10 h-10 rounded-full bg-[#F1F5F9] text-[#0B2545] hover:bg-[#1B69B6] hover:text-[#FFFFFF] transition-colors flex items-center justify-center cursor-pointer border border-[#CBD5E1]"
                  aria-label="Next reviews"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Auto-Rotating 3-Card Carousel (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {currentReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      {/* Top Bar: Golden Stars & Google Logo */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-[#FFB800]">
                          <Star className="w-4 h-4 fill-[#FFB800]" />
                          <Star className="w-4 h-4 fill-[#FFB800]" />
                          <Star className="w-4 h-4 fill-[#FFB800]" />
                          <Star className="w-4 h-4 fill-[#FFB800]" />
                          <Star className="w-4 h-4 fill-[#FFB800]" />
                        </div>
                        {/* Google Icon */}
                        <div className="w-5 h-5 rounded-full bg-[#FFFFFF] border border-[#CBD5E1] flex items-center justify-center text-[10px] font-bold text-[#4285F4] shadow-xs">
                          G
                        </div>
                      </div>

                      <p className="font-sans text-xs text-[#334155] font-normal leading-relaxed mb-6">
                        &ldquo;{review.content}&rdquo;
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 border-t border-[#E2E8F0] pt-4">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#CBD5E1]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-sans text-xs font-extrabold text-[#0B2545]">
                          {review.author}
                        </div>
                        <div className="font-sans text-[11px] text-[#94A3B8]">
                          {review.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Interactive Clickable Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === i
                  ? "w-8 h-2.5 bg-[#1B69B6]"
                  : "w-2.5 h-2.5 bg-[#CBD5E1] hover:bg-[#1B69B6]/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
