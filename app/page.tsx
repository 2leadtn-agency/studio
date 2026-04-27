import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Process from "@/components/Process";
import WhyItMatters from "@/components/WhyItMatters";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Process />
        <WhyItMatters />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
