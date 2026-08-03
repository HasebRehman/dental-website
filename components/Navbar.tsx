"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUpRight, Menu, X, Calendar } from "lucide-react";
import { siteData } from "@/data/siteData";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Doctors", href: "#doctors" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Financing", href: "#financing" },
  { name: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F7F3]/90 backdrop-blur-md border-b border-[#121820]/10 py-3 shadow-xs"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#121820] text-[#F8F7F3] flex items-center justify-center font-serif text-xl tracking-tighter group-hover:scale-105 transition-transform duration-300">
              IFD
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-medium tracking-tight text-[#121820] leading-none">
                Illinois Family
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#5A6472] font-semibold mt-0.5">
                Dentistry • Dallas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#121820]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-[#2563EB] transition-colors duration-300 text-xs uppercase tracking-widest font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#2563EB] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteData.phoneRaw}`}
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#121820] hover:text-[#2563EB] transition-colors px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteData.phone}</span>
            </a>
            <a
              href="#appointment"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121820] text-[#F8F7F3] text-xs uppercase tracking-widest font-semibold overflow-hidden hover:bg-[#2563EB] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F8F7F3] group-hover:scale-110 transition-transform" />
              <span>Book Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-full bg-[#EFECE6] text-[#121820] hover:bg-[#121820] hover:text-[#F8F7F3] transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Premium Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#121820] text-[#F8F7F3] flex flex-col justify-between pt-24 pb-10 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#94A3B8] font-semibold border-b border-[#F8F7F3]/10 pb-2">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="font-serif text-3xl hover:text-[#94A3B8] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans tracking-widest text-[#94A3B8]/60">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-[#F8F7F3]/10 pt-6">
              <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                <span>Call Us Anytime:</span>
                <a
                  href={`tel:${siteData.phoneRaw}`}
                  className="text-[#F8F7F3] font-semibold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {siteData.phone}
                </a>
              </div>
              <a
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-[#F8F7F3] text-[#121820] font-semibold text-xs uppercase tracking-widest hover:bg-[#2563EB] hover:text-[#F8F7F3] transition-colors"
              >
                Book Appointment Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
