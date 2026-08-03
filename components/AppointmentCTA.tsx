"use client";

import { useState } from "react";
import { Phone, Calendar, Send, CheckCircle2, Sparkles, MapPin, Clock } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function AppointmentCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "General Exam & Cleaning",
    preferredTime: "Morning",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="appointment"
      className="py-20 md:py-32 bg-[#5FCAEF]/10 border-b border-[#43ACE0]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Copy & Fast Direct Phone Call */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#43ACE0]/15 border border-[#43ACE0]/30 text-xs font-extrabold uppercase tracking-widest text-[#43ACE0] mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>SAME-DAY SLOTS RESERVED DAILY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] tracking-tight leading-[1.1] mb-6">
              READY FOR A BRIGHTER, <br />
              <span className="text-[#43ACE0]">HEALTHIER SMILE?</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#000000] font-normal leading-relaxed mb-8">
              Schedule your checkup, emergency visit, or consultation with Dr. Raj & Dr. Pham today. Our staff speaks English & Spanish.
            </p>

            <div className="space-y-4 mb-8 font-sans text-xs sm:text-sm font-bold text-[#000000]">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                <MapPin className="w-5 h-5 text-[#F4A261] shrink-0" />
                <span>2300 W Illinois Ave, Dallas, TX (Illinois & Hampton Plaza)</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                <Clock className="w-5 h-5 text-[#43ACE0] shrink-0" />
                <span>Open Weekdays until 7:00 PM & Saturdays 10:00 AM – 2:00 PM</span>
              </div>
            </div>

            {/* Direct Phone Call Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`tel:${siteData.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F4A261] transition-all duration-300 shadow-xl"
              >
                <Phone className="w-4 h-4 text-[#FFFFFF]" />
                <span>Call 469-809-1919</span>
              </a>
              <span className="text-xs text-[#000000]/70 font-semibold">
                Or fill out the quick request form →
              </span>
            </div>
          </div>

          {/* Right Column (6 cols): Quick 30-Sec Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#43ACE0]/20 shadow-2xl">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F4A261] block mb-1">
                  FAST 30-SECOND REQUEST
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#000000] font-bold">
                  Request Your Visit Online
                </h3>
              </div>

              {formSubmitted ? (
                <div className="bg-[#5FCAEF]/15 border border-[#43ACE0]/30 p-8 rounded-2xl text-center">
                  <CheckCircle2 className="w-14 h-14 text-[#F4A261] mx-auto mb-3" />
                  <h4 className="font-serif text-2xl font-bold text-[#000000] mb-2">
                    Request Sent!
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                    Thank you, <span className="font-bold text-[#000000]">{formData.name}</span>! Our Dallas team will call or text you at <span className="font-bold text-[#43ACE0]">{formData.phone}</span> shortly to confirm your visit.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F4A261] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Carlos Rodriguez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 text-xs text-[#000000] font-medium focus:outline-none focus:ring-2 focus:ring-[#43ACE0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-1.5">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 text-xs text-[#000000] font-medium focus:outline-none focus:ring-2 focus:ring-[#43ACE0]"
                      >
                        <option value="General Exam & Cleaning">Exam & Cleaning</option>
                        <option value="Children's Dentistry">Children&apos;s Dentistry</option>
                        <option value="Same-Day Emergency">Emergency Pain Relief</option>
                        <option value="Invisalign Aligners">Invisalign® Aligners</option>
                        <option value="Crowns & Bridges">Crowns & Bridges</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#000000] mb-1.5">
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

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F4A261] transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
