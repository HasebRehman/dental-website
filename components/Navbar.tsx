"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  X,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  DollarSign,
  Users,
  Camera,
  Home,
  Sparkles,
  Mail,
  Clock,
} from "lucide-react";
import { siteData } from "@/data/siteData";
import { images } from "@/data/images";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patientInfoHovered, setPatientInfoHovered] = useState(false);
  const [aboutUsHovered, setAboutUsHovered] = useState(false);

  // Accordion states for mobile menu (closed by default on open)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobilePatientsOpen, setMobilePatientsOpen] = useState(false);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] text-[#000000] py-3.5 px-6 md:px-12 xl:px-16 border-b border-[#E2E8F0] shadow-sm transition-all duration-300">
      <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-4">
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

        {/* Center Navigation Links (Desktop) */}
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

          {/* About Us Hover Dropdown */}
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

          {/* For Patients Dropdown */}
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
                          FAQ&apos;S
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

        {/* Unique Animated Mobile Hamburger Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden relative z-50 flex items-center justify-center p-2.5 rounded-2xl text-[#1B69B6] hover:bg-[#1B69B6]/10 active:bg-[#1B69B6]/15 transition-colors cursor-pointer group"
        >
          <div className="flex flex-col items-end justify-center gap-1.5 w-6 h-5">
            <motion.span
              animate={{
                width: mobileMenuOpen ? "24px" : "24px",
                x: mobileMenuOpen ? 2 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-[2.5px] bg-[#1B69B6] rounded-full block shadow-xs"
            />
            <motion.span
              animate={{
                width: mobileMenuOpen ? "15px" : "15px",
                backgroundColor: mobileMenuOpen ? "#FF7A00" : "#1B69B6",
                x: mobileMenuOpen ? -3 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-[2.5px] rounded-full block shadow-xs"
            />
            <motion.span
              animate={{
                width: mobileMenuOpen ? "22px" : "20px",
                x: mobileMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-[2.5px] bg-[#1B69B6] rounded-full block shadow-xs"
            />
          </div>
        </motion.button>
      </div>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-0 z-50 bg-[#FFFFFF] text-[#000000] flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Top Bar with Logo and Big Bluish Cross Close Button */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between shadow-xs">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center shrink-0"
              >
                <div className="relative h-10 w-44">
                  <Image
                    src={images.logo}
                    alt="Illinois Family Dentistry Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Big Cross (X) Close Button in Bluish Color */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-[#EBF3FF] text-[#1B69B6] hover:bg-[#1B69B6] hover:text-white transition-all duration-200 active:scale-90 border border-[#1B69B6]/30 shadow-xs group shrink-0"
              >
                <X className="w-7 h-7 text-[#1B69B6] group-hover:text-white transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>

            {/* Menu Links List */}
            <div className="px-6 pt-3 pb-6 flex flex-col gap-2.5">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                  isHomeActive
                    ? "bg-[#EBF3FF] text-[#1B69B6] font-extrabold border border-[#1B69B6]/30 shadow-xs"
                    : "bg-slate-50/80 text-slate-800 font-bold hover:bg-[#EBF3FF]/60 hover:text-[#1B69B6]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF3FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] shrink-0">
                    <Home className="w-4.5 h-4.5 text-[#1B69B6]" />
                  </div>
                  <span className="text-base font-serif">Home</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#1B69B6]/60" />
              </Link>

              {/* About Us Accordion */}
              <div className={`rounded-2xl border transition-all ${
                isAboutUsActive ? "bg-[#EBF3FF]/40 border-[#1B69B6]/30" : "bg-slate-50/80 border-slate-100"
              }`}>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between p-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#EBF3FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] shrink-0">
                      <Users className="w-4.5 h-4.5 text-[#1B69B6]" />
                    </div>
                    <span className={`text-base font-serif font-bold ${isAboutUsActive ? "text-[#1B69B6]" : "text-slate-800"}`}>
                      About Us
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#1B69B6]/60 transition-transform duration-300 ${mobileAboutOpen ? "rotate-180 text-[#1B69B6]" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pr-3 pb-3 pt-1 flex flex-col gap-1.5 pl-6 ml-4 border-l-2 border-[#1B69B6]/20"
                    >
                      <Link
                        href="/meet-the-team"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                          pathname === "/meet-the-team"
                            ? "bg-[#1B69B6] text-white font-bold shadow-xs"
                            : "bg-white text-slate-700 hover:text-[#1B69B6] hover:bg-[#EBF3FF] font-semibold border border-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Users className={`w-4 h-4 ${pathname === "/meet-the-team" ? "text-white" : "text-[#1B69B6]"}`} />
                          <span className="text-sm">Meet the Team</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>

                      <Link
                        href="/office-tour"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                          pathname === "/office-tour"
                            ? "bg-[#1B69B6] text-white font-bold shadow-xs"
                            : "bg-white text-slate-700 hover:text-[#1B69B6] hover:bg-[#EBF3FF] font-semibold border border-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Camera className={`w-4 h-4 ${pathname === "/office-tour" ? "text-white" : "text-[#1B69B6]"}`} />
                          <span className="text-sm">Office Tour</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services */}
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                  isServicesActive
                    ? "bg-[#EBF3FF] text-[#1B69B6] font-extrabold border border-[#1B69B6]/30 shadow-xs"
                    : "bg-slate-50/80 text-slate-800 font-bold hover:bg-[#EBF3FF]/60 hover:text-[#1B69B6]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF3FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] shrink-0">
                    <Sparkles className="w-4.5 h-4.5 text-[#1B69B6]" />
                  </div>
                  <span className="text-base font-serif">Services</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#1B69B6]/60" />
              </Link>

              {/* For Patients Accordion */}
              <div className={`rounded-2xl border transition-all ${
                isPatientsActive ? "bg-[#EBF3FF]/40 border-[#1B69B6]/30" : "bg-slate-50/80 border-slate-100"
              }`}>
                <button
                  onClick={() => setMobilePatientsOpen(!mobilePatientsOpen)}
                  className="w-full flex items-center justify-between p-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#EBF3FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] shrink-0">
                      <HelpCircle className="w-4.5 h-4.5 text-[#1B69B6]" />
                    </div>
                    <span className={`text-base font-serif font-bold ${isPatientsActive ? "text-[#1B69B6]" : "text-slate-800"}`}>
                      For Patients
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#1B69B6]/60 transition-transform duration-300 ${mobilePatientsOpen ? "rotate-180 text-[#1B69B6]" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobilePatientsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pr-3 pb-3 pt-1 flex flex-col gap-1.5 pl-6 ml-4 border-l-2 border-[#1B69B6]/20"
                    >
                      <Link
                        href="/faqs"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                          pathname === "/faqs"
                            ? "bg-[#1B69B6] text-white font-bold shadow-xs"
                            : "bg-white text-slate-700 hover:text-[#1B69B6] hover:bg-[#EBF3FF] font-semibold border border-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <HelpCircle className={`w-4 h-4 ${pathname === "/faqs" ? "text-white" : "text-[#1B69B6]"}`} />
                          <span className="text-sm">FAQ&apos;S</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>

                      <Link
                        href="/financial-info"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                          pathname === "/financial-info"
                            ? "bg-[#1B69B6] text-white font-bold shadow-xs"
                            : "bg-white text-slate-700 hover:text-[#1B69B6] hover:bg-[#EBF3FF] font-semibold border border-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <DollarSign className={`w-4 h-4 ${pathname === "/financial-info" ? "text-white" : "text-[#1B69B6]"}`} />
                          <span className="text-sm">Financial Info & Offers</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                  isContactActive
                    ? "bg-[#EBF3FF] text-[#1B69B6] font-extrabold border border-[#1B69B6]/30 shadow-xs"
                    : "bg-slate-50/80 text-slate-800 font-bold hover:bg-[#EBF3FF]/60 hover:text-[#1B69B6]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF3FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] shrink-0">
                    <Mail className="w-4.5 h-4.5 text-[#1B69B6]" />
                  </div>
                  <span className="text-base font-serif">Contact</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#1B69B6]/60" />
              </Link>
            </div>

            {/* Bottom Sticky Action Area */}
            <div className="mt-auto p-5 bg-slate-50 border-t border-slate-200/80 flex flex-col gap-3 rounded-t-3xl shadow-lg">
              <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1B69B6]" />
                  Mon - Fri: 9am - 5pm
                </span>
                <span className="text-[#FF7A00] font-bold">Dallas, TX</span>
              </div>

              <a
                href={`tel:${siteData.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-[#1B69B6]/30 text-[#1B69B6] font-bold text-sm shadow-xs hover:bg-[#F0F6FF] transition-all"
              >
                <Phone className="w-4 h-4 text-[#1B69B6]" />
                <span>Call (469) 809-1919</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF9233] text-white font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg active:scale-98 transition-all"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


