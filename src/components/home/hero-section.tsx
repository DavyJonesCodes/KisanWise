"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-32 overflow-hidden bg-background pt-32">
      <div className="z-10 flex flex-col items-center justify-center gap-8 px-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="hidden text-2xl font-bold leading-tight text-foreground min-[500px]:block min-[500px]:text-3xl min-[500px]:leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
            Empowering Farmers with
            <br />
            <span className="text-primary">AI-Driven</span> Agricultural Advice
          </h1>
          <h1 className="block text-2xl font-bold leading-tight text-foreground min-[375px]:text-3xl min-[375px]:leading-tight min-[500px]:hidden">
            Empowering Farmers <br />
            with <span className="text-primary">AI-Driven</span>
            <br /> Agricultural Advice
          </h1>
          <p className="hidden text-sm text-muted-foreground min-[450px]:block min-[500px]:text-base sm:text-lg lg:text-xl">
            Get personalized farming advice, real-time assistance,
            <br />
            and access to a wealth of agricultural resources.
          </p>
          <p className="block text-sm text-muted-foreground min-[450px]:hidden">
            Get personalized farming advice, <br />
            real-time assistance, and access to a <br />
            wealth of agricultural resources.
          </p>
        </div>
        <Link href="/dashboard" className="flex items-center justify-center">
          <Button variant="default" className="w-fit">
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="relative flex w-full items-center justify-center pb-16">
        <div className="absolute inset-0 mx-auto h-1/3 w-full max-w-screen-2xl bg-primary opacity-30 blur-[128px]" />
        <div className="relative mx-4 overflow-hidden rounded-lg border sm:mx-8 md:mx-16">
          <Image
            src="/KisanWise/Images/dashboard.png"
            width={1440 * 0.75}
            height={820 * 0.75}
            alt="KisanWise Dashbaord"
            className="h-auto w-full"
          />
          <BorderBeam
            size={200}
            duration={15}
            delay={0}
            borderWidth={1}
            colorFrom="#1e9d55"
            colorTo="#26d97e"
          />
        </div>
        <div className="absolute -bottom-1 h-full w-full bg-gradient-to-t from-background from-40% to-transparent" />
      </div>
    </section>
  );
}
