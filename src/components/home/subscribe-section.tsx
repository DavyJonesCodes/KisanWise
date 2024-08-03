"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useToast } from "@/components/ui/use-toast";

export default function SubscribeSection() {
  const placeholders = [
    "Stay Updated with the Latest Features!",
    "Get Exclusive Access to New Updates",
    "Subscribe for Email Alerts on New Features",
    "Join Our Mailing List for Regular Updates",
    "Be the First to Know About Our Updates",
    "Receive Regular Updates Straight to Your Inbox",
    "Subscribe for New Feature Announcements",
    "Stay in the Loop with Our Email Updates",
    "Get Notified About the Latest Features",
    "Sign Up for Email Alerts on New Features and Updates",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Assuming your input field has name "email"
    toast({
      title: "Subscription Successful",
      description:
        "You have been subscribed to our updates. Check your inbox for confirmation.",
    });
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-background pb-16">
      <div className="relative mx-4 rounded-lg bg-popover px-4 py-8 outline outline-2 outline-muted min-[500px]:px-8 min-[500px]:py-12 sm:mx-8 sm:px-12 sm:py-12 md:px-16 md:py-16 lg:px-32 lg:py-20 xl:px-48 xl:py-28">
        <div className="mx-auto max-w-2xl">
          <h1 className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Stay Connected
          </h1>
          <p className="relative z-10 mx-auto mb-4 mt-2 max-w-xl text-balance text-center text-xs text-neutral-500 sm:mb-8 sm:text-sm">
            Welcome to KisanWise, your source for personalized agricultural
            advice. Get real-time weather updates, AI-driven crop
            recommendations, and access to our agricultural marketplace.
            Subscribe for the latest updates and features.
          </p>
          <div className="relative z-10">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </section>
  );
}
