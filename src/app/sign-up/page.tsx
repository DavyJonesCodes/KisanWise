"use client";

import AuthForm from "@/components/authentication/auth-form";
import Particles from "@/components/magicui/particles";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <main className="aboslute top-14 flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-start p-2 sm:justify-center">
      <StarsBackground className="absolute inset-0 -z-10 block sm:hidden" />
      <Particles
        className="absolute inset-0 -z-10 hidden sm:block"
        quantity={200}
        ease={80}
        refresh
      />
      <AuthForm></AuthForm>
    </main>
  );
}
