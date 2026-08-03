"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Phone, Heart, Users, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";

export default function MeetTheTeamPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] relative">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-44 pb-20 bg-[#1B69B6] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-4">
              <Users className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Dallas Family Dental Specialists</span>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FFFFFF] mb-4">
              MEET OUR <span className="text-[#93C5FD]">TEAM</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
              Behind every healthy smile is a dedicated team of passionate professionals. Get to know the friendly staff serving families across Dallas & Oak Cliff.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Visit</span>
              </Link>
              <a
                href="tel:4698091919"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#93C5FD]" />
                <span>469-809-1919</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Team Showcase Photo Section with Soft Ambient Glow Halo */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative group mb-16"
        >
          {/* Backlight Ambient Glow Halo */}
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-[#1B69B6]/30 via-[#93C5FD]/20 to-[#FF7A00]/30 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

          <div className="relative aspect-[16/10] md:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF]">
            <Image
              src="/img/team.jpg"
              alt="Illinois Family Dentistry Full Practice Staff Dallas"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#FF7A00] mb-1">
                OUR DALLAS CLINIC FAMILY
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-black">
                Illinois Family Dentistry Practice Staff
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Section Header for Team Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FF] border border-[#1B69B6]/20 text-xs font-bold uppercase tracking-widest text-[#1B69B6] mb-3">
            <Heart className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Dedicated Dental Care Professionals</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] font-black tracking-tight">
            OUR DENTAL <span className="text-[#1B69B6]">SPECIALISTS</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#64748B] mt-3 font-normal">
            From gentle cleanings to financial guidance, our team works together to make every visit comfortable and rewarding.
          </p>
        </motion.div>

        {/* 9 Team Members Cards Grid with Ambient Drop Shadows & Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
              className="relative group"
            >
              {/* Backlight Glow Halo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#1B69B6]/15 via-[#93C5FD]/20 to-[#FF7A00]/15 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-md hover:shadow-xl hover:border-[#1B69B6]/30 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Member Portrait */}
                  <div className="relative aspect-[4/4] w-full overflow-hidden bg-[#1B69B6]/10">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-6 right-6 text-[#FFFFFF]">
                      <div className="text-[11px] uppercase font-extrabold tracking-widest text-[#FF7A00] mb-0.5">
                        {member.role}
                      </div>
                      <h3 className="font-sans text-2xl font-black">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed font-normal mb-4">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E2E8F0] mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#334155] flex items-center gap-1.5 pt-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>{member.languages}</span>
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-extrabold uppercase tracking-widest text-[#1B69B6] hover:text-[#FF7A00] transition-colors pt-3"
                  >
                    Book Visit →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65 }}
          className="mt-20 bg-gradient-to-r from-[#0B2545] via-[#1B69B6] to-[#0B2545] rounded-3xl p-8 sm:p-12 text-[#FFFFFF] shadow-2xl text-center relative overflow-hidden border border-[#1B69B6]/40"
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-black mb-3 text-[#FFFFFF] tracking-tight">
            Ready to Experience <span className="text-[#93C5FD]">Gentle Family Care?</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FFFFFF]/90 max-w-xl mx-auto mb-8 font-normal">
            Dr. Raj, Dr. Pham, and our entire Dallas team are ready to welcome you and your loved ones to Illinois Family Dentistry.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7A00] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors shadow-lg"
            >
              Book Appointment Online
            </Link>
            <a
              href="tel:4698091919"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 text-[#FFFFFF] text-xs font-extrabold uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#0B2545] transition-colors"
            >
              Call 469-809-1919
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
