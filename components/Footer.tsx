"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Heart, FileText, Clock } from "lucide-react";
import { siteData } from "@/data/siteData";
import { images } from "@/data/images";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-[#FFFFFF] pt-16 pb-12 border-t border-[#FFFFFF]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Header Bar */}
        <div className="border-b border-[#FFFFFF]/15 pb-12 mb-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-56 overflow-hidden">
              <Image
                src={images.logo}
                alt="Illinois Family Dentistry Logo"
                fill
                className="object-contain object-left brightness-200"
              />
            </div>
          </div>
          <div className="text-xs text-[#FFFFFF]/80 font-semibold hidden sm:block">
            Illinois & Hampton Plaza • Next to El Rancho
          </div>
        </div>

        {/* 4 Clean Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 font-sans text-xs">
          {/* Col 1: About */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-[#F4A261] font-extrabold mb-4">
              ABOUT OUR PRACTICE
            </h3>
            <p className="text-[#FFFFFF]/80 font-normal leading-relaxed mb-4">
              Illinois Family Dentistry delivers high-quality, gentle dental care to families across Dallas, Oak Cliff, Grand Prairie, and Duncanville.
            </p>
            <div className="text-[11px] text-[#FFFFFF]/80 font-semibold">
              Accepting PPO Insurances, Medicaid/CHIP & CareCredit.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-[#F4A261] font-extrabold mb-4">
              QUICK NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-[#FFFFFF]/80">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/#about" },
                { name: "Dental Services", href: "/services" },
                { name: "Why Choose Us", href: "/#why-us" },
                { name: "Meet Doctors", href: "/#doctors" },
                { name: "Patient Stories", href: "/#testimonials" },
                { name: "Financial Info", href: "/financial-info" },
                { name: "Contact & Hours", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#43ACE0] transition-colors font-medium text-[#FFFFFF]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Patient Downloads & Forms */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-[#F4A261] font-extrabold mb-4">
              PATIENT FORMS (PDF)
            </h3>
            <ul className="space-y-2.5 text-[#FFFFFF]/80">
              <li>
                <a
                  href={siteData.pdfForms.english}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#43ACE0] transition-colors font-medium text-[#FFFFFF] flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>English New Patient Form</span>
                </a>
              </li>
              <li>
                <a
                  href={siteData.pdfForms.spanish}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#43ACE0] transition-colors font-medium text-[#FFFFFF] flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>Forma Nuevos Pacientes (Español)</span>
                </a>
              </li>
              <li className="text-[11px] text-[#FFFFFF]/70 pt-2">
                Print and fill out your forms before your visit for faster check-in.
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-[#F4A261] font-extrabold mb-4">
              CONTACT & HOURS
            </h3>
            <ul className="space-y-3.5 text-[#FFFFFF]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                <span className="text-[#FFFFFF]">2300 W Illinois Ave, Dallas, TX 75224</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4A261] shrink-0" />
                <a
                  href={`tel:${siteData.phoneRaw}`}
                  className="hover:text-[#43ACE0] transition-colors font-extrabold text-[#FFFFFF]"
                >
                  469-809-1919
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4A261] shrink-0" />
                <a
                  href={`mailto:${siteData.email}`}
                  className="hover:text-[#43ACE0] transition-colors text-[#FFFFFF]"
                >
                  {siteData.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#FFFFFF] block">Mon 1pm-7pm | Tue-Fri 10am-7pm</span>
                  <span className="font-semibold text-[#FFFFFF]/80">Sat 10am-2pm | Sun Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFFFFF]/15 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FFFFFF]/70 gap-4">
          <div className="flex items-center gap-1">
            <span>© 2026 Illinois Family Dentistry. All rights reserved. Crafted with</span>
            <Heart className="w-3 h-3 text-[#F4A261] fill-[#F4A261]" />
            <span>in Dallas, TX.</span>
          </div>

          <div className="flex items-center gap-6 font-bold text-[#FFFFFF]">
            <Link href="/" className="hover:text-[#43ACE0] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#43ACE0] transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-[#43ACE0] transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
