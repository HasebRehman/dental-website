import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Financing from "@/components/Financing";
import Location from "@/components/Location";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] relative">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Financing />
      <Location />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
