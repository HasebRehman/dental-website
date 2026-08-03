"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Phone, Calendar, ShieldCheck, Eye, X, Stethoscope, AlertTriangle, HeartPulse, Activity, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData, ServiceItem } from "@/data/services";

export default function ServicesPage() {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Lock background page scroll completely when modal is open
  useEffect(() => {
    if (activeModalService) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [activeModalService]);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] relative">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-44 pb-20 bg-[#1B69B6] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Full-Spectrum Family Dentistry</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FFFFFF] mb-4">
            OUR DENTAL <span className="text-[#93C5FD]">SERVICES</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Providing gentle, high-quality, and affordable oral healthcare for families across Dallas, Oak Cliff, Grand Prairie, and Duncanville.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Appointment</span>
            </Link>
            <a
              href="tel:4698091919"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#93C5FD]" />
              <span>Call 469-809-1919</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FF] border border-[#1B69B6]/20 text-xs font-bold uppercase tracking-widest text-[#1B69B6] mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Click Any Service To Read Full Details</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] font-black tracking-tight">
            COMPREHENSIVE <span className="text-[#1B69B6]">PREVENTIVE & RESTORATIVE CARE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              onClick={() => setActiveModalService(service)}
              className="group bg-[#F8FAFC] rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-transparent to-transparent opacity-90" />

                  {/* Badge Number */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-xs font-extrabold text-[#1B69B6] shadow-xs">
                    SERVICE {service.number}
                  </div>

                  {/* View Details Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[11px] font-extrabold text-[#1B69B6] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>View Details</span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 text-[#FFFFFF]">
                    <h2 className="font-sans text-2xl sm:text-3xl font-black">
                      {service.title}
                    </h2>
                    <p className="font-sans text-xs uppercase tracking-widest text-[#93C5FD] font-extrabold mt-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#E2E8F0] pt-6">
                    {service.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-bold text-[#334155]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF7A00] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button - Redirects to /contact */}
              <div className="p-6 sm:p-8 pt-0 border-t border-[#E2E8F0] mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalService(service);
                  }}
                  className="text-xs font-extrabold uppercase tracking-widest text-[#1B69B6] hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  Read Overview →
                </button>

                <Link
                  href="/contact"
                  onClick={(e) => e.stopPropagation()}
                  className="py-3 px-6 rounded-full bg-[#FF7A00] text-[#FFFFFF] hover:bg-[#1B69B6] transition-colors duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-extrabold shadow-md"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Insurance & Booking Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0B2545] via-[#1B69B6] to-[#0B2545] rounded-3xl p-8 sm:p-12 text-[#FFFFFF] shadow-2xl text-center relative overflow-hidden border border-[#1B69B6]/40">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#FF7A00]" />
            <span>PPO Insurance • Medicaid/CHIP • CareCredit</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-black mb-3 text-[#FFFFFF] tracking-tight">
            Ready to Schedule <span className="text-[#93C5FD]">Your Appointment?</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FFFFFF]/90 max-w-xl mx-auto mb-8 font-normal">
            Whether you need a routine cleaning, pediatric visit, or same-day emergency relief, Dr. Raj & Dr. Pham are ready to welcome your family!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-lg"
            >
              Book Online Now
            </Link>
            <a
              href="tel:4698091919"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors"
            >
              Call 469-809-1919
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Service Detail Modal Popup (Only modal inner body scrolls, background page scroll completely trapped & isolated) */}
      {activeModalService && (
        <div
          onClick={() => setActiveModalService(null)}
          onWheel={(e) => e.stopPropagation()}
          className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            className="bg-[#FFFFFF] rounded-3xl max-w-4xl w-full max-h-[85vh] border border-[#43ACE0]/30 shadow-2xl relative text-left text-[#000000] flex flex-col overflow-hidden"
          >
            {/* Sticky Header with Close Button */}
            <div className="sticky top-0 bg-[#43ACE0] text-[#FFFFFF] p-6 sm:p-8 rounded-t-3xl flex items-center justify-between z-20 shadow-md shrink-0">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#F4A261] block mb-1">
                  ILLINOIS FAMILY DENTISTRY SERVICE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="w-10 h-10 rounded-full bg-[#FFFFFF]/20 hover:bg-[#F4A261] text-[#FFFFFF] transition-colors flex items-center justify-center font-bold text-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Inner Modal Content (overscroll-contain isolates scroll to modal, hidden scrollbar) */}
            <div
              onWheel={(e) => e.stopPropagation()}
              className="p-6 sm:p-10 space-y-8 font-sans overflow-y-auto overscroll-contain flex-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* 1. Dental Exams & Cleanings */}
              {activeModalService.id === "exams-cleanings" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    At <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span>, we believe in prevention as the first line of defense against dental disease. We are pleased to offer cutting-edge smile solutions, including comprehensive dental exams and cleanings, to maintain strong, healthy, and beautiful smiles. We invite you to experience preventive dental care at its best!
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      How Often Should I See My Dentist?
                    </h4>
                    <p>
                      According to the <span className="font-bold text-[#43ACE0]">American Dental Association (ADA)</span>, you should schedule dental exams and cleanings at regular intervals recommended by your dentist. In most cases, our patients require twice-yearly preventive dental appointments. However, individuals with periodontal (gum) disease or those at risk of developing dental problems may need more frequent dental visits.
                    </p>

                    <div className="space-y-3 pt-3">
                      <h5 className="font-sans text-xs uppercase font-extrabold tracking-widest text-[#F4A261]">
                        Routine dental exams and cleanings offer numerous benefits:
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🛡️ Prevention
                          </span>
                          <span className="text-xs">
                            Regular dental exams and cleanings can lower the risk of tooth decay and gum disease, keeping your smile healthy and sound.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🔍 Early Detection
                          </span>
                          <span className="text-xs">
                            Detect potential issues when they are easiest to treat, preventing them from progressing into extensive and costly procedures.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🪥 Healthy Habits
                          </span>
                          <span className="text-xs">
                            Promotes healthy daily habits and proper brushing/flossing techniques to maintain good lifelong oral health.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🫀 Better Health
                          </span>
                          <span className="text-xs">
                            Poor dental health is closely associated with systemic conditions such as diabetes and heart disease. Maintaining a healthy smile enhances overall health.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs sm:col-span-2">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            ✨ Improved Appearance
                          </span>
                          <span className="text-xs">
                            Regular cleanings enhance the appearance of your smile by removing plaque and tartar buildup, leaving your teeth looking bright and stain-free.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Can I Expect During My Appointment?
                    </h4>
                    <p>
                      Each visit to our dental practice is a unique experience tailored to your smile&apos;s needs. Here&apos;s a look at what you can expect during your appointment:
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Dental X-Rays
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Low-radiation digital X-rays help us detect early decay between teeth, bone loss, and hidden dental issues.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Intraoral Camera Evaluation
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Provides a magnified view of your teeth and gums to visualize early decay, chips, or tooth fractures.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Comprehensive Dental Exam
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Complete evaluation of every aspect of your oral health, including teeth, gums, and bite alignment.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Oral Cancer Screening
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Rule out abnormal white or red patches, non-healing sores, or lumps to ensure early detection and optimal outcomes.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            TMJ & Bruxism Screening
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Checks for jaw clicking, popping, pain, or signs of teeth grinding and clenching.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Ultrasonic Dental Cleaning
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Blasts off stubborn plaque and tartar deposits from teeth and gum lines, leaving your smile whiter and cleaner.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Fluoride Treatments
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Natural cavity-fighter that strengthens tooth enamel and remineralizes early stage decay for children and adults.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Next Steps & Custom Treatment Plan
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            We share all findings and discuss any preventive or restorative procedures needed for lifelong healthy smiles.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Dental Exams and Cleanings Near Me in Dallas, TX
                    </h4>
                    <p className="text-xs">
                      If you&apos;re looking for a dental practice offering comprehensive dental care and personalized smile solutions, Illinois Family Dentistry is the place to be. Our skilled and compassionate team is committed to providing exceptional care in a warm and friendly environment.
                    </p>
                  </div>
                </div>
              )}

              {/* 2. Children's Dentistry */}
              {activeModalService.id === "childrens-dentistry" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    We know you’ll agree that establishing healthy oral care habits from a young age is one of the most important things parents can do. That’s why our kid-friendly team at <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span> emphasizes home oral hygiene and regular visits to the dentist. We are committed to providing our young patients with outstanding care and positive experiences to lay the groundwork for healthy smiles for life!
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      My Child’s First Dental Visit
                    </h4>
                    <p>
                      Most dental professionals recommend seeing a dentist once the first tooth erupts, around 6-8 months, or by the first birthday at the latest. Our focus at <span className="font-bold text-[#43ACE0]">Illinois Family Dentistry</span> is on prevention and early intervention to build a foundation for good oral hygiene and healthy, lasting smiles.
                    </p>

                    <div className="space-y-3 pt-3">
                      <h5 className="font-sans text-xs uppercase font-extrabold tracking-widest text-[#F4A261]">
                        Early dental visits offer numerous benefits:
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🛡️ Maintaining Healthy Smiles
                          </span>
                          <span className="text-xs">
                            Regular checkups and good dental hygiene keep tooth decay and gum disease at bay so your little one enjoys a childhood filled with healthy, happy smiles.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🪥 Setting Up Good Habits for Life
                          </span>
                          <span className="text-xs">
                            Maintaining regular dental visits and emphasizing the importance of dental hygiene helps set your child up for good dental health for life.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🫀 Promoting Lifelong Oral Health
                          </span>
                          <span className="text-xs">
                            Poor dental health in childhood can lead to problems into adulthood. Preventive care right from the start lowers future oral health risks.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🧸 Avoiding Dental Fear
                          </span>
                          <span className="text-xs">
                            Building familiarity with the dentist from a young age helps avoid fear that some kids - and many adults - have of dentists and dentistry.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Can I Expect During My Child’s Dental Visits?
                    </h4>
                    <p>
                      Each dental visit is a unique experience tailored to your child’s needs. Here’s a look at some of the services we offer and what you can expect:
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Comprehensive Dental Exams & X-Rays
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Our team evaluates teeth, gums, and oral development to ensure everything is on track and prevent minor issues from progressing.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Gentle Pediatric Cleanings & Polishing
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Removes plaque and tartar buildup from teeth and gums to prevent tooth decay and bad breath, leaving bright smiles even brighter.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Interactive Patient & Parent Education
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            We demonstrate proper brushing and flossing techniques, discuss healthy nutrition, and answer age-appropriate oral health concerns.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Cavity-Fighting Fluoride Treatments
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Strengthens enamel and remineralizes early tooth decay, making teeth significantly more resistant to cavities.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Protective Dental Sealants
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Thin protective coatings placed on premolars and molars to shield deep chewing grooves from harmful cavity-causing bacteria.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#5FCAEF]/10 border border-[#43ACE0]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#43ACE0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs uppercase font-extrabold text-[#000000] block">
                            Tooth-Colored Fillings for Kids
                          </strong>
                          <span className="text-xs text-[#000000]/80">
                            Quick, simple, and virtually painless composite fillings to repair cavities with seamless, natural-looking results.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Children’s Dentistry Near Me in Dallas, TX
                    </h4>
                    <p className="text-xs">
                      Thank you for choosing Illinois Family Dentistry for your child’s oral health needs. Our team is committed to delivering the highest level of care to promote healthy smiles for life.
                    </p>
                  </div>
                </div>
              )}

              {/* 3. Periodontal Therapy */}
              {activeModalService.id === "periodontal-therapy" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    Periodontal disease is a serious gum infection that can damage the bone and tissues supporting the teeth. Left untreated, the devastating condition can lead to tooth loss and impact your overall health. That’s why <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span> focuses on preventing, treating, and managing periodontal disease to maintain healthy smiles for a lifetime.
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Are the Causes of Periodontal Disease?
                    </h4>
                    <p>
                      Periodontal disease usually develops as a result of poor oral hygiene. When plaque, a sticky film of bacteria, is not removed by brushing, flossing, and regular professional cleanings, it can harden to tartar. That can irritate the gum tissues, leading to inflammation and forming spaces called pockets between the teeth and gums. These spaces trap plaque and food debris, providing bacteria with the perfect environment to flourish.
                    </p>
                    <p>
                      Additional risk factors for gum disease include genetics, diabetes, smoking, crooked teeth, the natural aging process, and hormonal changes. The good news is that early intervention and good oral hygiene practices can usually reverse the earliest stage of periodontal disease, known as gingivitis.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Are the Warning Symptoms of Periodontal Disease?
                    </h4>
                    <p>
                      If you see any of the following signs of gum disease, contact Illinois Family Dentistry right away:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Red, swollen, or tender gums</span>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Gums that bleed when brushing or flossing</span>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Loose or sensitive teeth</span>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Persistent bad breath (halitosis)</span>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs sm:col-span-2">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Changes in how your teeth fit together when biting</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      How Can Periodontal Disease Impact My Health?
                    </h4>
                    <p>
                      Periodontal disease isn&apos;t just an oral health problem. It can also impact your overall systemic health. Several clinical studies found that patients with periodontal disease are more likely to develop chronic health conditions, including diabetes, heart disease, high blood pressure, stroke, rheumatoid arthritis, and even pregnancy complications.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      How Is Periodontal Disease Treated?
                    </h4>
                    <p>
                      Periodontal disease treatment starts with a professional deep cleaning, a procedure known as <span className="font-bold text-[#43ACE0]">scaling and root planing</span>. Scaling involves using an ultrasonic scaler to blast away plaque and tartar from the teeth and right below your gum line. Root planing, on the other hand, involves cleaning and smoothing your tooth root surfaces. That helps discourage inflammation and prevents the infection from spreading, promoting healing and gum tissue reattachment.
                    </p>
                    <p>
                      You may require topical or oral antibiotics to control the infection, depending on your unique needs. In severe cases of periodontitis, surgical intervention may be necessary.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Is Periodontal Maintenance?
                    </h4>
                    <p>
                      After gum disease treatment, we typically recommend periodontal maintenance appointments every <span className="font-bold text-[#F4A261]">three to four months</span> rather than the standard twice-yearly dental cleanings. During your visits, we will clean your teeth, monitor your gum health, and provide any necessary treatments to keep your gums as healthy as possible.
                    </p>
                    <p>
                      Practicing good home oral hygiene is essential to your periodontal maintenance plan. Make sure to brush and floss regularly and rinse with an antimicrobial mouthwash. The goal is to stop the progression of periodontal disease and maintain healthy gums and teeth.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Periodontal Therapy Near Me in Dallas, TX
                    </h4>
                    <p>
                      If you’d like to learn more about the prevention, treatment, and management of periodontal disease, contact Illinois Family Dentistry. Our team is committed to helping our valued patients maintain healthy smiles for life.
                    </p>
                  </div>
                </div>
              )}

              {/* 4. Tooth-Colored Fillings */}
              {activeModalService.id === "tooth-colored-fillings" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    According to the <span className="font-bold text-[#43ACE0]">American Dental Association</span>, approximately 91 percent of adults will experience at least one cavity in a permanent tooth at some point. The good news is that tooth-colored fillings can restore your smile&apos;s health and function with seamless results. Our team at <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span> is committed to using the best available filling materials for long-term healthy smiles.
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Are Tooth-Colored Fillings?
                    </h4>
                    <p>
                      Tooth-colored fillings, also known as white or composite fillings, are becoming increasingly popular as an aesthetic alternative to traditional silver amalgam fillings. They are made from a composite resin material that we can match to the color and texture of your teeth, delivering beautifully natural results.
                    </p>
                    <p>
                      In the past, tooth-colored fillings were primarily used to repair small to mid-sized cavities in the front teeth. The composite material has come a long way, with today&apos;s modern fillings ideal for restoring any teeth, even molars exposed to considerable chewing pressure.
                    </p>

                    <div className="space-y-3 pt-3">
                      <h5 className="font-sans text-xs uppercase font-extrabold tracking-widest text-[#F4A261]">
                        Benefits of Tooth-Colored Composite Fillings:
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            ✨ Look Completely Natural
                          </span>
                          <span className="text-xs">
                            Custom color-matched to your natural teeth, creating seamless, invisible restorations.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🦷 Preserve Tooth Structure
                          </span>
                          <span className="text-xs">
                            Requires significantly less removal of healthy tooth structure compared to traditional metal amalgam.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🛠️ Highly Versatile
                          </span>
                          <span className="text-xs">
                            Repairs cavities, chipped or worn enamel, discolored or misshapen teeth, and replaces old dark fillings.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🔗 Bond Directly to Tooth
                          </span>
                          <span className="text-xs">
                            Micromechanically bonds to tooth structure, reinforcing support and reducing future crack risks.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🌡️ No Expansion/Contraction
                          </span>
                          <span className="text-xs">
                            100% metal-free resin does not expand or contract with temperature changes, protecting enamel.
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                          <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                            🍃 100% Mercury-Free
                          </span>
                          <span className="text-xs">
                            Provides a safe, non-toxic, and biocompatible alternative to silver amalgam fillings.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Is the Tooth-Colored Filling Procedure?
                    </h4>
                    <p>
                      Thanks to today&apos;s local anesthetics, the tooth-colored filling procedure is quick and comfortable. After numbing the area, we will remove any decayed areas of the tooth, clean the site, and place the filling material in layers. We use a special curing light to harden the material. The last step is polishing your filling and making adjustments to ensure optimal comfort and function.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      Caring for Teeth with Tooth-Colored Fillings
                    </h4>
                    <p>
                      Teeth with white fillings do not require special care. Continue to brush and floss regularly to lower your risk of new decay, and visit Illinois Family Dentistry for routine dental exams and cleanings. We will monitor your oral health and fillings to ensure they stay in tip-top shape.
                    </p>
                    <p>
                      Avoid biting down on hard objects or hard candy. If you grind your teeth at night (bruxism), we recommend wearing a custom night guard to prevent damage.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Tooth-Colored Fillings Near Me in Dallas, TX
                    </h4>
                    <p className="text-xs">
                      Repairing cavities doesn&apos;t need to interfere with your smile. Visit Illinois Family Dentistry to learn more about restoring decayed teeth with seamless, natural-looking results.
                    </p>
                  </div>
                </div>
              )}

              {/* 5. Dental Crowns & Bridges */}
              {activeModalService.id === "crowns-bridges" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    If you have damaged or missing teeth, <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span> is here to help. Our dedicated team takes pride in offering custom dental crowns and bridges made to match the appearance and texture of your natural teeth. Our skilled dentists are committed to restoring your smile’s health, function, and beautifully natural appearance tailored to your unique needs.
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Are Dental Crowns?
                    </h4>
                    <p>
                      Dental crowns are tooth-shaped restorations that cap or fully encase the visible portions of damaged teeth, restoring their form and function. They offer an excellent solution for repairing chipped or broken teeth, supporting fractured teeth, protecting teeth after root canal therapy, or strengthening teeth with deep decay or large fillings.
                    </p>
                    <p>
                      At <span className="font-bold text-[#43ACE0]">Illinois Family Dentistry</span>, we offer the best crown materials available, including porcelain-fused-to-metal (PFM), all-porcelain, ceramic, and high-strength zirconia.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Are Dental Bridges?
                    </h4>
                    <p>
                      Dental bridges are fixed restorations designed to replace one or more adjacent teeth. In most cases, they are attached to crowns placed on natural teeth on either side of the gap, known as anchor or abutment teeth. We create your replacement teeth, known as pontics, from the same quality materials as dental crowns.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Are the Benefits of Dental Crowns and Bridges?
                    </h4>
                    <p>
                      Restoring damaged or missing teeth with a dental crown or fixed bridge offers many benefits:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          👑 Enhances Appearance & Function
                        </span>
                        <span className="text-xs">
                          Custom-made to match your smile perfectly, restoring full chewing power and natural beauty.
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          🦷 Prevents Tooth Shifting
                        </span>
                        <span className="text-xs">
                          Fills gaps so neighboring teeth cannot drift into empty spaces, protecting your bite alignment.
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          ⚖️ Redistributes Bite Forces
                        </span>
                        <span className="text-xs">
                          Lowers the risk of tooth decay, gum disease, uneven tooth wear, tooth fracture, and TMJ jaw pain.
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          ⏳ Exceptional Longevity
                        </span>
                        <span className="text-xs">
                          High-quality crowns and bridges crafted with precision can last 15 years or even longer with proper care.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Is the Dental Crown or Bridge Procedure?
                    </h4>
                    <p>
                      The procedure typically takes two comfortable appointments. We start by preparing the damaged tooth or abutments, taking precision digital impressions for our lab technicians, and placing a temporary crown or bridge. Once your custom permanent restoration is fabricated, we evaluate it for a perfect color-match and fit, then permanently cement it in place.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Dental Crowns and Bridges Near Me in Dallas, TX
                    </h4>
                    <p className="text-xs">
                      If you have a damaged or missing tooth, contact Illinois Family Dentistry to schedule a consultation. Our experienced dentists will restore your smile’s health, function, and natural appearance.
                    </p>
                  </div>
                </div>
              )}

              {/* 6. Teeth Whitening */}
              {activeModalService.id === "teeth-whitening" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    Looking for solutions to erase teeth stains and discoloration? If so, you’ve come to the right place. <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span> is pleased to offer professional whitening at your convenience in the comfort of your home. Our safe and effective treatments are tailored to your unique needs, delivering beautifully white, bright, and dazzling smiles!
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      How Does Teeth Whitening Work?
                    </h4>
                    <p>
                      Years of exposure to highly pigmented foods and beverages, such as coffee, tea, and red wine, can leave your teeth looking dark or discolored, as can smoking and tobacco use. Other factors include trauma, medications, or excessive fluoride during childhood.
                    </p>
                    <p>
                      Teeth whitening applies a professional bleaching agent (hydrogen peroxide or carbamide peroxide) directly to your enamel. The gel releases active oxygen molecules that penetrate deep into enamel micro-pores, lifting stubborn stains without damaging your tooth structure.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      Over-the-Counter vs. Professional Teeth Whitening
                    </h4>
                    <p>
                      While over-the-counter whitening strips and kits promise quick results, none are as powerful, safe, or long-lasting as professional dentist-supervised whitening. Furthermore, generic OTC kits can contain harsh abrasives that cause severe tooth sensitivity or irritate your gums.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      Professional At-Home Teeth Whitening Kits
                    </h4>
                    <p>
                      Our practice provides custom whitening trays crafted from exact digital impressions of your teeth, paired with professional-grade bleaching gel. Simply wear the custom trays as directed to reveal a dramatically brighter smile, with occasional touch-ups to maintain your glow.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      Am I a Candidate for Teeth Whitening?
                    </h4>
                    <p>
                      Yellowish stains from food or tobacco show exceptional whitening results. Deep gray/brown structural stains or tooth-colored fillings/crowns do not respond to bleaching. Our dentists will evaluate your teeth and recommend options like porcelain veneers or cosmetic bonding if whitening is not ideal.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Teeth Whitening Near Me in Dallas, TX
                    </h4>
                    <p className="text-xs">
                      If you’re looking for a quick way to transform your smile, visit Illinois Family Dentistry. Our at-home whitening kits safely and effectively erase years of staining and discoloration.
                    </p>
                  </div>
                </div>
              )}

              {/* 7. Root Canal Therapy */}
              {activeModalService.id === "root-canal-therapy" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    Do you have severe, persistent tooth pain? If so, chances are you have an infected tooth requiring root canal therapy. Despite what you may have heard, the procedure is relatively comfortable, comparable to having a cavity filled. Our team at <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span> uses modern technology, techniques, and anesthetics to provide you with the exceptional care you deserve.
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Is Root Canal Therapy?
                    </h4>
                    <p>
                      Inside every tooth is an area called the pulp, which houses nerves, blood vessels, and connective tissues. Tooth decay or damage can provide an entryway for bacteria, potentially leading to tooth pulp infection. Antibiotics can help provide temporary symptom relief, but they cannot remove the source of the infection.
                    </p>
                    <p>
                      Root canal therapy is an endodontic treatment designed to treat infected tooth pulp, relieving your discomfort and saving the damaged tooth. Left untreated, the inflammation and infection can progress and lead to complications, including severe pain, an abscess, facial swelling, and bone loss around the tooth’s root. The infection can also enter the bloodstream, putting your health at risk. The only alternative to a root canal treatment is having the affected tooth extracted, which is always considered a last resort.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Are Signs of Root Canal Problems?
                    </h4>
                    <p>
                      Signs of root canal problems include the following:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Persistent, throbbing tooth pain</span>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Lingering sensitivity to hot and cold</span>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Pain when chewing or pressing on tooth</span>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Swollen, tender, or inflamed gums</span>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Pimple or bump on gums (abscess)</span>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-[#F4A261] shrink-0" />
                        <span className="text-xs font-bold">Darkened or discolored tooth enamel</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Is the Root Canal Procedure?
                    </h4>
                    <p>
                      Most root canal treatments require two comfortable appointments. We start by numbing the area with local anesthesia for your comfort. We are happy to administer nitrous oxide sedation, if needed, to help you relax during the procedure.
                    </p>
                    <p>
                      After isolating the tooth, we make a small opening in its crown leading to the root canals, carefully remove infected pulp tissue, clean and shape the area, and fill your root canals with gutta-percha. The last step is sealing the space with a temporary filling and preparing a dental crown for permanent protection.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Root Canal Therapy Near Me in Dallas, TX
                    </h4>
                    <p className="text-xs">
                      If you have a damaged or painful tooth, contact Illinois Family Dentistry. Our experienced dentists will evaluate your concerns and ensure a comfortable, stress-free experience.
                    </p>
                  </div>
                </div>
              )}

              {/* 8. Invisalign® Clear Aligners */}
              {activeModalService.id === "invisalign" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    If you’ve been hiding your smile because of crooked teeth, <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span> is here to help. We are pleased to offer Invisalign, the world’s leading clear aligner system. A visit to our Dallas office will get you on track to the smile of your dreams.
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Is Invisalign?
                    </h4>
                    <p>
                      Invisalign by Align Technology is an orthodontic treatment option that uses clear, removable aligners to straighten your teeth and perfect your smile. It continues to grow in popularity as an alternative to traditional braces because it is much more discreet, comfortable, and convenient.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      How Does Invisalign Work?
                    </h4>
                    <p>
                      During your initial consultation, our experienced team will evaluate your unique needs and take 3D digital impressions of your teeth. You will get to visualize what Invisalign can do for your smile. We create a custom treatment plan outlining precise tooth movements and expected treatment length.
                    </p>
                    <p>
                      When your aligners are ready, you’ll wear your virtually invisible braces for 20 to 22 hours each day, taking them out only to eat, brush, and floss. Every two weeks, you switch to the next aligner set in the series to slowly shift teeth into place, followed by retainers to hold your new smile in alignment.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Are the Benefits of Invisalign?
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          ✨ Practically Invisible
                        </span>
                        <span className="text-xs">
                          Clear SmartTrack aligner trays are virtually unnoticeable with zero metal brackets.
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          🍿 100% Convenient
                        </span>
                        <span className="text-xs">
                          Removable trays mean zero dietary restrictions and hassle-free eating during events.
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          🛋️ Enhanced Comfort
                        </span>
                        <span className="text-xs">
                          Smooth, custom-molded plastic with no sharp edges or wires poking your cheeks or gums.
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          ⚡ Up to 50% Faster
                        </span>
                        <span className="text-xs">
                          Straightens teeth up to 50% faster than traditional metal braces.
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          🪥 Easy Oral Hygiene
                        </span>
                        <span className="text-xs">
                          Pop aligners out to brush and floss normally without navigating around metal wires.
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          🎯 Corrects Complex Bites
                        </span>
                        <span className="text-xs">
                          Treats overbites, underbites, open bites, crossbites, crowding, and gaps.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Invisalign Near Me in Dallas, TX
                    </h4>
                    <p className="text-xs">
                      Speak to our experienced dentists at Illinois Family Dentistry today to start your journey toward a straight, beautiful smile.
                    </p>
                  </div>
                </div>
              )}

              {/* 9. Dental Emergencies */}
              {activeModalService.id === "emergencies" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    Dental emergencies can happen when you least expect and can cause considerable pain and discomfort. If you ever bite into hard food and break a tooth or suffer a blow to your face, don’t panic. The <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span> team is here to relieve your pain and help restore your healthy smile.
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Constitutes a Dental Emergency?
                    </h4>
                    <p>
                      Dental emergencies are situations requiring urgent dental care to relieve severe pain, save a tooth, treat an infection, or stop bleeding. Common emergencies include severe toothaches, chipped/broken teeth, knocked-out teeth, lost fillings or crowns, broken dentures, jaw pain, and soft tissue injuries.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      When Should I Call for Emergency Dental Care?
                    </h4>
                    <p>
                      Contact <span className="font-bold text-[#43ACE0]">Illinois Family Dentistry</span> immediately at 469-809-1919. We offer same-day, evening, and Saturday emergency appointments to provide prompt relief.
                    </p>
                    <div className="p-4 rounded-xl bg-[#F4A261]/15 border border-[#F4A261]/30 text-xs font-bold text-[#000000]">
                      ⚠️ Note: If you have a life-threatening emergency or severe bleeding that won’t stop, call 911 or head to your nearest hospital ER.
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      What Can I Expect During an Emergency Visit?
                    </h4>
                    <p>
                      We start with a quick exam and digital X-rays to locate the source of pain, numb the area with local anesthetic, and perform root canal therapy, tooth replantation, emergency filling/crown repair, or gentle extraction as needed.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Emergency Dental Care Near Me in Dallas, TX
                    </h4>
                    <p className="text-xs">
                      If you or a loved one experience a dental emergency, call 469-809-1919 immediately. Your comfort and well-being are always our topmost priorities!
                    </p>
                  </div>
                </div>
              )}

              {/* 10. Missing Teeth Replacements */}
              {activeModalService.id === "missing-teeth" && (
                <div className="space-y-6 text-sm text-[#000000] leading-relaxed font-normal">
                  <div className="p-5 rounded-2xl bg-[#5FCAEF]/10 border border-[#43ACE0]/20 font-medium">
                    At <span className="font-extrabold text-[#43ACE0]">Illinois Family Dentistry</span>, we understand the challenges of living with missing teeth and are here to help. We offer a range of tooth replacement options, including complete and partial dentures and implant restorations, to restore your smile’s health, function, and aesthetics.
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      Complete & Partial Dentures
                    </h4>
                    <p>
                      Dentures and partials offer a cost-effective, time-tested solution to restore missing teeth. Today’s restorations are sleeker, more functional, and more natural-looking than ever!
                    </p>
                    <div className="space-y-2">
                      <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20">
                        <strong className="text-xs uppercase font-extrabold text-[#43ACE0] block">
                          Immediate Dentures
                        </strong>
                        <span className="text-xs">
                          Placed immediately after extractions so you never go without teeth while gums heal.
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20">
                        <strong className="text-xs uppercase font-extrabold text-[#43ACE0] block">
                          Conventional Dentures
                        </strong>
                        <span className="text-xs">
                          Custom crafted from impressions after full healing for maximum comfort, stability, and aesthetic fit.
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20">
                        <strong className="text-xs uppercase font-extrabold text-[#43ACE0] block">
                          Removable Partial Dentures
                        </strong>
                        <span className="text-xs">
                          Replaces single or multiple missing teeth held securely by precision attachments or natural clasps.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#43ACE0]/15">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                      Dental Implant Restorations
                    </h4>
                    <p>
                      Dental implants are small titanium posts placed in your jawbone to replace missing tooth roots, fusing with bone to preserve jawbone density and support lifelong replacement teeth.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          Implant Crowns
                        </span>
                        <span className="text-xs">
                          Single porcelain crown attached to an implant post.
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          Implant Bridges
                        </span>
                        <span className="text-xs">
                          Fixed multi-tooth bridge anchored by dental implants.
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#43ACE0]/20 shadow-xs">
                        <span className="font-bold text-[#43ACE0] block text-xs uppercase tracking-wider mb-1">
                          Implant Dentures
                        </span>
                        <span className="text-xs">
                          Full arch denture snap-anchored by strategic implants.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#43ACE0]/10 border border-[#43ACE0]/30 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#000000]">
                      Missing Teeth Replacements Near Me in Dallas, TX
                    </h4>
                    <p className="text-xs">
                      Contact Illinois Family Dentistry to schedule a consultation. Our experienced team will recommend the ideal tooth replacement solution based on your goals.
                    </p>
                  </div>
                </div>
              )}

              {/* Modal Footer CTA Button - Redirects to /contact */}
              <div className="pt-6 border-t border-[#43ACE0]/20 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <div className="text-xs font-bold text-[#000000]">
                  Illinois Family Dentistry • 2300 W Illinois Ave, Dallas TX
                </div>

                <Link
                  href="/contact"
                  onClick={() => setActiveModalService(null)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#43ACE0] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F4A261] transition-colors shadow-lg text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
