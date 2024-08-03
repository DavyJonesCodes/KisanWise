"use client";

import FaqSection from "@/components/help-center/faq-section";
import Footer from "@/components/home/footer-main";
import HeroSection from "@/components/help-center/hero-section";
import SupportSection from "@/components/help-center/support-section";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <HeroSection></HeroSection>
      <SupportSection></SupportSection>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </main>
  );
}
