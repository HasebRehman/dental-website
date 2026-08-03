"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { siteData } from "@/data/siteData";
import { images } from "@/data/images";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-[#FFFFFF] pt-16 pb-8 border-t border-[#1E3A8A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FFFFFF]/10">
          
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-1 space-y-4">
            <div className="relative h-11 w-48 overflow-hidden">
              <Image
                src={images.logo}
                alt="Illinois Family Dentistry Logo"
                fill
                className="object-contain object-left drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]"
              />
            </div>
            <p className="font-sans text-xs text-[#94A3B8] font-normal leading-relaxed">
              Compassionate care for your family&apos;s smiles. We&apos;re here to help you achieve a healthy, confident smile that lasts a lifetime.
            </p>

            <div className="flex items-center gap-2.5 pt-2 text-[#94A3B8]">
              <a href="#" className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#FF7A00] hover:text-[#FFFFFF] transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#FF7A00] hover:text-[#FFFFFF] transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#FF7A00] hover:text-[#FFFFFF] transition-colors font-extrabold text-xs">
                G
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#FF7A00] hover:text-[#FFFFFF] transition-colors">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-sans text-xs uppercase font-extrabold tracking-widest text-[#93C5FD] mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 font-sans text-xs text-[#CBD5E1]">
              <li><Link href="/" className="hover:text-[#FFFFFF] transition-colors">Home</Link></li>
              <li><Link href="/meet-the-team" className="hover:text-[#FFFFFF] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFF] transition-colors">Services</Link></li>
              <li><Link href="/faqs" className="hover:text-[#FFFFFF] transition-colors">For Patients</Link></li>
              <li><Link href="/faqs" className="hover:text-[#FFFFFF] transition-colors">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFFFFF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="font-sans text-xs uppercase font-extrabold tracking-widest text-[#93C5FD] mb-4">
              OUR SERVICES
            </h3>
            <ul className="space-y-2.5 font-sans text-xs text-[#CBD5E1]">
              <li><Link href="/services" className="hover:text-[#FFFFFF] transition-colors">Dental Cleanings</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFF] transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFF] transition-colors">Dental Implants</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFF] transition-colors">Invisalign®</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFF] transition-colors">Pediatric Dentistry</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFF] transition-colors">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Column 4: For Patients */}
          <div>
            <h3 className="font-sans text-xs uppercase font-extrabold tracking-widest text-[#93C5FD] mb-4">
              FOR PATIENTS
            </h3>
            <ul className="space-y-2.5 font-sans text-xs text-[#CBD5E1]">
              <li><Link href="/contact" className="hover:text-[#FFFFFF] transition-colors">New Patients</Link></li>
              <li><Link href="/financial-info" className="hover:text-[#FFFFFF] transition-colors">Insurance & Payments</Link></li>
              <li><Link href="/faqs" className="hover:text-[#FFFFFF] transition-colors">Patient Forms</Link></li>
              <li><Link href="/financial-info" className="hover:text-[#FFFFFF] transition-colors">Financing Options</Link></li>
              <li><Link href="/faqs" className="hover:text-[#FFFFFF] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs uppercase font-extrabold tracking-widest text-[#93C5FD] mb-4">
              CONTACT US
            </h3>
            <ul className="space-y-3 font-sans text-xs text-[#CBD5E1]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                <span>2300 W Illinois Ave, Dallas, TX 75224</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <a href={`tel:${siteData.phoneRaw}`} className="hover:text-[#FFFFFF] transition-colors">469-809-1919</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <a href={`mailto:${siteData.email}`} className="hover:text-[#FFFFFF] transition-colors">info@illinoisdentistrydallas.com</a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold tracking-wide hover:bg-[#1B69B6] transition-colors shadow-md w-full"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#94A3B8]">
          <div>
            © {new Date().getFullYear()} Illinois Family Dentistry. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/faqs" className="hover:text-[#FFFFFF] transition-colors">Privacy Policy</Link>
            <Link href="/faqs" className="hover:text-[#FFFFFF] transition-colors">Terms of Service</Link>
            <Link href="/faqs" className="hover:text-[#FFFFFF] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
