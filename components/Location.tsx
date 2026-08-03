"use client";

import { MapPin, Phone, Mail, Clock, Navigation, Globe } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 md:py-32 bg-[#FFFFFF] border-b border-[#43ACE0]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5FCAEF]/15 border border-[#43ACE0]/20 text-xs font-bold uppercase tracking-widest text-[#43ACE0] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Convenient Oak Cliff & Dallas Access</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#000000] font-bold tracking-tight">
            OUR DALLAS <span className="text-[#43ACE0]">LOCATION</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#000000] mt-4 font-normal leading-relaxed">
            Conveniently located at Illinois & Hampton Plaza, right next to El Rancho Supermercado in Dallas, TX.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column (5 cols): Details & Operating Hours */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Info Box */}
            <div className="bg-[#5FCAEF]/10 rounded-3xl p-8 border border-[#43ACE0]/20 shadow-xl space-y-6 text-xs sm:text-sm font-sans">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#F4A261] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-extrabold tracking-wider text-[#000000] mb-1">
                    ADDRESS & LANDMARK
                  </div>
                  <div className="font-extrabold text-[#000000] text-base mb-0.5">
                    Illinois Family Dentistry
                  </div>
                  <p className="text-[#000000] font-normal">
                    2300 W Illinois Ave, Dallas, TX 75224
                  </p>
                  <p className="text-[11px] text-[#000000]/70 mt-0.5">
                    Illinois & Hampton Plaza (Next to El Rancho Supermercado)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#43ACE0] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-extrabold tracking-wider text-[#000000] mb-1">
                    PHONE & TEXT
                  </div>
                  <a
                    href={`tel:${siteData.phoneRaw}`}
                    className="font-extrabold text-[#43ACE0] text-lg hover:underline block"
                  >
                    469-809-1919
                  </a>
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#43ACE0] shrink-0 mt-0.5">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-extrabold tracking-wider text-[#000000] mb-1">
                    LANGUAGES
                  </div>
                  <div className="font-extrabold text-[#000000]">
                    English & Hablamos Español
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="bg-[#43ACE0] text-[#FFFFFF] rounded-3xl p-8 shadow-xl">
              <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#F4A261]" />
                <span>Office Hours</span>
              </h3>

              <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
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
          </div>

          {/* Right Column (7 cols): Map Embed Container */}
          <div className="lg:col-span-7 relative min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#43ACE0]/20 flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.592186714088!2d-96.858482!3d32.723467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99f664db801b%3A0x8e5fbbd84a7e7a8!2s2300%20W%20Illinois%20Ave%2C%20Dallas%2C%20TX%2075224!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full min-h-[420px] border-0 flex-1"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Illinois Family Dentistry Map Location"
            />

            {/* Bottom Bar overlay for Map */}
            <div className="p-4 bg-[#FFFFFF] border-t border-[#43ACE0]/20 flex items-center justify-between">
              <span className="text-xs font-bold text-[#000000]">
                2300 W Illinois Ave, Dallas, TX 75224
              </span>
              <a
                href={siteData.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs uppercase tracking-widest font-bold hover:bg-[#F4A261] transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
