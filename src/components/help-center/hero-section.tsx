"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export default function WavyBackgroundWrapper() {
  return (
    <section className="relative w-full overflow-hidden" id="helpherosection">
      <WavyBackground
        containerClassName="h-80 md:h-96"
        backgroundFill="#0c0a09"
        className="absolute flex h-full w-full flex-col items-center justify-center"
        colors={["#22c55e", "#166534", "#6ee7b7", "#228B22", "#98FF98"]}
        speed="slow"
      >
        <h1 className="text-center text-5xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Help Center
        </h1>
        <p className="mt-3 text-center text-base font-normal text-foreground md:text-lg">
          How can we help you today?
        </p>
      </WavyBackground>
    </section>
  );
}
