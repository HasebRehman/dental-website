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
      <section className="pt-44 pb-20 bg-[#43ACE0] text-[#FFFFFF] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4A261]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/20 border border-[#FFFFFF]/30 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-4">
              <Users className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>Dallas Family Dental Specialists</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-4">
              MEET OUR <span className="text-[#F4A261]">TEAM</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#FFFFFF]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
              Behind every healthy smile is a dedicated team of passionate professionals. Get to know the friendly staff serving families across Dallas & Oak Cliff.
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
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-[#43ACE0]/30 via-[#5FCAEF]/20 to-[#F4A261]/30 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

          <div className="relative aspect-[16/10] md:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(67,172,224,0.35)] border-4 border-[#FFFFFF]">
            <Image
              src="/img/team.jpg"
              alt="Illinois Family Dentistry Full Practice Staff Dallas"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#F4A261] mb-1">
                OUR DALLAS CLINIC FAMILY
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5FCAEF]/15 border border-[#43ACE0]/20 text-xs font-bold uppercase tracking-widest text-[#43ACE0] mb-3">
            <Heart className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Dedicated Dental Care Professionals</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#000000] font-bold tracking-tight">
            OUR DENTAL <span className="text-[#43ACE0]">SPECIALISTS</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#000000] mt-3 font-normal">
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
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#43ACE0]/20 via-[#5FCAEF]/25 to-[#F4A261]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="bg-[#5FCAEF]/10 rounded-3xl overflow-hidden border border-[#43ACE0]/20 shadow-[0_20px_50px_rgba(67,172,224,0.2)] hover:shadow-[0_25px_60px_rgba(67,172,224,0.3)] transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Member Portrait */}
                  <div className="relative aspect-[4/4] w-full overflow-hidden bg-[#43ACE0]/10">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-6 right-6 text-[#FFFFFF]">
                      <div className="text-[11px] uppercase font-extrabold tracking-widest text-[#F4A261] mb-0.5">
                        {member.role}
                      </div>
                      <h3 className="font-serif text-2xl font-bold">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <p className="font-sans text-xs sm:text-sm text-[#000000] leading-relaxed font-normal mb-4">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#43ACE0]/15 mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#000000] flex items-center gap-1.5 pt-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A261]" />
                    <span>{member.languages}</span>
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-extrabold uppercase tracking-widest text-[#43ACE0] hover:text-[#F4A261] transition-colors pt-3"
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
          className="mt-20 bg-[#43ACE0] rounded-3xl p-8 sm:p-12 text-[#FFFFFF] shadow-2xl text-center relative overflow-hidden"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3 text-[#FFFFFF]">
            Ready to Experience Gentle Family Care?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FFFFFF]/90 max-w-xl mx-auto mb-8 font-normal">
            Dr. Raj, Dr. Pham, and our entire Dallas team are ready to welcome you and your loved ones to Illinois Family Dentistry.
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
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
