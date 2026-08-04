"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, ChevronDown, Search, HelpCircle, Phone, ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqsData } from "@/data/faqs";

export default function FAQsPage() {
  const [activeTab, setActiveTab] = useState<"appointments" | "treatments">("appointments");
  const [openId, setOpenId] = useState<string | null>("faq-a1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqsData.filter((faq) => {
    const matchesTab = faq.category === activeTab;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] relative">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 sm:pt-44 pb-10 sm:pb-20 bg-[#1B69B6] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-20 relative z-10 text-center">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[9px] sm:text-xs font-extrabold uppercase tracking-wider text-[#FFFFFF] mb-3 sm:mb-4 w-fit mx-auto">
            <HelpCircle className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#FF7A00] shrink-0" />
            <span>Patient Help Center</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FFFFFF] mb-3 sm:mb-4">
            FREQUENTLY ASKED <span className="text-[#93C5FD]">QUESTIONS</span>
          </h1>

          <p className="font-sans text-xs sm:text-base md:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-5 sm:mb-8">
            Have questions about your upcoming visit, insurance coverage, or specific dental procedures? Find clear answers below.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative px-2 sm:px-0">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B69B6] absolute left-3.5 sm:left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions (e.g. insurance, root canal, kids)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-full bg-[#FFFFFF] text-[#0B2545] text-xs sm:text-sm font-semibold placeholder-[#64748B] focus:outline-none focus:ring-4 focus:ring-[#FF7A00]/50 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Content Section */}
      <section className="py-8 sm:py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        {/* 2 Tabs: APPOINTMENTS & TREATMENTS */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm">
            <button
              onClick={() => {
                setActiveTab("appointments");
                setOpenId("faq-a1");
              }}
              className={`flex items-center gap-1.5 sm:gap-2.5 px-4 sm:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "appointments"
                  ? "bg-[#1B69B6] text-[#FFFFFF] shadow-sm"
                  : "text-[#334155] hover:text-[#1B69B6]"
              }`}
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7A00]" />
              <span>Appointments</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("treatments");
                setOpenId("faq-t1");
              }}
              className={`flex items-center gap-1.5 sm:gap-2.5 px-4 sm:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "treatments"
                  ? "bg-[#1B69B6] text-[#FFFFFF] shadow-sm"
                  : "text-[#334155] hover:text-[#1B69B6]"
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7A00]" />
              <span>Treatments</span>
            </button>
          </div>
        </div>

        {/* FAQ Accordions */}
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
            <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF7A00] mx-auto mb-3" />
            <h3 className="font-sans text-lg sm:text-xl font-black text-[#0B2545] mb-2">No matching questions found</h3>
            <p className="font-sans text-xs text-[#64748B]">
              Try searching with different terms or call our office at 469-809-1919 for immediate help.
            </p>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  >
                    <span className="font-sans text-sm sm:text-lg font-extrabold text-[#0B2545] pr-2 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-[#FF7A00] text-[#FFFFFF] rotate-180" : "bg-[#F0F6FF] text-[#1B69B6]"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 border-t border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Appointment Callout Banner (Badge Removed & Super Responsive) */}
        <div className="mt-8 sm:mt-20 bg-gradient-to-r from-[#0B2545] via-[#1B69B6] to-[#0B2545] rounded-2xl sm:rounded-3xl p-4 sm:p-10 text-[#FFFFFF] shadow-xl text-center relative overflow-hidden border border-[#1B69B6]/40">
          <h2 className="font-sans text-base sm:text-3xl lg:text-4xl font-black mb-1.5 sm:mb-2 text-[#FFFFFF] tracking-tight">
            Contact Our Friendly <span className="text-[#93C5FD]">Dallas Team Today</span>
          </h2>
          <p className="font-sans text-[11px] sm:text-base text-[#FFFFFF]/90 max-w-md sm:max-w-xl mx-auto mb-4 sm:mb-8 font-normal leading-relaxed">
            Dr. Raj and Dr. Pham are happy to answer any questions about your family care, insurance benefits, or dental treatments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-[200px] sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-md"
            >
              Request Appointment Online
            </Link>
            <a
              href="tel:4698091919"
              className="w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-3.5 rounded-full bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 text-[#FFFFFF] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors"
            >
              Call 469-809-1919
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
