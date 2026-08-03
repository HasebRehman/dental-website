"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Menu, X, ChevronDown, HelpCircle, DollarSign, Users, Camera } from "lucide-react";
import { siteData } from "@/data/siteData";
import { images } from "@/data/images";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patientInfoHovered, setPatientInfoHovered] = useState(false);
  const [aboutUsHovered, setAboutUsHovered] = useState(false);

  // Active state helpers (highlight parent if sub-page is active)
  const isHomeActive = pathname === "/";
  const isAboutUsActive =
    pathname === "/meet-the-team" ||
    pathname === "/office-tour" ||
    pathname === "/about/team" ||
    pathname.startsWith("/doctors");
  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");
  const isPatientsActive = pathname === "/faqs" || pathname === "/financial-info";
  const isContactActive = pathname === "/contact";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] text-[#000000] py-3.5 px-6 md:px-12 border-b border-[#E2E8F0] shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-11 w-48 sm:w-56 overflow-hidden">
            <Image
              src={images.logo}
              alt="Illinois Family Dentistry Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-[#334155]">
          {/* Home Link */}
          <Link
            href="/"
            className={`transition-colors py-1 relative ${
              isHomeActive
                ? "text-[#1B69B6] font-black border-b-2 border-[#1B69B6]"
                : "hover:text-[#1B69B6] font-semibold"
            }`}
          >
            Home
          </Link>

          {/* About Us Hover Dropdown (Highlights if /meet-the-team, /office-tour, or /doctors subpages open) */}
          <div
            className="relative py-1 cursor-pointer"
            onMouseEnter={() => setAboutUsHovered(true)}
            onMouseLeave={() => setAboutUsHovered(false)}
          >
            <div
              className={`transition-colors flex items-center gap-1 py-1 ${
                isAboutUsActive
                  ? "text-[#1B69B6] font-black border-b-2 border-[#1B69B6]"
                  : "hover:text-[#1B69B6] font-semibold"
              }`}
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isAboutUsActive ? "text-[#1B69B6]" : "text-[#64748B]"
                } ${aboutUsHovered ? "rotate-180" : ""}`}
              />
            </div>

            <AnimatePresence>
              {aboutUsHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-60 bg-[#FFFFFF] rounded-2xl p-3 shadow-2xl border border-[#E2E8F0] z-50 text-left normal-case"
                >
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/meet-the-team"
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors group ${
                        pathname === "/meet-the-team" ? "bg-[#F0F6FF]" : "hover:bg-[#F0F6FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1B69B6]/10 flex items-center justify-center text-[#FF7A00] shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${pathname === "/meet-the-team" ? "text-[#1B69B6]" : "text-[#000000]"}`}>
                          Meet the Team
                        </div>
                        <div className="text-[11px] text-[#64748B]">
                          Dallas Clinical Staff
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/office-tour"
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors group ${
                        pathname === "/office-tour" ? "bg-[#F0F6FF]" : "hover:bg-[#F0F6FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1B69B6]/10 flex items-center justify-center text-[#1B69B6] shrink-0">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${pathname === "/office-tour" ? "text-[#1B69B6]" : "text-[#000000]"}`}>
                          Office Tour
                        </div>
                        <div className="text-[11px] text-[#64748B]">
                          Virtual Tour of Facility
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Link */}
          <Link
            href="/services"
            className={`transition-colors py-1 flex items-center gap-1 ${
              isServicesActive
                ? "text-[#1B69B6] font-black border-b-2 border-[#1B69B6]"
                : "hover:text-[#1B69B6] font-semibold"
            }`}
          >
            <span>Services</span>
            <ChevronDown className={`w-3.5 h-3.5 ${isServicesActive ? "text-[#1B69B6]" : "text-[#64748B]"}`} />
          </Link>

          {/* For Patients Dropdown (Highlights if /faqs or /financial-info subpages open) */}
          <div
            className="relative py-1 cursor-pointer"
            onMouseEnter={() => setPatientInfoHovered(true)}
            onMouseLeave={() => setPatientInfoHovered(false)}
          >
            <div
              className={`transition-colors flex items-center gap-1 py-1 ${
                isPatientsActive
                  ? "text-[#1B69B6] font-black border-b-2 border-[#1B69B6]"
                  : "hover:text-[#1B69B6] font-semibold"
              }`}
            >
              <span>For Patients</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isPatientsActive ? "text-[#1B69B6]" : "text-[#64748B]"
                } ${patientInfoHovered ? "rotate-180" : ""}`}
              />
            </div>

            <AnimatePresence>
              {patientInfoHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 bg-[#FFFFFF] rounded-2xl p-3 shadow-2xl border border-[#E2E8F0] z-50 text-left normal-case"
                >
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/faqs"
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors group ${
                        pathname === "/faqs" ? "bg-[#F0F6FF]" : "hover:bg-[#F0F6FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1B69B6]/10 flex items-center justify-center text-[#FF7A00] shrink-0">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${pathname === "/faqs" ? "text-[#1B69B6]" : "text-[#000000]"}`}>
                          FAQ&apos;s
                        </div>
                        <div className="text-[11px] text-[#64748B]">
                          Appointments & Info
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/financial-info"
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors group ${
                        pathname === "/financial-info" ? "bg-[#F0F6FF]" : "hover:bg-[#F0F6FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1B69B6]/10 flex items-center justify-center text-[#1B69B6] shrink-0">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${pathname === "/financial-info" ? "text-[#1B69B6]" : "text-[#000000]"}`}>
                          Financial Info & Offers
                        </div>
                        <div className="text-[11px] text-[#64748B]">
                          Insurance & Payment Plans
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Link */}
          <Link
            href="/contact"
            className={`transition-colors py-1 ${
              isContactActive
                ? "text-[#1B69B6] font-black border-b-2 border-[#1B69B6]"
                : "hover:text-[#1B69B6] font-semibold"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Area: Phone & Orange Button */}
        <div className="hidden sm:flex items-center gap-5 shrink-0">
          <a
            href={`tel:${siteData.phoneRaw}`}
            className="font-bold text-[#334155] hover:text-[#1B69B6] transition-colors flex items-center gap-1.5 text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#1B69B6]" />
            <span>469-809-1919</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold tracking-wide hover:bg-[#1B69B6] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2.5 rounded-xl bg-[#1B69B6] text-[#FFFFFF] hover:bg-[#FF7A00] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#FFFFFF] text-[#000000] flex flex-col justify-between pt-24 pb-10 px-8 lg:hidden shadow-2xl overflow-y-auto"
          >
            <div className="flex flex-col gap-4 mt-2">
              <div className="relative h-10 w-48 mb-4">
                <Image
                  src={images.logo}
                  alt="Illinois Family Dentistry Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-lg font-bold border-b border-[#E2E8F0] pb-2 ${
                  isHomeActive ? "text-[#1B69B6]" : "text-[#000000]"
                }`}
              >
                Home
              </Link>

              <div className="border-b border-[#E2E8F0] pb-2">
                <div className={`font-serif text-lg font-bold mb-2 ${
                  isAboutUsActive ? "text-[#1B69B6]" : "text-[#000000]"
                }`}>
                  About Us
                </div>
                <div className="pl-4 flex flex-col gap-2 font-sans text-sm font-semibold">
                  <Link
                    href="/meet-the-team"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`hover:text-[#1B69B6] transition-colors flex items-center gap-2 ${
                      pathname === "/meet-the-team" ? "text-[#1B69B6] font-extrabold" : ""
                    }`}
                  >
                    <Users className="w-4 h-4 text-[#FF7A00]" />
                    <span>Meet the Team</span>
                  </Link>
                  <Link
                    href="/office-tour"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`hover:text-[#1B69B6] transition-colors flex items-center gap-2 ${
                      pathname === "/office-tour" ? "text-[#1B69B6] font-extrabold" : ""
                    }`}
                  >
                    <Camera className="w-4 h-4 text-[#1B69B6]" />
                    <span>Office Tour</span>
                  </Link>
                </div>
              </div>

              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-lg font-bold border-b border-[#E2E8F0] pb-2 ${
                  isServicesActive ? "text-[#1B69B6]" : "text-[#000000]"
                }`}
              >
                Services
              </Link>

              <div className="border-b border-[#E2E8F0] pb-2">
                <div className={`font-serif text-lg font-bold mb-2 ${
                  isPatientsActive ? "text-[#1B69B6]" : "text-[#000000]"
                }`}>
                  For Patients
                </div>
                <div className="pl-4 flex flex-col gap-2 font-sans text-sm font-semibold">
                  <Link
                    href="/faqs"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`hover:text-[#1B69B6] transition-colors flex items-center gap-2 ${
                      pathname === "/faqs" ? "text-[#1B69B6] font-extrabold" : ""
                    }`}
                  >
                    <HelpCircle className="w-4 h-4 text-[#FF7A00]" />
                    <span>FAQ&apos;S</span>
                  </Link>
                  <Link
                    href="/financial-info"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`hover:text-[#1B69B6] transition-colors flex items-center gap-2 ${
                      pathname === "/financial-info" ? "text-[#1B69B6] font-extrabold" : ""
                    }`}
                  >
                    <DollarSign className="w-4 h-4 text-[#1B69B6]" />
                    <span>Financial Info & Special Offers</span>
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-lg font-bold border-b border-[#E2E8F0] pb-2 ${
                  isContactActive ? "text-[#1B69B6]" : "text-[#000000]"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-3 border-t border-[#E2E8F0] pt-6">
              <a
                href={`tel:${siteData.phoneRaw}`}
                className="text-center font-bold text-sm text-[#1B69B6]"
              >
                Call 469-809-1919
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] font-extrabold text-xs tracking-wide hover:bg-[#1B69B6] transition-colors shadow-lg"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
