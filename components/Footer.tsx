"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Heart } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121820] text-[#F8F7F3] pt-20 pb-12 border-t border-[#F8F7F3]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Branding & Giant Typography */}
        <div className="border-b border-[#F8F7F3]/10 pb-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563EB]">
              Premier Dallas Family Dental Practice
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F8F7F3] mt-2">
              ILLINOIS FAMILY DENTISTRY
            </h2>
            <p className="font-sans text-sm text-[#94A3B8] font-light mt-2 max-w-lg">
              {siteData.tagline} • Hablamos Español.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="self-start md:self-auto px-6 py-3 rounded-full border border-[#F8F7F3]/20 text-xs font-semibold uppercase tracking-widest hover:bg-[#F8F7F3] hover:text-[#121820] transition-colors flex items-center gap-2"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-Column Navigation & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 font-sans text-xs">
          {/* Col 1: Practice Overview */}
          <div>
            <h3 className="font-serif text-lg text-[#F8F7F3] font-normal mb-4">
              About The Practice
            </h3>
            <p className="text-[#94A3B8] font-light leading-relaxed mb-4">
              Providing family-centered oral healthcare to Dallas, Oak Cliff, Grand Prairie, and Duncanville since 2009. Accepting most insurance, Medicaid/CHIP, and offering flexible payment options.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-serif text-lg text-[#F8F7F3] font-normal mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-[#94A3B8]">
              {["Hero", "About", "Services", "Why-Us", "Doctors", "Testimonials", "Financing", "Location"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#F8F7F3] transition-colors"
                  >
                    {item.replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-serif text-lg text-[#F8F7F3] font-normal mb-4">
              Dental Services
            </h3>
            <ul className="space-y-2.5 text-[#94A3B8]">
              <li>General Exams & Cleanings</li>
              <li>Cosmetic Whitening & Veneers</li>
              <li>Invisalign® Clear Aligners</li>
              <li>Children&apos;s Pediatric Dentistry</li>
              <li>Same-Day Emergency Dental Care</li>
              <li>Crowns, Bridges & Implants</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours Summary */}
          <div>
            <h3 className="font-serif text-lg text-[#F8F7F3] font-normal mb-4">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-[#94A3B8]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>{siteData.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a
                  href={`tel:${siteData.phoneRaw}`}
                  className="hover:text-[#F8F7F3] transition-colors font-semibold"
                >
                  {siteData.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a
                  href={`mailto:${siteData.email}`}
                  className="hover:text-[#F8F7F3] transition-colors"
                >
                  {siteData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="border-t border-[#F8F7F3]/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#94A3B8] gap-4">
          <div className="flex items-center gap-1">
            <span>© 2026 Illinois Family Dentistry. All rights reserved. Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>in Dallas, TX.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#hero" className="hover:text-[#F8F7F3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#hero" className="hover:text-[#F8F7F3] transition-colors">
              Terms of Service
            </Link>
            <Link href="#hero" className="hover:text-[#F8F7F3] transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
