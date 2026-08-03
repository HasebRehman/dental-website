"use client";

import { MapPin, Phone, Clock, Navigation, ExternalLink, Sparkles } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Location() {
  return (
    <section
      id="location"
      className="py-24 md:py-36 bg-[#EFECE6] border-b border-[#121820]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F7F3] border border-[#121820]/10 text-xs font-semibold uppercase tracking-widest text-[#5A6472] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Visit Our Practice</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121820] tracking-tight">
            LOCATION & <span className="italic text-[#2563EB]">HOURS</span>
          </h2>
          <p className="font-sans text-sm text-[#5A6472] font-light max-w-md mt-2">
            Conveniently located in Dallas at the Illinois & Hampton Plaza (next to El Rancho Supermercado).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Details Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Address Card */}
            <div className="bg-[#F8F7F3] p-8 rounded-3xl border border-[#121820]/10 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#2563EB] text-[#F8F7F3] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#121820] font-normal">
                    {siteData.name}
                  </h3>
                  <p className="font-sans text-xs text-[#2563EB] font-bold uppercase tracking-wider mt-1">
                    {siteData.address.plaza}
                  </p>
                  <p className="font-sans text-sm text-[#5A6472] mt-2 font-light">
                    {siteData.address.street} <br />
                    {siteData.address.city}, {siteData.address.state} {siteData.address.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-[#121820]/10 pt-6">
                <a
                  href={siteData.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#121820] text-[#F8F7F3] text-xs font-semibold uppercase tracking-widest hover:bg-[#2563EB] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={`tel:${siteData.phoneRaw}`}
                  className="p-3 rounded-full border border-[#121820]/20 text-[#121820] hover:bg-[#121820] hover:text-[#F8F7F3] transition-colors"
                  aria-label="Call clinic"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hours Breakdown Card */}
            <div className="bg-[#F8F7F3] p-8 rounded-3xl border border-[#121820]/10 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-[#2563EB]" />
                <h3 className="font-serif text-2xl text-[#121820] font-normal">
                  Opening Hours
                </h3>
              </div>

              <div className="space-y-3 border-t border-[#121820]/10 pt-4">
                {siteData.hours.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs font-sans py-1 border-b border-[#121820]/5 last:border-none"
                  >
                    <span className="font-bold uppercase tracking-wider text-[#121820]">
                      {item.day}
                    </span>
                    <span
                      className={`font-semibold ${
                        item.time === "Closed"
                          ? "text-red-500"
                          : "text-[#5A6472]"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Custom Styled Map Container (7 cols) */}
          <div className="lg:col-span-7 bg-[#121820] rounded-3xl overflow-hidden shadow-2xl relative min-h-[400px] border border-[#121820]/10 flex flex-col justify-between p-8 md:p-12 text-[#F8F7F3]">
            {/* Dark Mode Map Graphic Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2563EB]">
                Interactive Location Map
              </span>
              <h3 className="font-serif text-3xl font-normal mt-2">
                Situated at Illinois & Hampton Plaza
              </h3>
              <p className="text-xs text-[#94A3B8] font-light mt-2 max-w-md">
                Easily accessible from Oak Cliff, South Dallas, Grand Prairie, and Duncanville with ample free plaza parking.
              </p>
            </div>

            {/* Embedded Responsive Map */}
            <div className="relative z-10 w-full h-64 md:h-72 rounded-2xl overflow-hidden border border-[#F8F7F3]/10 shadow-lg my-6">
              <iframe
                title="Illinois Family Dentistry Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.6669649216447!2d-96.8598912!3d32.7237077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99f57d605c31%3A0xb32c8ecae8f86f7b!2s2300%20W%20Illinois%20Ave%2C%20Dallas%2C%20TX%2075224!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#F8F7F3]/10 text-xs text-[#94A3B8]">
              <span>📍 2300 W Illinois Ave, Dallas, TX 75224</span>
              <a
                href={siteData.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8F7F3] font-semibold underline hover:text-[#2563EB]"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
