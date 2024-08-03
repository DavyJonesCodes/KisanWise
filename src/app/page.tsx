import HeroSection from "@/components/home/hero-section";
import FeatureSection from "@/components/home/features-section";
import GeminiSection from "@/components/home/gemini-section";
import FaqSection from "@/components/home/faq-section";
import SubscribeSection from "@/components/home/subscribe-section";
import Footer from "@/components/home/footer-main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <GeminiSection></GeminiSection>
      <SubscribeSection></SubscribeSection>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </main>
  );
}
