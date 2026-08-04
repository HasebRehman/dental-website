"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle2, Sparkles, Navigation, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/data/siteData";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Exam & Cleaning",
    preferredDate: "",
    preferredTime: "Morning",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] relative">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-32 sm:pt-44 pb-10 sm:pb-20 bg-[#1B69B6] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[9px] sm:text-xs font-extrabold uppercase tracking-wider text-[#FFFFFF] mb-3 sm:mb-4 w-fit mx-auto">
              <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#FF7A00] shrink-0" />
              <span>Dallas Family Dental Practice</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FFFFFF] mb-3 sm:mb-4">
              CONTACT <span className="text-[#93C5FD]">ILLINOIS FAMILY DENTISTRY</span>
            </h1>

            <p className="font-sans text-xs sm:text-base md:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-5 sm:mb-8">
              We are conveniently located in Dallas at Illinois & Hampton Plaza (next to El Rancho Supermercado). We look forward to welcoming your family!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-[220px] sm:max-w-none mx-auto">
              <a
                href={`tel:${siteData.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-md"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Call 469-809-1919</span>
              </a>
              <a
                href={siteData.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F4A261]" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column (5 cols): Practice Details */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            {/* Contact Info Card */}
            <div className="relative group">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#1B69B6]/15 via-[#93C5FD]/20 to-[#FF7A00]/15 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-[#E2E8F0] shadow-md">
                <h2 className="font-sans text-xl sm:text-2xl font-black text-[#0B2545] mb-4 sm:mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7A00]" />
                  <span>Practice Information</span>
                </h2>

                <ul className="space-y-4 sm:space-y-6 text-xs sm:text-sm font-sans">
                  {/* Address */}
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F0F6FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#FF7A00] shrink-0 mt-0.5 shadow-xs">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-[#0B2545] mb-0.5 sm:mb-1">
                        LOCATION & ADDRESS
                      </div>
                      <div className="font-black text-[#0B2545] text-sm sm:text-base mb-0.5">
                        Illinois Family Dentistry
                      </div>
                      <p className="text-[#475569] leading-relaxed font-normal">
                        2300 W Illinois Ave, Dallas, TX 75224
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-[#64748B] mt-0.5">
                        Illinois & Hampton Plaza (Next to El Rancho Supermercado)
                      </p>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F0F6FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] shrink-0 mt-0.5 shadow-xs">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-[#0B2545] mb-0.5 sm:mb-1">
                        PHONE NUMBER
                      </div>
                      <a
                        href={`tel:${siteData.phoneRaw}`}
                        className="font-black text-[#1B69B6] text-base sm:text-lg hover:underline block"
                      >
                        469-809-1919
                      </a>
                      <span className="text-[10px] sm:text-[11px] text-[#64748B]">
                        Call or text for immediate scheduling
                      </span>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F0F6FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#FF7A00] shrink-0 mt-0.5 shadow-xs">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-[#0B2545] mb-0.5 sm:mb-1">
                        EMAIL ADDRESS
                      </div>
                      <a
                        href={`mailto:${siteData.email}`}
                        className="font-bold text-[#0B2545] hover:text-[#1B69B6] transition-colors block text-xs sm:text-sm"
                      >
                        {siteData.email}
                      </a>
                    </div>
                  </li>

                  {/* Languages */}
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F0F6FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] shrink-0 mt-0.5 shadow-xs">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-[#0B2545] mb-0.5 sm:mb-1">
                        LANGUAGES SPOKEN
                      </div>
                      <div className="font-extrabold text-[#0B2545] text-xs sm:text-sm">
                        English & Hablamos Español
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-gradient-to-br from-[#0B2545] via-[#1B69B6] to-[#0B2545] text-[#FFFFFF] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-xl border border-[#1B69B6]/40 relative overflow-hidden">
              <h2 className="font-sans text-xl sm:text-2xl font-black mb-4 sm:mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7A00]" />
                <span>Operating Hours</span>
              </h2>

              <ul className="space-y-3 font-sans text-xs sm:text-sm">
                <li className="flex justify-between border-b border-[#FFFFFF]/20 pb-2">
                  <span className="font-semibold text-[#FFFFFF]/80">Monday</span>
                  <span className="font-extrabold text-[#FFFFFF]">1:00 PM – 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-[#FFFFFF]/20 pb-2">
                  <span className="font-semibold text-[#FFFFFF]/80">Tuesday – Friday</span>
                  <span className="font-extrabold text-[#FFFFFF]">10:00 AM – 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-[#FFFFFF]/20 pb-2">
                  <span className="font-semibold text-[#FFFFFF]/80">Saturday</span>
                  <span className="font-extrabold text-[#FF7A00]">10:00 AM – 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-[#FFFFFF]/80">Sunday</span>
                  <span className="font-bold text-[#FFFFFF]">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Interactive Appointment Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 relative group"
          >
            {/* Backlight Ambient Glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#1B69B6]/15 via-[#93C5FD]/20 to-[#FF7A00]/15 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

            <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-[#E2E8F0] shadow-xl">
              <div className="mb-6 sm:mb-8">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-[#FF7A00] block mb-1">
                  Online Scheduling
                </span>
                <h2 className="font-sans text-2xl sm:text-4xl text-[#0B2545] font-black tracking-tight">
                  Request an Appointment
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#64748B] mt-1.5 font-normal">
                  Fill out the quick form below and our staff will contact you shortly to confirm your visit.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-[#F0F6FF] border border-[#1B69B6]/20 p-6 sm:p-8 rounded-2xl text-center">
                  <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-[#FF7A00] mx-auto mb-3" />
                  <h3 className="font-sans text-xl sm:text-2xl font-black text-[#0B2545] mb-2">
                    Appointment Request Received!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 font-normal">
                    Thank you, <span className="font-bold text-[#0B2545]">{formData.name}</span>! Our Dallas team will call or text you at <span className="font-bold text-[#1B69B6]">{formData.phone}</span> shortly to confirm your time.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 rounded-full bg-[#1B69B6] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider hover:bg-[#FF7A00] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0B2545] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maria Garcia"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0B2545] font-medium focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0B2545] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (469) 809-1919"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0B2545] font-medium focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0B2545] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0B2545] font-medium focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0B2545] mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0B2545] font-medium focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                      >
                        <option value="General Exam & Cleaning">Dental Exams & Cleanings</option>
                        <option value="Children's Dentistry">Children&apos;s Dentistry</option>
                        <option value="Same-Day Emergency">Same-Day Dental Emergency</option>
                        <option value="Invisalign Aligners">Invisalign® Clear Aligners</option>
                        <option value="Crowns & Bridges">Dental Crowns & Bridges</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Root Canal">Root Canal Therapy</option>
                        <option value="Dentures & Implants">Missing Teeth Replacements</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0B2545] mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0B2545] font-medium focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0B2545] mb-1.5">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0B2545] font-medium focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                      >
                        <option value="Morning">Morning (10 AM – 12 PM)</option>
                        <option value="Afternoon">Afternoon (1 PM – 4 PM)</option>
                        <option value="Evening">Evening (4 PM – 7 PM)</option>
                        <option value="Saturday">Saturday (10 AM – 2 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0B2545] mb-1.5">
                      Additional Notes or Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Let us know if you have any dental pain, specific insurance questions, or preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0B2545] font-medium focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider hover:bg-[#1B69B6] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
