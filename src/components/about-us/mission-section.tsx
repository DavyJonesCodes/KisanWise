"use client";
import React from "react";
import NumberTicker from "@/components/magicui/number-ticker";

export default function MissionSection() {
  return (
    <section className="relative my-16 flex w-full max-w-3xl flex-col gap-12 px-4 sm:px-8 lg:max-w-6xl lg:flex-row lg:gap-24">
      <div className="flex flex-grow flex-col gap-4">
        <h1 className="text-4xl font-bold text-foreground">Our Mission</h1>
        <p className="text-muted-foreground">
          At KisanWise, our mission is to transform the agricultural landscape
          by providing farmers with cutting-edge AI-driven tools and
          personalized advice. We aim to enhance productivity, sustainability,
          and profitability for farmers globally.
        </p>
        <div>
          <p className="mb-2 text-muted-foreground">We are committed to:</p>
          <ul className="flex list-disc flex-col gap-2 pl-6 text-muted-foreground">
            <li>
              <strong>Innovation:</strong> Utilizing advanced technologies to
              deliver precise farming solutions.
            </li>
            <li>
              <strong>Sustainability:</strong> Promoting practices that protect
              the environment and ensure long-term agricultural success.
            </li>
            <li>
              <strong>Community:</strong> Building a supportive network for
              farmers to share knowledge and experiences.
            </li>
          </ul>
        </div>
        <p className="text-muted-foreground">
          Join us in our mission to revolutionize agriculture with technology.
        </p>
      </div>
      <div className="flex min-w-fit flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex min-h-12 items-center text-5xl font-semibold">
            <NumberTicker value={10000} suffix="+" />
          </div>
          <p className="text-muted-foreground">
            Happy Farmers Using Our Platform
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex min-h-12 items-center text-5xl font-semibold">
            <NumberTicker value={200000} />
          </div>
          <p className="text-muted-foreground">
            Crops Monitored and Analyzed Annually
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex min-h-12 items-center text-5xl font-semibold">
            <NumberTicker value={98} suffix="%" />
          </div>
          <p className="text-muted-foreground">Satisfaction Rate from Users</p>
        </div>
      </div>
    </section>
  );
}
