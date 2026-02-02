import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeDo />
      <Problem />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
