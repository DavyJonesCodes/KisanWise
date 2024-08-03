"use client";

import HeroSection from "@/components/policies/hero-section";
import TermsSection from "@/components/policies/terms-conditions";
import PrivacySection from "@/components/policies/privacy-policy";
import CookiesSection from "@/components/policies/cookies-policy";
import Footer from "@/components/home/footer-main";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <HeroSection></HeroSection>
      <TermsSection></TermsSection>
      <PrivacySection></PrivacySection>
      <CookiesSection></CookiesSection>
      <Footer></Footer>
    </main>
  );
}
