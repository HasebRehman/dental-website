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
      <section className="pt-44 pb-20 bg-[#43ACE0] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4A261]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Transparent Dental Pricing & Payment Options</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-4">
            FINANCIAL INFO & <span className="text-[#F4A261]">SPECIAL OFFERS</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            At Illinois Family Dentistry, high-quality healthcare comes with zero hidden fees. We accept PPO insurances, Medicaid/CHIP for kids, and offer flexible CareCredit financing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Visit</span>
            </Link>
            <a
              href="tel:4698091919"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F4A261]" />
              <span>469-809-1919</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        {/* 3 Main Financial Options Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {/* Card 1: PPO Insurance */}
          <div className="bg-[#5FCAEF]/10 rounded-3xl p-8 border border-[#43ACE0]/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#43ACE0] mb-6 shadow-xs">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#000000] mb-3">
                PPO Dental Insurance
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                We accept most major preferred provider (PPO) dental insurance plans. Our experienced team files all insurance claims directly on your behalf to maximize your coverage and minimize out-of-pocket expenses.
              </p>

              <ul className="space-y-2.5 font-sans text-xs font-bold text-[#000000] border-t border-[#43ACE0]/15 pt-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>Files claims directly on your behalf</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>Free insurance benefits verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>Maximizes your annual coverage</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full py-3.5 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest text-center hover:bg-[#F4A261] transition-colors block shadow-md"
            >
              Verify My Insurance
            </Link>
          </div>

          {/* Card 2: Medicaid & CHIP */}
          <div className="bg-[#5FCAEF]/10 rounded-3xl p-8 border border-[#43ACE0]/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#F4A261] mb-6 shadow-xs">
                <CreditCard className="w-7 h-7" />
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#000000] mb-3">
                Medicaid & CHIP
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                We are proud to accept Texas Medicaid and CHIP coverage for eligible children and teenagers under 21. Every child deserves a healthy, bright smile with zero financial barrier.
              </p>

              <ul className="space-y-2.5 font-sans text-xs font-bold text-[#000000] border-t border-[#43ACE0]/15 pt-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0" />
                  <span>Comprehensive kid-friendly cleanings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0" />
                  <span>Cavity prevention & sealants</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0" />
                  <span>Warm, gentle pediatric environment</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full py-3.5 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest text-center hover:bg-[#F4A261] transition-colors block shadow-md"
            >
              Book Kid Checkup
            </Link>
          </div>

          {/* Card 3: CareCredit Financing */}
          <div className="bg-[#5FCAEF]/10 rounded-3xl p-8 border border-[#43ACE0]/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#43ACE0] mb-6 shadow-xs">
                <DollarSign className="w-7 h-7" />
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#000000] mb-3">
                CareCredit® Financing
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                Don&apos;t let out-of-pocket costs delay necessary dental treatment. CareCredit® offers flexible monthly payment plans with low interest and 0% promotional APR options.
              </p>

              <ul className="space-y-2.5 font-sans text-xs font-bold text-[#000000] border-t border-[#43ACE0]/15 pt-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>0% promotional interest plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>Quick & simple online application</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>Covers cosmetic, Invisalign & crowns</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full py-3.5 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest text-center hover:bg-[#000000] transition-colors block shadow-md"
            >
              Apply for CareCredit
            </Link>
          </div>
        </div>

        {/* EXACT 3 SPECIAL OFFERS SECTION (Matching Screenshot) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5FCAEF]/15 border border-[#43ACE0]/20 text-xs font-bold uppercase tracking-widest text-[#43ACE0] mb-3">
              <Tag className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>Limited Time Promotions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#000000] font-bold tracking-tight">
              Special <span className="font-serif italic text-[#43ACE0]">OFFERS</span>
            </h2>
            <p className="font-sans text-sm text-[#000000] mt-3 font-normal">
              Take advantage of our special dental offers for new patients and families in Dallas.
            </p>
          </div>

          {/* 3 Coupon Cards Layout matching Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
            {exactSpecialOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-[#FFFFFF] rounded-3xl p-8 border-2 border-dashed border-[#43ACE0]/30 shadow-xl flex flex-col justify-between text-center hover:border-[#F4A261] transition-all duration-300 relative group"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#5FCAEF]/15 text-[#000000] text-[11px] font-extrabold uppercase tracking-wider mb-6">
                    {offer.badge}
                  </div>

                  {/* Big Price Tag */}
                  <div className="font-serif text-5xl sm:text-6xl font-bold text-[#43ACE0] mb-3 tracking-tight">
                    {offer.price}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#000000] mb-1">
                    {offer.title}
                  </h3>

                  {offer.subtitle && (
                    <div className="font-sans text-sm font-extrabold text-[#000000] mb-3">
                      {offer.subtitle}
                    </div>
                  )}

                  <p className="font-sans italic text-xs text-[#000000]/70 leading-relaxed my-4">
                    {offer.disclaimer}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3.5 px-6 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#43ACE0] transition-colors shadow-md mt-4 block"
                >
                  Claim {offer.price} Offer
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FINANCIAL QUESTIONS SECTION (Illinois Family Dentistry Q&A) */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5FCAEF]/15 border border-[#43ACE0]/20 text-xs font-bold uppercase tracking-widest text-[#43ACE0] mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>Financial Questions & Answers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#000000] font-bold tracking-tight">
              FINANCIAL <span className="text-[#43ACE0]">FAQ&apos;S</span>
            </h2>
          </div>

          <div className="space-y-4">
            {financialQuestions.map((q) => {
              const isOpen = openFaqId === q.id;
              return (
                <div
                  key={q.id}
                  className="bg-[#5FCAEF]/10 rounded-2xl border border-[#43ACE0]/20 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(q.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#000000]">
                      {q.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-[#F4A261] text-[#FFFFFF] rotate-180" : "bg-[#FFFFFF] text-[#43ACE0]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
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
                        <div className="px-6 pb-6 pt-0 border-t border-[#43ACE0]/15 text-xs sm:text-sm text-[#000000] leading-relaxed font-normal">
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
        <div id="pdf-forms" className="bg-[#5FCAEF]/10 rounded-3xl p-8 sm:p-12 border border-[#43ACE0]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-extrabold text-[#F4A261] mb-2">
              <FileText className="w-4 h-4" />
              <span>Downloadable Patient PDF Forms</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#000000] font-bold mb-2">
              Save Time During Your First Visit
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#000000] max-w-lg font-normal">
              Print and fill out your patient registration paperwork ahead of time for a fast, effortless check-in process.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <a
              href={siteData.pdfForms.english}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>English Form (PDF)</span>
            </a>

            <a
              href={siteData.pdfForms.spanish}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider hover:bg-[#F4A261] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Forma Español (PDF)</span>
            </a>
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="bg-[#43ACE0] rounded-3xl p-8 sm:p-12 text-[#FFFFFF] shadow-2xl text-center relative overflow-hidden">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3 text-[#FFFFFF]">
            Questions About Your Insurance or Payment?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FFFFFF]/90 max-w-xl mx-auto mb-8 font-normal">
            Call our Dallas office today at 469-809-1919. Our friendly team is happy to assist you with insurance claims, payment plans, and scheduling!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F4A261] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors shadow-lg"
            >
              Book Appointment Online
            </Link>
            <a
              href="tel:4698091919"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
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
