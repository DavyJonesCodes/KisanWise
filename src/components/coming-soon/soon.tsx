// components/NotImplemented.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StarsBackground } from "@/components/ui/stars-background";

const NotImplemented = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <StarsBackground className="-z-10" />

      <div className="flex grow flex-col items-center justify-center p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Feature Not Implemented
        </h1>
        <p className="mb-8 text-muted-foreground">
          This feature is currently under development. Please check back later
          for updates.
        </p>
        <Button variant="default">
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotImplemented;
