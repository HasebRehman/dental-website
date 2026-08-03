import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Doctors from "@/components/Doctors";
import SmileTransformation from "@/components/SmileTransformation";
import Testimonials from "@/components/Testimonials";
import Financing from "@/components/Financing";
import AppointmentCTA from "@/components/AppointmentCTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#121820] relative">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <About />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <SmileTransformation />
      <Testimonials />
      <Financing />
      <AppointmentCTA />
      <Location />
      <Footer />
    </main>
  );
}
