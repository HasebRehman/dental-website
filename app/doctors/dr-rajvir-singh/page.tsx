"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Award, Heart, CheckCircle2, Phone, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DrRajPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] relative">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-44 pb-16 bg-[#43ACE0] text-[#FFFFFF] relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4A261]/15 rounded-full blur-[140px] pointer-events-none" />

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
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#43ACE0]/35 via-[#5FCAEF]/25 to-[#F4A261]/35 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

              <div className="relative aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] w-full rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(67,172,224,0.35)] border-4 border-[#FFFFFF]">
                <Image
                  src="/img/Dr.-Raj-Family.jpg"
                  alt="Dr. Rajvir Singh Dr. Raj Dentist in Dallas TX"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent" />
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
                <Sparkles className="w-3.5 h-3.5 text-[#F4A261]" />
                <span>Dallas Family Dentist</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-3">
                Dr. Rajvir Singh
              </h1>
              <p className="font-sans text-base sm:text-lg font-extrabold text-[#F4A261] uppercase tracking-wider mb-6">
                &quot;Dr. Raj&quot; • Serving Dallas, TX & Surrounding Areas
              </p>

              <blockquote className="font-serif italic text-base sm:text-lg text-[#FFFFFF] border-l-4 border-[#F4A261] pl-4 py-2 mb-8 bg-[#FFFFFF]/10 rounded-r-2xl">
                &ldquo;Every smile has a story. Our goal is to make sure yours is healthy, confident, and filled with comfort.&rdquo;
              </blockquote>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Visit with Dr. Raj</span>
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
              <span>Meet Dr. Rajvir Singh</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#000000] leading-relaxed font-normal">
              Dr. Rajvir Singh grew up in Arlington, TX, and is a Dallas local. As a native Texan, he uses his love for dentistry to help patients in his community of all ages by ensuring everyone has a smile they can be proud of. He looks forward to seeing you at your next visit, so he can help make a difference in your dental needs!
            </p>
          </motion.div>

          {/* Card 2: Inspiration into Dentistry */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#5FCAEF]/10 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#43ACE0]/20"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[#000000] font-bold mb-4 flex items-center gap-3">
              <Heart className="w-7 h-7 text-[#F4A261]" />
              <span>Inspiration into Dentistry</span>
            </h2>
            <p className="font-sans text-base text-[#000000] leading-relaxed font-normal">
              Coming from a hard-working immigrant family, from a young age Dr. Singh was instilled with values of hard work and honesty. He knew he wanted to pursue a career in the healthcare field and combine his passion with his skillset to help those in need. As a result, he majored in Biology at the University of Texas at Arlington and decided to follow his dreams in dentistry. Dentistry proved to be the perfect embodiment of combining Dr. Singh’s strong work ethic with the ability to directly use his hands to help put a smile on his patients’ faces.
            </p>
          </motion.div>

          {/* Card 3: Academics & Memberships */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#5FCAEF]/10 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#43ACE0]/20"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[#000000] font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-[#43ACE0]" />
              <span>Academics & Advanced Training</span>
            </h2>
            <p className="font-sans text-base text-[#000000] leading-relaxed font-normal mb-6">
              Dr. Singh chose to begin his academic studies at the University of Texas at Arlington. After obtaining his bachelor’s degree, he went on to complete dental school at Nova Southeastern University in Florida. He has completed advanced training in implants, root canal therapy, and Invisalign, along with many other fields of dentistry.
            </p>

            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#43ACE0]/20 shadow-xs">
              <h3 className="font-sans text-xs uppercase tracking-widest font-extrabold text-[#000000] mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F4A261]" />
                <span>Today, he is an active member of:</span>
              </h3>
              <ul className="space-y-3 font-sans text-sm sm:text-base font-extrabold text-[#000000]">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4A261]" />
                  <span>Academy of General Dentistry</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4A261]" />
                  <span>American Dental Association</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4A261]" />
                  <span>Texas Dental Association</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 4: Time Spent Outside of Dentistry */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#5FCAEF]/10 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#43ACE0]/20"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[#000000] font-bold mb-4 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-[#F4A261]" />
              <span>Time Spent Outside of Dentistry</span>
            </h2>
            <p className="font-sans text-base text-[#000000] leading-relaxed font-normal">
              Dr. Singh enjoys spending time with his wife and their two dogs: a Great Pyrenees and a Chow Shepherd. When he’s not hard at work fixing smiles in the office, Dr. Singh is always eager to visit new cities, try new foods, and explore natural landscapes through hiking. Dr. Singh is an avid sports fan as well and enjoys keeping up with the latest in sports, particularly football and basketball.
            </p>
          </motion.div>

          {/* Bottom Appointment Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
            className="bg-[#43ACE0] rounded-3xl p-8 sm:p-12 text-[#FFFFFF] shadow-2xl text-center relative overflow-hidden"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3 text-[#FFFFFF]">
              Schedule Your Visit with Dr. Raj
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#FFFFFF]/90 max-w-xl mx-auto mb-8 font-normal">
              Experiencing tooth pain or due for a routine checkup? Dr. Raj and our caring Dallas team are here to help you smile with confidence!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-lg"
              >
                Book Appointment Online
              </Link>
              <a
                href="tel:4698091919"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
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
