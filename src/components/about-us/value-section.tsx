"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function ValueSection() {
  return (
    <section className="relative my-16 flex w-full max-w-3xl flex-col gap-12 px-4 sm:px-8 lg:max-w-6xl">
      <div className="flex flex-grow flex-col gap-4">
        <h1 className="text-4xl font-bold text-foreground">Our Values</h1>
        <p className="text-muted-foreground">
          Promote eco-friendly practices that ensure long-term productivity and
          environmental health.
        </p>
      </div>
      <div className="flex min-w-fit flex-col gap-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "Sustainable Farming",
    description:
      "Promote eco-friendly practices that ensure long-term productivity and environmental health.",
  },
  {
    title: "Farmer Empowerment",
    description:
      "Equip farmers with the knowledge and tools they need to thrive independently.",
  },
  {
    title: "Innovation",
    description:
      "Drive agricultural advancements through cutting-edge AI and data analytics.",
  },
  {
    title: "Community Support",
    description:
      "Foster a strong, supportive community among farmers, agronomists, and enthusiasts.",
  },
  {
    title: "Transparency",
    description:
      "Ensure clear and honest communication in all our interactions and recommendations.",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Strive for the highest standards in our services and products to support farmers effectively.",
  },
];
