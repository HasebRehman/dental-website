"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Location() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "General Exam & Cleaning",
    date: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="appointment" className="py-10 md:py-28 bg-[#FFFFFF] text-[#000000] border-t border-[#E2E8F0]">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Appointment Form (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6 bg-[#F0F6FF] rounded-3xl p-8 sm:p-10 border border-[#1B69B6]/20 shadow-md relative overflow-hidden flex flex-col justify-between"
          >
            {/* Faint Tooth Watermark in Top Right */}
            <div className="absolute top-4 right-4 text-[#1B69B6]/10 text-8xl font-black pointer-events-none select-none">
              🦷
            </div>

            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1B69B6] block mb-2">
                READY FOR A BRIGHTER,
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight leading-tight mb-2">
                HEALTHIER SMILE?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#64748B] font-normal mb-6">
                Schedule your appointment today.
              </p>

              {formSubmitted ? (
                <div className="bg-[#FFFFFF] border border-[#1B69B6]/30 p-6 rounded-2xl text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#FF7A00] mx-auto mb-3" />
                  <h4 className="font-sans text-lg font-extrabold text-[#0B2545] mb-1">
                    Request Received!
                  </h4>
                  <p className="font-sans text-xs text-[#64748B] mb-4">
                    Thank you, {formData.name}! We will call or text you at {formData.phone} shortly to confirm.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2 rounded-full bg-[#1B69B6] text-[#FFFFFF] text-xs font-bold"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0B2545] focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0B2545] focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0B2545] focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                    >
                      <option value="General Exam & Cleaning">Reason for Visit</option>
                      <option value="General Checkup">Dental Cleanings</option>
                      <option value="Cosmetic Consultation">Cosmetic Dentistry</option>
                      <option value="Emergency Care">Same-Day Emergency</option>
                      <option value="Invisalign">Invisalign® Aligners</option>
                    </select>

                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0B2545] focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Additional Notes or Questions (Optional)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0B2545] focus:outline-none focus:ring-2 focus:ring-[#1B69B6]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold tracking-wide hover:bg-[#1B69B6] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="text-center font-sans text-xs text-[#64748B] pt-4 mt-4 border-t border-[#CBD5E1]/60">
              or call us at{" "}
              <a href={`tel:${siteData.phoneRaw}`} className="font-extrabold text-[#0B2545] hover:text-[#1B69B6]">
                469-809-1919
              </a>
            </div>
          </motion.div>

          {/* Right Card: Location & Map (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-6 bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1B69B6] block mb-2">
                OUR LOCATION
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight leading-tight mb-2">
                DALLAS, TX
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#64748B] font-normal mb-6">
                Illinois & Hampton Plaza (Next to El Rancho Supermercado).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <ul className="space-y-4 font-sans text-xs text-[#334155]">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#1B69B6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B2545]">Address</div>
                      <div>2300 W Illinois Ave, Dallas, TX 75224</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#1B69B6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B2545]">Phone</div>
                      <div>469-809-1919</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#1B69B6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B2545]">Email</div>
                      <div>info@illinoisdentistrydallas.com</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#1B69B6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B2545]">Hours</div>
                      <div>Mon: 1:00 PM - 7:00 PM</div>
                      <div>Tue - Fri: 10:00 AM - 7:00 PM</div>
                      <div>Saturday: 10:00 AM - 2:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </li>
                </ul>

                {/* Interactive Map Embed */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-inner bg-[#EBF3FF]">
                  <iframe
                    title="Illinois Family Dentistry Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.568128362624!2d-96.8595085!3d32.7237085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99092892976b%3A0x6b306b9b3df92d4b!2s2300%20W%20Illinois%20Ave%2C%20Dallas%2C%20TX%2075224!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E2E8F0]">
              <a
                href={siteData.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFFFF] border border-[#1B69B6] text-[#1B69B6] text-xs font-extrabold tracking-wide hover:bg-[#1B69B6] hover:text-[#FFFFFF] transition-colors shadow-xs w-fit"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
