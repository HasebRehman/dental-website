"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";
import { images } from "@/data/images";

export default function SmileTransformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let positionPercentage = (x / rect.width) * 100;
    if (positionPercentage < 0) positionPercentage = 0;
    if (positionPercentage > 100) positionPercentage = 100;
    setSliderPosition(positionPercentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section
      id="transformations"
      className="py-24 md:py-36 bg-[#EFECE6] border-b border-[#121820]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F7F3] border border-[#121820]/10 text-xs font-semibold uppercase tracking-widest text-[#5A6472] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Interactive Smile Makeovers</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121820] tracking-tight">
            SEE THE DIFFERENCE <br />
            <span className="italic text-[#2563EB]">CONFIDENCE CAN MAKE.</span>
          </h2>

          <p className="font-sans text-sm text-[#5A6472] font-light max-w-lg mx-auto mt-4">
            Drag the handle left or right to explore real smile transformations achieved through our cosmetic whitening, veneers, and Invisalign procedures.
          </p>
        </div>

        {/* Before / After Interactive Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F7F3] select-none cursor-ew-resize touch-none"
          >
            {/* AFTER Image (Base layer full width) */}
            <Image
              src={images.smile.after}
              alt="Smile Transformation After Dental Treatment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
            {/* AFTER Label */}
            <div className="absolute top-6 right-6 z-10 px-4 py-1.5 rounded-full bg-[#121820]/80 backdrop-blur-md text-[#F8F7F3] text-xs font-bold uppercase tracking-widest pointer-events-none shadow-md">
              AFTER • RADIANT SMILE
            </div>

            {/* BEFORE Image (Clipped top layer) */}
            <div
              className="absolute inset-0 overflow-hidden z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-full h-full min-w-[100vw] lg:min-w-[896px]">
                <Image
                  src={images.smile.before}
                  alt="Smile Transformation Before Dental Treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  priority
                />
              </div>
              {/* BEFORE Label */}
              <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-[#121820]/80 backdrop-blur-md text-[#F8F7F3] text-xs font-bold uppercase tracking-widest pointer-events-none shadow-md">
                BEFORE
              </div>
            </div>

            {/* Divider Line & Drag Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-[#F8F7F3] shadow-2xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#121820] text-[#F8F7F3] border-2 border-[#F8F7F3] shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-[#F8F7F3]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#5A6472] font-semibold uppercase tracking-widest mt-6 px-2">
            <span>← Slide Left For Before</span>
            <span>Slide Right For After →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
