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
      className="py-24 md:py-36 bg-[#EEF2F6] border-b border-[#0F2C59]/10 overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FA] border border-[#0F2C59]/10 text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Smile Makeovers</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0F2C59] tracking-tight">
            SEE THE DIFFERENCE <br />
            <span className="italic text-[#FF6B00]">CONFIDENCE CAN MAKE.</span>
          </h2>

          <p className="font-sans text-sm text-[#334155] font-normal max-w-lg mx-auto mt-3">
            Drag the divider handle to explore actual smile transformations achieved through our cosmetic whitening, veneers, and Invisalign procedures.
          </p>
        </div>

        {/* Before / After Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] select-none cursor-ew-resize touch-none"
          >
            {/* AFTER */}
            <Image
              src={images.smile.after}
              alt="Smile Transformation After Dental Treatment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
            <div className="absolute top-6 right-6 z-10 px-4 py-1.5 rounded-full bg-[#0F2C59]/90 backdrop-blur-md text-[#F8F9FA] text-xs font-bold uppercase tracking-widest pointer-events-none shadow-md">
              AFTER • RADIANT SMILE
            </div>

            {/* BEFORE */}
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
              <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-[#FF6B00]/90 backdrop-blur-md text-[#FFFFFF] text-xs font-bold uppercase tracking-widest pointer-events-none shadow-md">
                BEFORE
              </div>
            </div>

            {/* Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-[#FFFFFF] shadow-2xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FF6B00] text-[#FFFFFF] border-2 border-[#FFFFFF] shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#0F2C59] font-bold uppercase tracking-widest mt-5 px-2">
            <span>← Slide Left For Before</span>
            <span>Slide Right For After →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
