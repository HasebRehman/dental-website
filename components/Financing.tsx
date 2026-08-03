"use client";

import Link from "next/link";
import { CreditCard, DollarSign, ShieldCheck, CheckCircle2, FileText } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Financing() {
  return (
    <section
      id="financing"
      className="py-20 md:py-32 bg-[#FFFFFF] border-b border-[#43ACE0]/20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5FCAEF]/15 border border-[#43ACE0]/20 text-xs font-bold uppercase tracking-widest text-[#43ACE0] mb-3">
            <DollarSign className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Transparent Pricing & Flexible Payment Options</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#000000] font-bold tracking-tight">
            AFFORDABLE CARE FOR <span className="text-[#43ACE0]">EVERY FAMILY</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#000000] mt-4 font-normal leading-relaxed">
            We believe finances should never get in the way of a healthy, beautiful smile. Our practice works with most PPO insurances, Medicaid/CHIP for children, and low-interest CareCredit financing.
          </p>
        </div>

        {/* 3 Option Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {/* Card 1: PPO Insurance */}
          <div className="bg-[#5FCAEF]/10 rounded-3xl p-8 border border-[#43ACE0]/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#43ACE0]/15 border border-[#43ACE0]/30 flex items-center justify-center text-[#43ACE0] mb-6 shadow-xs">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#000000] mb-3">
                PPO Dental Insurance
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                We accept most preferred provider (PPO) dental insurance plans and file all paperwork on your behalf to maximize your annual benefits.
              </p>

              <ul className="space-y-2.5 font-sans text-xs font-bold text-[#000000] border-t border-[#43ACE0]/15 pt-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>Files claims directly on your behalf</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>Free insurance coverage verification</span>
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

              <h3 className="font-serif text-2xl font-bold text-[#000000] mb-3">
                Medicaid & CHIP for Kids
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                We proudly accept Texas Medicaid and CHIP coverage for eligible children and teenagers, making pediatric cleanings and care stress-free.
              </p>

              <ul className="space-y-2.5 font-sans text-xs font-bold text-[#000000] border-t border-[#43ACE0]/15 pt-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0" />
                  <span>Kid-friendly cleanings & fluoride</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0" />
                  <span>Cavity prevention & sealants</span>
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

              <h3 className="font-serif text-2xl font-bold text-[#000000] mb-3">
                CareCredit® Financing
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed mb-6 font-normal">
                CareCredit® offers flexible monthly payment plans with low interest and 0% promotional APR options for out-of-pocket treatments.
              </p>

              <ul className="space-y-2.5 font-sans text-xs font-bold text-[#000000] border-t border-[#43ACE0]/15 pt-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>0% promotional interest plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0" />
                  <span>Quick 2-minute online approval</span>
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

        {/* Download Patient Forms Banner */}
        <div className="bg-[#43ACE0] text-[#FFFFFF] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-extrabold text-[#F4A261] mb-2">
              <FileText className="w-4 h-4" />
              <span>Downloadable Patient PDF Forms</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Save Time During Your First Visit
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/90 max-w-lg font-normal">
              Print and fill out your patient registration paperwork ahead of time for a fast check-in process.
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
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#000000] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-wider hover:bg-[#F4A261] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Forma Español (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
