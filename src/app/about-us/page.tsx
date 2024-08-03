"use client";

import HeroSection from "@/components/about-us/hero-section";
import MissionSection from "@/components/about-us/mission-section";
import ValueSection from "@/components/about-us/value-section";
import TeamSection from "@/components/about-us/team-section";
import Footer from "@/components/home/footer-main";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <HeroSection></HeroSection>
      <MissionSection></MissionSection>
      <ValueSection></ValueSection>
      <TeamSection></TeamSection>
      <Footer></Footer>
    </main>
  );
}
