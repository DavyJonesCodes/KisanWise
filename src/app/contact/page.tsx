"use client";

import Footer from "@/components/home/footer-main";
import Contact from "@/components/contact-page/contact-page";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
