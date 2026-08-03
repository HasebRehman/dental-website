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
      <section className="pt-44 pb-20 bg-[#43ACE0] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4A261]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>Dallas Family Dental Practice</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-4">
              CONTACT <span className="text-[#F4A261]">ILLINOIS FAMILY DENTISTRY</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
              We are conveniently located in Dallas at Illinois & Hampton Plaza (next to El Rancho Supermercado). We look forward to welcoming your family!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${siteData.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call 469-809-1919</span>
              </a>
              <a
                href={siteData.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#F4A261]" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Practice Details with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Info Card */}
            <div className="relative group">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#43ACE0]/20 via-[#5FCAEF]/25 to-[#F4A261]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="bg-[#5FCAEF]/10 rounded-3xl p-8 sm:p-10 border border-[#43ACE0]/20 shadow-[0_20px_50px_rgba(67,172,224,0.2)]">
                <h2 className="font-serif text-2xl font-bold text-[#000000] mb-6 flex items-center gap-2.5">
                  <Sparkles className="w-6 h-6 text-[#F4A261]" />
                  <span>Practice Information</span>
                </h2>

                <ul className="space-y-6 text-xs sm:text-sm font-sans">
                  {/* Address */}
                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#F4A261] shrink-0 mt-0.5 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-extrabold tracking-wider text-[#000000] mb-1">
                        LOCATION & ADDRESS
                      </div>
                      <div className="font-extrabold text-[#000000] text-base mb-0.5">
                        Illinois Family Dentistry
                      </div>
                      <p className="text-[#000000] leading-relaxed font-normal">
                        2300 W Illinois Ave, Dallas, TX 75224
                      </p>
                      <p className="text-[11px] text-[#000000]/70 mt-0.5">
                        Illinois & Hampton Plaza (Next to El Rancho Supermercado)
                      </p>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#43ACE0] shrink-0 mt-0.5 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-extrabold tracking-wider text-[#000000] mb-1">
                        PHONE NUMBER
                      </div>
                      <a
                        href={`tel:${siteData.phoneRaw}`}
                        className="font-extrabold text-[#43ACE0] text-lg hover:underline block"
                      >
                        469-809-1919
                      </a>
                      <span className="text-[11px] text-[#000000]/70">
                        Call or text for immediate scheduling
                      </span>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#F4A261] shrink-0 mt-0.5 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-extrabold tracking-wider text-[#000000] mb-1">
                        EMAIL ADDRESS
                      </div>
                      <a
                        href={`mailto:${siteData.email}`}
                        className="font-extrabold text-[#000000] hover:text-[#43ACE0] transition-colors block"
                      >
                        {siteData.email}
                      </a>
                    </div>
                  </li>

                  {/* Languages */}
                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#43ACE0] shrink-0 mt-0.5 shadow-xs">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-extrabold tracking-wider text-[#000000] mb-1">
                        LANGUAGES SPOKEN
                      </div>
                      <div className="font-extrabold text-[#000000]">
                        English & Hablamos Español
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#43ACE0] text-[#FFFFFF] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2.5">
                <Clock className="w-6 h-6 text-[#F4A261]" />
                <span>Operating Hours</span>
              </h2>

              <ul className="space-y-3.5 font-sans text-xs sm:text-sm">
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
                  <span className="font-extrabold text-[#F4A261]">10:00 AM – 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-[#FFFFFF]/80">Sunday</span>
                  <span className="font-bold text-[#FFFFFF]">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Interactive Appointment Request Form with Glow Shadow & Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 relative group"
          >
            {/* Backlight Ambient Glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#43ACE0]/20 via-[#5FCAEF]/25 to-[#F4A261]/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

            <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border border-[#43ACE0]/20 shadow-[0_25px_60px_rgba(67,172,224,0.25)]">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F4A261] block mb-1">
                  Online Scheduling
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#000000] font-bold">
                  Request an Appointment
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#000000] mt-2 font-normal">
                  Fill out the quick form below and our staff will contact you shortly to confirm your visit.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-[#5FCAEF]/15 border border-[#43ACE0]/30 p-8 rounded-2xl text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#F4A261] mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-[#000000] mb-2">
                    Appointment Request Received!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                    Thank you, <span className="font-bold text-[#000000]">{formData.name}</span>! Our Dallas team will call or text you at <span className="font-bold text-[#43ACE0]">{formData.phone}</span> shortly to confirm your time.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F4A261] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maria Garcia"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 text-xs text-[#000000] font-medium focus:outline-none focus:ring-2 focus:ring-[#43ACE0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (469) 809-1919"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 text-xs text-[#000000] font-medium focus:outline-none focus:ring-2 focus:ring-[#43ACE0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 text-xs text-[#000000] font-medium focus:outline-none focus:ring-2 focus:ring-[#43ACE0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-2">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 text-xs text-[#000000] font-medium focus:outline-none focus:ring-2 focus:ring-[#43ACE0]"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 text-xs text-[#000000] font-medium focus:outline-none focus:ring-2 focus:ring-[#43ACE0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-2">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 text-xs text-[#000000] font-medium focus:outline-none focus:ring-2 focus:ring-[#43ACE0]"
                      >
                        <option value="Morning">Morning (10 AM – 12 PM)</option>
                        <option value="Afternoon">Afternoon (1 PM – 4 PM)</option>
                        <option value="Evening">Evening (4 PM – 7 PM)</option>
                        <option value="Saturday">Saturday (10 AM – 2 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-2">
                      Additional Notes or Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Let us know if you have any dental pain, specific insurance questions, or preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 text-xs text-[#000000] font-medium focus:outline-none focus:ring-2 focus:ring-[#43ACE0]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F4A261] transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
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
