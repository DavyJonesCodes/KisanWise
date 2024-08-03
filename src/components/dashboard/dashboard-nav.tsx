"use client";

import Link from "next/link";
import { CircleUser, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/personalized-advice", label: "Advice" },
  { href: "/dashboard/ai-chatbot", label: "AI Chat" },
  { href: "/dashboard/resource-library", label: "Resource" },
  { href: "/dashboard/weather", label: "Weather" },
  { href: "/dashboard/marketplace", label: "Marketplace" },
];

export default function Dashboard() {
  const currentPath = usePathname();

  return (
    <header className="sticky top-0 z-[9999] flex h-16 items-center gap-4 border-b border-border/40 bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:flex lg:gap-6">
        <div className="flex md:flex-1">
          <Link href="/" className="flex items-center">
            <svg
              className="h-5 w-auto fill-primary sm:h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="128"
              height="128"
            >
              <path d="M4.003,1.248C3.953,.546,4.546-.047,5.248,.003c4.489,.316,6.511,2.401,6.752,6.997C12.241,2.404,14.263,.319,18.752,.003c.701-.049,1.294,.543,1.245,1.245-.316,4.489-2.407,6.486-7.002,6.727,0,.009,.005,.017,.005,.026v2c-.005,1.308-1.995,1.307-2,0v-2c0-.009,.005-.017,.005-.026-4.596-.241-6.686-2.238-7.002-6.727ZM23.444,13.258c-.521-.723-1.323-1.178-2.203-1.248-.875-.076-1.74,.246-2.331,.839l-1.947,1.786c.284,2.315-1.649,4.38-3.963,4.365h-4c-1.308-.005-1.307-1.995,0-2h4c2.629-.048,2.627-3.953,0-4h-3.912c-2.938,0-5.7,1.145-7.797,3.24l-1.017,1.071c-.176,.186-.274,.433-.274,.688v5c0,.553,.447,1,1,1H11.32c2.746,0,5.377-1.019,7.408-2.868l4.318-3.935c1.07-1.073,1.241-2.766,.397-3.939Z" />
            </svg>
            <span className="ml-2 block pt-[1px] text-xl font-semibold md:hidden lg:block">
              KisanWise
            </span>
          </Link>
        </div>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${
              currentPath === href ? "text-foreground" : "text-muted-foreground"
            } min-w-fit transition-colors hover:text-foreground`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <div className="flex md:flex-1">
              <Link href="/" className="flex items-center">
                <svg
                  className="h-5 w-auto fill-primary sm:h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="128"
                  height="128"
                >
                  <path d="M4.003,1.248C3.953,.546,4.546-.047,5.248,.003c4.489,.316,6.511,2.401,6.752,6.997C12.241,2.404,14.263,.319,18.752,.003c.701-.049,1.294,.543,1.245,1.245-.316,4.489-2.407,6.486-7.002,6.727,0,.009,.005,.017,.005,.026v2c-.005,1.308-1.995,1.307-2,0v-2c0-.009,.005-.017,.005-.026-4.596-.241-6.686-2.238-7.002-6.727ZM23.444,13.258c-.521-.723-1.323-1.178-2.203-1.248-.875-.076-1.74,.246-2.331,.839l-1.947,1.786c.284,2.315-1.649,4.38-3.963,4.365h-4c-1.308-.005-1.307-1.995,0-2h4c2.629-.048,2.627-3.953,0-4h-3.912c-2.938,0-5.7,1.145-7.797,3.24l-1.017,1.071c-.176,.186-.274,.433-.274,.688v5c0,.553,.447,1,1,1H11.32c2.746,0,5.377-1.019,7.408-2.868l4.318-3.935c1.07-1.073,1.241-2.766,.397-3.939Z" />
                </svg>
                <span className="ml-2 block pt-[1px] text-xl font-semibold">
                  KisanWise
                </span>
              </Link>
            </div>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${
                  currentPath === href
                    ? "text-foreground"
                    : "text-muted-foreground"
                } min-w-fit transition-colors hover:text-foreground`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:gap-2 lg:ml-auto lg:gap-4">
        <form className="ml-auto mr-auto flex-1 sm:flex-initial lg:ml-auto lg:mr-0">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[400px] lg:w-[250px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/contact">Support</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
