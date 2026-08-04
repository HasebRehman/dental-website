"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CreditCard, DollarSign, FileText, CheckCircle2, Phone, Calendar, Sparkles, Tag, ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/data/siteData";

// Exact 3 Special Offers from User Screenshot
const exactSpecialOffers = [
  {
    id: "offer-49",
    price: "$49",
    title: "COMPLETE EXAM AND X-RAYS",
    disclaimer: "*New patients only. Cannot be combined with any other offer or insurance. Limited time offer, call for more details.",
    badge: "NEW PATIENT SPECIAL",
  },
  {
    id: "offer-free",
    price: "FREE",
    title: "WHITENING",
    subtitle: "After Completed Treatment",
    disclaimer: "*Upon completing recommended treatment and healthy mouth. Limited time offer, call for more details.",
    badge: "SMILE SPECIAL",
  },
  {
    id: "offer-25",
    price: "$25",
    title: "EMERGENCY EXAM",
    disclaimer: "*New patients only. Cannot be combined with any other offer or insurance. Limited time offer, call for more details.",
    badge: "EMERGENCY SPECIAL",
  },
];

// Financial Questions from Illinois Family Dentistry
const financialQuestions = [
  {
    id: "fq-1",
    question: "How does dental insurance work at Illinois Family Dentistry?",
    answer:
      "We accept most major PPO dental insurance plans. Our team will verify your benefits prior to treatment and file all claims on your behalf. We aim to maximize your annual coverage so you get the most out of your dental insurance.",
  },
  {
    id: "fq-2",
    question: "What if I do not have dental insurance?",
    answer:
      "No insurance? No problem! We offer affordable cash-pay pricing, special new patient discount offers ($49 Complete Exam & X-Rays), and 0% promotional interest financing through CareCredit® so quality care is always accessible.",
  },
  {
    id: "fq-3",
    question: "Do you accept Medicaid and CHIP for children?",
    answer:
      "Yes! We accept Texas Medicaid and CHIP coverage for eligible children and teenagers under 21 years of age. We are committed to keeping pediatric cleanings, checkups, and cavity care accessible for Dallas families.",
  },
  {
    id: "fq-4",
    question: "How do I apply for CareCredit® financing?",
    answer:
      "Applying for CareCredit® takes less than 2 minutes online or at our reception desk. It provides instant approval for low monthly payment arrangements with 0% interest options for out-of-pocket procedures.",
  },
];

export default function FinancialInfoPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("fq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] relative">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-32 sm:pt-44 pb-10 sm:pb-20 bg-[#1B69B6] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[9px] sm:text-xs font-extrabold uppercase tracking-wider text-[#FFFFFF] mb-3 sm:mb-4 w-fit mx-auto">
            <ShieldCheck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#FF7A00] shrink-0" />
            <span>Transparent Pricing & Payment Options</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FFFFFF] mb-3 sm:mb-4">
            FINANCIAL INFO & <span className="text-[#93C5FD]">SPECIAL OFFERS</span>
          </h1>

          <p className="font-sans text-xs sm:text-base md:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-5 sm:mb-8">
            At Illinois Family Dentistry, high-quality healthcare comes with zero hidden fees. We accept PPO insurances, Medicaid/CHIP for kids, and offer flexible CareCredit financing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-[220px] sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Schedule Visit</span>
            </Link>
            <a
              href="tel:4698091919"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#93C5FD]" />
              <span>469-809-1919</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* 3 Main Financial Options Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 items-stretch">
          {/* Card 1: PPO Insurance */}
          <div className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E2E8F0] shadow-md hover:shadow-xl hover:border-[#1B69B6]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F0F6FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] mb-4 sm:mb-6 shadow-xs">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <h2 className="font-sans text-xl sm:text-2xl font-black text-[#0B2545] mb-2 sm:mb-3">
                PPO Dental Insurance
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 sm:mb-6 font-normal">
                We accept most major preferred provider (PPO) dental insurance plans. Our experienced team files all insurance claims directly on your behalf to maximize your coverage and minimize out-of-pocket expenses.
              </p>

              <ul className="space-y-2 font-sans text-xs font-bold text-[#334155] border-t border-[#E2E8F0] pt-4 mb-5 sm:mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>Files claims directly on your behalf</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>Free insurance benefits verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>Maximizes your annual coverage</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full py-2.5 sm:py-3.5 rounded-full bg-[#1B69B6] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider text-center hover:bg-[#FF7A00] transition-colors block shadow-md"
            >
              Verify My Insurance
            </Link>
          </div>

          {/* Card 2: Medicaid & CHIP */}
          <div className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E2E8F0] shadow-md hover:shadow-xl hover:border-[#1B69B6]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F0F6FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#FF7A00] mb-4 sm:mb-6 shadow-xs">
                <CreditCard className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <h2 className="font-sans text-xl sm:text-2xl font-black text-[#0B2545] mb-2 sm:mb-3">
                Medicaid & CHIP
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 sm:mb-6 font-normal">
                We are proud to accept Texas Medicaid and CHIP coverage for eligible children and teenagers under 21. Every child deserves a healthy, bright smile with zero financial barrier.
              </p>

              <ul className="space-y-2 font-sans text-xs font-bold text-[#334155] border-t border-[#E2E8F0] pt-4 mb-5 sm:mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B69B6] shrink-0" />
                  <span>Comprehensive kid-friendly cleanings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B69B6] shrink-0" />
                  <span>Cavity prevention & sealants</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B69B6] shrink-0" />
                  <span>Warm, gentle pediatric environment</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full py-2.5 sm:py-3.5 rounded-full bg-[#1B69B6] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider text-center hover:bg-[#FF7A00] transition-colors block shadow-md"
            >
              Book Kid Checkup
            </Link>
          </div>

          {/* Card 3: CareCredit Financing */}
          <div className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E2E8F0] shadow-md hover:shadow-xl hover:border-[#1B69B6]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F0F6FF] border border-[#1B69B6]/20 flex items-center justify-center text-[#1B69B6] mb-4 sm:mb-6 shadow-xs">
                <DollarSign className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <h2 className="font-sans text-xl sm:text-2xl font-black text-[#0B2545] mb-2 sm:mb-3">
                CareCredit® Financing
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 sm:mb-6 font-normal">
                Don&apos;t let out-of-pocket costs delay necessary dental treatment. CareCredit® offers flexible monthly payment plans with low interest and 0% promotional APR options.
              </p>

              <ul className="space-y-2 font-sans text-xs font-bold text-[#334155] border-t border-[#E2E8F0] pt-4 mb-5 sm:mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>0% promotional interest plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>Quick & simple online application</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>Covers cosmetic, Invisalign & crowns</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full py-2.5 sm:py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider text-center hover:bg-[#1B69B6] transition-colors block shadow-md"
            >
              Apply for CareCredit
            </Link>
          </div>
        </div>

        {/* EXACT 3 SPECIAL OFFERS SECTION */}
        <div className="mb-12 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F6FF] border border-[#1B69B6]/20 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1B69B6] mb-3">
              <Tag className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Limited Time Promotions</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl text-[#0B2545] font-black tracking-tight">
              Special <span className="text-[#1B69B6]">OFFERS</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#64748B] mt-2 sm:mt-3 font-normal">
              Take advantage of our special dental offers for new patients and families in Dallas.
            </p>
          </div>

          {/* 3 Coupon Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-6xl mx-auto">
            {exactSpecialOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-dashed border-[#1B69B6]/30 shadow-lg flex flex-col justify-between text-center hover:border-[#FF7A00] transition-all duration-300 relative group"
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#F0F6FF] text-[#1B69B6] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider mb-4 sm:mb-6">
                    {offer.badge}
                  </div>

                  {/* Big Price Tag */}
                  <div className="font-sans text-4xl sm:text-6xl font-black text-[#1B69B6] mb-2 sm:mb-3 tracking-tight">
                    {offer.price}
                  </div>

                  <h3 className="font-sans text-lg sm:text-2xl font-black text-[#0B2545] mb-1">
                    {offer.title}
                  </h3>

                  {offer.subtitle && (
                    <div className="font-sans text-xs sm:text-sm font-extrabold text-[#1B69B6] mb-2 sm:mb-3">
                      {offer.subtitle}
                    </div>
                  )}

                  <p className="font-sans italic text-[11px] sm:text-xs text-[#64748B] leading-relaxed my-3 sm:my-4">
                    {offer.disclaimer}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider hover:bg-[#1B69B6] transition-colors shadow-md mt-3 sm:mt-4 block"
                >
                  Claim {offer.price} Offer
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FINANCIAL QUESTIONS SECTION */}
        <div className="mb-12 sm:mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F6FF] border border-[#1B69B6]/20 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1B69B6] mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Financial Questions & Answers</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl text-[#0B2545] font-black tracking-tight">
              FINANCIAL <span className="text-[#1B69B6]">FAQ&apos;S</span>
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {financialQuestions.map((q) => {
              const isOpen = openFaqId === q.id;
              return (
                <div
                  key={q.id}
                  className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(q.id)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  >
                    <span className="font-sans text-sm sm:text-lg font-extrabold text-[#0B2545] leading-snug">
                      {q.question}
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
                          <p className="pt-3">{q.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOWNLOAD PATIENT PDF FORMS BOX */}
        <div id="pdf-forms" className="bg-[#F0F6FF] rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-[#1B69B6]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-[#FF7A00] mb-2">
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Downloadable Patient PDF Forms</span>
            </div>
            <h2 className="font-sans text-xl sm:text-3xl text-[#0B2545] font-black mb-2">
              Save Time During Your First Visit
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#475569] max-w-lg font-normal">
              Print and fill out your patient registration paperwork ahead of time for a fast, effortless check-in process.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto shrink-0">
            <a
              href={siteData.pdfForms.english}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider hover:bg-[#1B69B6] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>English Form (PDF)</span>
            </a>

            <a
              href={siteData.pdfForms.spanish}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-[#1B69B6] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider hover:bg-[#FF7A00] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Forma Español (PDF)</span>
            </a>
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="bg-gradient-to-r from-[#0B2545] via-[#1B69B6] to-[#0B2545] rounded-2xl sm:rounded-3xl p-4 sm:p-10 text-[#FFFFFF] shadow-xl text-center relative overflow-hidden border border-[#1B69B6]/40">
          <h2 className="font-sans text-base sm:text-3xl lg:text-4xl font-black mb-1.5 sm:mb-2 text-[#FFFFFF] tracking-tight">
            Questions About Your <span className="text-[#93C5FD]">Insurance or Payment?</span>
          </h2>
          <p className="font-sans text-[11px] sm:text-base text-[#FFFFFF]/90 max-w-md sm:max-w-xl mx-auto mb-4 sm:mb-8 font-normal leading-relaxed">
            Call our Dallas office today at 469-809-1919. Our friendly team is happy to assist you with insurance claims, payment plans, and scheduling!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-[200px] sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-3.5 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-md"
            >
              Book Appointment Online
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
