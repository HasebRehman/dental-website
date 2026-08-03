"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, MapPin, Menu, X, ChevronRight, Sparkles, ChevronDown, HelpCircle, DollarSign, Users, Camera } from "lucide-react";
import { siteData } from "@/data/siteData";
import { images } from "@/data/images";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patientInfoHovered, setPatientInfoHovered] = useState(false);
  const [aboutUsHovered, setAboutUsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* 1. Top Notice Announcement Bar - #43ACE0 (Primary Dental Blue) */}
      <div className="bg-[#43ACE0] text-[#FFFFFF] text-xs py-2 px-6 border-b border-[#FFFFFF]/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
          {/* Left Notice Content */}
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center gap-1 font-extrabold text-[#F4A261] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> NOTICE:
            </span>
            <a href="/financial-info" className="hover:text-[#F4A261] transition-colors">
              Insurance / Medicaid / CHIP
            </a>
            <span className="text-[#F4A261] font-bold">•</span>
            <a href="/financial-info" className="hover:text-[#F4A261] transition-colors">
              Special Offers
            </a>
            <span className="text-[#F4A261] font-bold">•</span>
            <a href="/services" className="hover:text-[#F4A261] transition-colors">
              Same-Day Emergencies
            </a>
            <span className="text-[#F4A261] font-bold">•</span>
            <a href="/contact" className="hover:text-[#F4A261] transition-colors">
              Evening & Weekend Appointments
            </a>
            <span className="text-[#F4A261] font-bold">•</span>
            <span className="font-bold text-[#FFFFFF]">Hablamos Español</span>
          </div>

          {/* Right Directions & Phone */}
          <div className="flex items-center gap-5">
            <a
              href={siteData.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4A261] transition-colors flex items-center gap-1.5 font-bold"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>Directions</span>
            </a>
            <a
              href={`tel:${siteData.phoneRaw}`}
              className="font-extrabold text-[#FFFFFF] hover:text-[#F4A261] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>469-809-1919</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header Bar - #FFFFFF background, #000000 text */}
      <header className="bg-[#FFFFFF] text-[#000000] py-3.5 px-6 md:px-12 border-b border-[#43ACE0]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-12 w-48 sm:w-56 overflow-hidden">
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
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-extrabold text-[#000000]">
            <Link
              href="/"
              className="hover:text-[#43ACE0] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#43ACE0] hover:after:w-full after:transition-all after:duration-300"
            >
              HOME
            </Link>

            {/* ABOUT US Dropdown Submenu - Non-clickable title */}
            <div
              className="relative py-1 cursor-pointer"
              onMouseEnter={() => setAboutUsHovered(true)}
              onMouseLeave={() => setAboutUsHovered(false)}
            >
              <div className="hover:text-[#43ACE0] transition-colors flex items-center gap-1 py-1">
                <span>ABOUT US</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#43ACE0] transition-transform duration-300 ${
                    aboutUsHovered ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Submenu Dropdown Container - Shows ONLY Meet the Team & Office Tour */}
              <AnimatePresence>
                {aboutUsHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-60 bg-[#FFFFFF] rounded-2xl p-3 shadow-2xl border border-[#43ACE0]/20 z-50 text-left normal-case"
                  >
                    <div className="flex flex-col gap-1">
                      <Link
                        href="/meet-the-team"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5FCAEF]/15 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#43ACE0]/10 border border-[#43ACE0]/20 flex items-center justify-center text-[#F4A261] shrink-0 group-hover:bg-[#F4A261] group-hover:text-[#FFFFFF] transition-colors">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold uppercase tracking-wider text-[#000000]">
                            Meet the Team
                          </div>
                          <div className="text-[11px] text-[#000000]/70 font-normal">
                            Dallas Clinical Staff & Hygienists
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/office-tour"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5FCAEF]/15 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#43ACE0]/10 border border-[#43ACE0]/20 flex items-center justify-center text-[#43ACE0] shrink-0 group-hover:bg-[#43ACE0] group-hover:text-[#FFFFFF] transition-colors">
                          <Camera className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold uppercase tracking-wider text-[#000000]">
                            Office Tour
                          </div>
                          <div className="text-[11px] text-[#000000]/70 font-normal">
                            Virtual Tour of Our Facility
                          </div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/services"
              className="hover:text-[#43ACE0] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#43ACE0] hover:after:w-full after:transition-all after:duration-300"
            >
              DENTAL SERVICES
            </Link>

            {/* PATIENT INFO Dropdown Submenu - Non-clickable title */}
            <div
              className="relative py-1 cursor-pointer"
              onMouseEnter={() => setPatientInfoHovered(true)}
              onMouseLeave={() => setPatientInfoHovered(false)}
            >
              <div className="hover:text-[#43ACE0] transition-colors flex items-center gap-1 py-1">
                <span>PATIENT INFO</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#43ACE0] transition-transform duration-300 ${
                    patientInfoHovered ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Submenu Dropdown Container - Shows ONLY FAQ's and Financial Info & Offers */}
              <AnimatePresence>
                {patientInfoHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-[#FFFFFF] rounded-2xl p-3 shadow-2xl border border-[#43ACE0]/20 z-50 text-left normal-case"
                  >
                    <div className="flex flex-col gap-1">
                      <Link
                        href="/faqs"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5FCAEF]/15 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#43ACE0]/10 border border-[#43ACE0]/20 flex items-center justify-center text-[#F4A261] shrink-0 group-hover:bg-[#F4A261] group-hover:text-[#FFFFFF] transition-colors">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold uppercase tracking-wider text-[#000000]">
                            FAQ&apos;S
                          </div>
                          <div className="text-[11px] text-[#000000]/70 font-normal">
                            Appointments & Treatments
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/financial-info"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5FCAEF]/15 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#43ACE0]/10 border border-[#43ACE0]/20 flex items-center justify-center text-[#43ACE0] shrink-0 group-hover:bg-[#43ACE0] group-hover:text-[#FFFFFF] transition-colors">
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold uppercase tracking-wider text-[#000000]">
                            Financial Info & Offers
                          </div>
                          <div className="text-[11px] text-[#000000]/70 font-normal">
                            Insurance, Medicaid & Specials
                          </div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="hover:text-[#43ACE0] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#43ACE0] hover:after:w-full after:transition-all after:duration-300"
            >
              CONTACT
            </Link>
          </nav>

          {/* Right CTA Button - Primary Dental Blue #43ACE0 */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F4A261] transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <Calendar className="w-4 h-4 text-[#FFFFFF]" />
              <span>REQUEST APPOINTMENT</span>
              <ChevronRight className="w-4 h-4 text-[#FFFFFF] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-xl bg-[#43ACE0] text-[#FFFFFF] hover:bg-[#F4A261] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#43ACE0] text-[#FFFFFF] flex flex-col justify-between pt-28 pb-10 px-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 mt-2">
              <div className="relative h-12 w-48 mb-4">
                <Image
                  src={images.logo}
                  alt="Illinois Family Dentistry Logo"
                  fill
                  className="object-contain object-left brightness-200"
                />
              </div>

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl font-bold hover:text-[#F4A261] transition-colors flex items-center justify-between border-b border-[#FFFFFF]/20 pb-2"
              >
                <span>HOME</span>
                <span className="text-xs font-sans text-[#F4A261]">01</span>
              </Link>

              <div className="border-b border-[#FFFFFF]/20 pb-2">
                <div className="font-serif text-xl font-bold text-[#FFFFFF] mb-2">
                  ABOUT US
                </div>
                <div className="pl-4 flex flex-col gap-2 font-sans text-sm font-semibold">
                  <Link
                    href="/meet-the-team"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#F4A261] transition-colors flex items-center gap-2"
                  >
                    <Users className="w-4 h-4 text-[#F4A261]" />
                    <span>Meet the Team</span>
                  </Link>
                  <Link
                    href="/office-tour"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#F4A261] transition-colors flex items-center gap-2"
                  >
                    <Camera className="w-4 h-4 text-[#F4A261]" />
                    <span>Office Tour</span>
                  </Link>
                </div>
              </div>

              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl font-bold hover:text-[#F4A261] transition-colors flex items-center justify-between border-b border-[#FFFFFF]/20 pb-2"
              >
                <span>DENTAL SERVICES</span>
                <span className="text-xs font-sans text-[#F4A261]">03</span>
              </Link>

              <div className="border-b border-[#FFFFFF]/20 pb-2">
                <div className="font-serif text-xl font-bold text-[#FFFFFF] mb-2">
                  PATIENT INFO
                </div>
                <div className="pl-4 flex flex-col gap-2 font-sans text-sm font-semibold">
                  <Link
                    href="/faqs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#F4A261] transition-colors flex items-center gap-2"
                  >
                    <HelpCircle className="w-4 h-4 text-[#F4A261]" />
                    <span>FAQ&apos;S (Appointments & Treatments)</span>
                  </Link>
                  <Link
                    href="/financial-info"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#F4A261] transition-colors flex items-center gap-2"
                  >
                    <DollarSign className="w-4 h-4 text-[#F4A261]" />
                    <span>Financial Info & Special Offers</span>
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl font-bold hover:text-[#F4A261] transition-colors flex items-center justify-between border-b border-[#FFFFFF]/20 pb-2"
              >
                <span>CONTACT</span>
                <span className="text-xs font-sans text-[#F4A261]">05</span>
              </Link>
            </div>

            <div className="flex flex-col gap-3 border-t border-[#FFFFFF]/20 pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-[#F4A261] text-[#FFFFFF] font-extrabold text-xs uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-lg"
              >
                REQUEST APPOINTMENT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
