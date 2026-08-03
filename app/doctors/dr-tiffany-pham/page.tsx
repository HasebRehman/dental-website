"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Award, Heart, CheckCircle2, Phone, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DrPhamPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] relative">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-44 pb-16 bg-[#1B69B6] text-[#FFFFFF] relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Photo with Multi-Layer Ambient Glow Drop Shadow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="lg:col-span-5 relative group"
            >
              {/* Backlight Ambient Glow Halo */}
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#1B69B6]/35 via-[#93C5FD]/25 to-[#FF7A00]/35 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

              <div className="relative aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF]">
                <Image
                  src="/img/Dr.-Pham-Family.jpg"
                  alt="Dr. Tiffany Pham Dentist in Dallas TX"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Right Intro Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Dallas Family Dentist</span>
              </div>

              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FFFFFF] mb-3">
                Dr. Tiffany Pham
              </h1>
              <p className="font-sans text-base sm:text-lg font-extrabold text-[#93C5FD] uppercase tracking-wider mb-6">
                Pediatric & Family Dentistry Specialist • Dallas, TX
              </p>

              <blockquote className="font-serif italic text-base sm:text-lg text-[#FFFFFF] border-l-4 border-[#F4A261] pl-4 py-2 mb-8 bg-[#FFFFFF]/10 rounded-r-2xl">
                &ldquo;Creating a comfortable, stress-free environment for patients of all ages—especially children—is the heart of my practice.&rdquo;
              </blockquote>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Visit with Dr. Pham</span>
                </Link>
                <a
                  href="tel:4698091919"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F4A261]" />
                  <span>469-809-1919</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Editorial Content Section with Scroll Reveal */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          {/* Card 1: Overview */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#5FCAEF]/10 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#43ACE0]/20"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[#000000] font-bold mb-4 flex items-center gap-3">
              <span className="w-3 h-8 bg-[#F4A261] rounded-full inline-block" />
              <span>Meet Dr. Tiffany Pham</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#000000] leading-relaxed font-normal">
              Dr. Tiffany Pham is a highly accomplished dentist known for her dedication to providing exceptional oral care. She earned her degree with honors from the UTHealth School of Dentistry, showcasing her commitment to academic excellence and proficiency in the field. Dr. Pham is passionate about working with patients of all ages, with a special focus on creating a positive dental experience for children.
            </p>
          </motion.div>

          {/* Card 2: Patient Well-Being & Environment */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#5FCAEF]/10 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#43ACE0]/20"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[#000000] font-bold mb-4 flex items-center gap-3">
              <Heart className="w-7 h-7 text-[#F4A261]" />
              <span>Patient Well-Being & Gentle Approach</span>
            </h2>
            <p className="font-sans text-base text-[#000000] leading-relaxed font-normal">
              Her professional journey is characterized by a genuine concern for her patient&apos;s well-being, ensuring a comfortable and stress-free environment during dental procedures. Dr. Pham&apos;s expertise extends beyond clinical excellence to the ability to connect with individuals of diverse age groups, making her a sought-after practitioner for families.
            </p>
          </motion.div>

          {/* Card 3: Personal Life & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#5FCAEF]/10 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#43ACE0]/20"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[#000000] font-bold mb-4 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-[#F4A261]" />
              <span>Outside the Clinic</span>
            </h2>
            <p className="font-sans text-base text-[#000000] leading-relaxed font-normal">
              In addition to her thriving dental practice, Dr. Pham is an avid tennis player, finding joy and relaxation on the court. However, her greatest joy comes from her role as a mother to a wonderful young daughter. Balancing her professional success with a fulfilling personal life, Dr. Pham embodies a holistic approach to health and happiness, enriching both her practice and the community she serves.
            </p>
          </motion.div>

          {/* Bottom Appointment Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
            className="bg-gradient-to-r from-[#0B2545] via-[#1B69B6] to-[#0B2545] rounded-3xl p-8 sm:p-12 text-[#FFFFFF] shadow-2xl text-center relative overflow-hidden border border-[#1B69B6]/40"
          >
            <h2 className="font-sans text-3xl sm:text-4xl font-black mb-3 text-[#FFFFFF] tracking-tight">
              Schedule Your Visit with <span className="text-[#93C5FD]">Dr. Pham</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#FFFFFF]/90 max-w-xl mx-auto mb-8 font-normal">
              Looking for a gentle dentist for your children or family? Dr. Pham and our Dallas team are excited to meet you!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-lg"
              >
                Book Appointment Online
              </Link>
              <a
                href="tel:4698091919"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors"
              >
                Call 469-809-1919
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
