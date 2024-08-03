"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" id="helpherosection">
      <WavyBackground
        containerClassName="h-80 md:h-96"
        backgroundFill="#0c0a09"
        className="absolute flex h-full w-full flex-col items-center justify-center"
        colors={["#22c55e", "#166534", "#6ee7b7", "#228B22", "#98FF98"]}
        speed="slow"
      >
        <h1 className="max-w-4xl text-balance px-4 text-center text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
          Transforming Agriculture with AI Innovation
        </h1>
        <p className="mt-3 max-w-4xl text-balance px-4 text-center text-base font-normal text-foreground md:text-lg">
          Enhance your farming with personalized AI-driven advice, real-time
          updates, and advanced crop management tools. Join us in
          revolutionizing agriculture for a sustainable future.
        </p>
      </WavyBackground>
    </section>
  );
}
