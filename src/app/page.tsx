import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Platform from "@/components/sections/Platform";
import Products from "@/components/sections/Products";
import LMCP from "@/components/sections/LMCP";
import HowItWorks from "@/components/sections/HowItWorks";
import Market from "@/components/sections/Market";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Platform />
      <Products />
      <LMCP />
      <HowItWorks />
      <Market />
      <CTA />
      <Footer />
    </main>
  );
}
