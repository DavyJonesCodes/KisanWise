"use client";

import React, { useState } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { LogIn } from "lucide-react";
import { Menu } from "lucide-react";

// Components

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import AuthForm from "@/components/authentication/auth-form-dialog";

const navItems = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  sidebarNav: [
    {
      title: "Features",
      href: "/#features",
      items: [
        {
          title: "Personalized Advice",
          href: "/dashboard/personalized-advice",
          description:
            "Get tailored farming recommendations based on your specific crop details.",
        },
        {
          title: "AI Chatbot",
          href: "/dashboard/ai-chatbot",
          description:
            "Real-time assistance for your agricultural queries in multiple languages.",
        },
        {
          title: "Resource Library",
          href: "/dashboard/resource-library",
          description:
            "Access articles, videos, and tutorials on sustainable agriculture.",
        },
        {
          title: "Weather",
          href: "/dashboard/weather",
          description:
            "Check detailed weather forecasts and tips for farming activities.",
        },
        {
          title: "Marketplace",
          href: "/dashboard/marketplace",
          description:
            "Buy and sell agricultural products and equipment easily.",
        },
        {
          title: "More Features",
          href: "/#features",
          description:
            "Explore additional tools and resources to enhance your farming experience.",
        },
      ],
    },
  ],
};

function populateFeaturesDropdown() {
  return navItems.sidebarNav[0].items.map((component, i) => (
    <li key={i}>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          )}
          href={component.href}
        >
          <div className="text-sm font-medium leading-none">
            {component.title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {component.description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  ));
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-foreground/80 text-foreground/60 focus:text-foreground/60 focus:bg-transparent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent data-[state=open]:bg-transparent",
);

// const isActive = (path: string) => usePathname() === path;
function NavLink({ href, title }: { href: string; title: string }) {
  const isActive = usePathname() === href;
  return title !== "Features" ? (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} ${isActive ? "!text-foreground focus:text-foreground/100" : ""}`}
        >
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ) : (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={`${navigationMenuTriggerStyle()}`}>
        Features
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {populateFeaturesDropdown()}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
interface FormProps {
  isOpen?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isSignUpForm?: boolean;
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [loginMenuOpen, setLoginMenuOpen] = useState(false);

  if (usePathname().includes("/dashboard")) {
    return;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-2 lg:px-8"
      >
        <div className="flex flex-1 items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center justify-center rounded-md"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <div className="flex md:flex-1">
          <Link href="/" className="flex items-center">
            <svg
              className="h-6 w-auto fill-primary sm:h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="128"
              height="128"
            >
              <path d="M4.003,1.248C3.953,.546,4.546-.047,5.248,.003c4.489,.316,6.511,2.401,6.752,6.997C12.241,2.404,14.263,.319,18.752,.003c.701-.049,1.294,.543,1.245,1.245-.316,4.489-2.407,6.486-7.002,6.727,0,.009,.005,.017,.005,.026v2c-.005,1.308-1.995,1.307-2,0v-2c0-.009,.005-.017,.005-.026-4.596-.241-6.686-2.238-7.002-6.727ZM23.444,13.258c-.521-.723-1.323-1.178-2.203-1.248-.875-.076-1.74,.246-2.331,.839l-1.947,1.786c.284,2.315-1.649,4.38-3.963,4.365h-4c-1.308-.005-1.307-1.995,0-2h4c2.629-.048,2.627-3.953,0-4h-3.912c-2.938,0-5.7,1.145-7.797,3.24l-1.017,1.071c-.176,.186-.274,.433-.274,.688v5c0,.553,.447,1,1,1H11.32c2.746,0,5.377-1.019,7.408-2.868l4.318-3.935c1.07-1.073,1.241-2.766,.397-3.939Z" />
            </svg>
            <span className="ml-2 block pt-[1px] text-xl font-semibold sm:text-2xl md:hidden lg:block">
              KisanWise
            </span>
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.mainNav.map(
              (item) =>
                item.href && (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    title={item.title}
                  />
                ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Link href="" scroll={false} className="hidden sm:block">
            <Button
              onClick={(e) => {
                setLoginMenuOpen(true);
              }}
              variant="default"
              className="flex items-center justify-center"
            >
              Login
              <LogIn className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="flex flex-col">
          <SheetHeader>
            <SheetTitle>
              <div className="flex">
                <MobileLink
                  href="/"
                  className="flex items-center"
                  onOpenChange={setMobileMenuOpen}
                >
                  <svg
                    className="h-6 w-auto fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="128"
                    height="128"
                  >
                    <path d="M4.003,1.248C3.953,.546,4.546-.047,5.248,.003c4.489,.316,6.511,2.401,6.752,6.997C12.241,2.404,14.263,.319,18.752,.003c.701-.049,1.294,.543,1.245,1.245-.316,4.489-2.407,6.486-7.002,6.727,0,.009,.005,.017,.005,.026v2c-.005,1.308-1.995,1.307-2,0v-2c0-.009,.005-.017,.005-.026-4.596-.241-6.686-2.238-7.002-6.727ZM23.444,13.258c-.521-.723-1.323-1.178-2.203-1.248-.875-.076-1.74,.246-2.331,.839l-1.947,1.786c.284,2.315-1.649,4.38-3.963,4.365h-4c-1.308-.005-1.307-1.995,0-2h4c2.629-.048,2.627-3.953,0-4h-3.912c-2.938,0-5.7,1.145-7.797,3.24l-1.017,1.071c-.176,.186-.274,.433-.274,.688v5c0,.553,.447,1,1,1H11.32c2.746,0,5.377-1.019,7.408-2.868l4.318-3.935c1.07-1.073,1.241-2.766,.397-3.939Z" />
                  </svg>
                  <span className="ml-2 pt-[1px] text-xl font-semibold">
                    KisanWise
                  </span>
                </MobileLink>
              </div>
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-3">
              {navItems.mainNav?.map(
                (item) =>
                  item.href &&
                  item.title !== "Features" && (
                    <MobileLink
                      key={item.href}
                      href={item.href}
                      onOpenChange={setMobileMenuOpen}
                    >
                      {item.title}
                    </MobileLink>
                  ),
              )}
            </div>
            <div className="flex flex-col space-y-2">
              {navItems.sidebarNav.map((item, index) => (
                <div key={index} className="flex flex-col space-y-3 pt-6">
                  <h4 className="font-medium">{item.title}</h4>
                  {item?.items?.length &&
                    item.items.map((item) => (
                      <React.Fragment key={item.href}>
                        {item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setMobileMenuOpen}
                            className="text-muted-foreground"
                          >
                            {item.title}
                          </MobileLink>
                        ) : (
                          item.title
                        )}
                      </React.Fragment>
                    ))}
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter className="mt-auto block sm:hidden">
            <Link
              href="/login"
              replace
              className="flex items-center justify-center"
            >
              <SheetClose className="w-full">
                <Button variant="default" className="w-full">
                  Login
                  <LogIn className="ml-2 h-4 w-4" />
                </Button>
              </SheetClose>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <AuthForm
        isOpen={loginMenuOpen}
        setOpen={setLoginMenuOpen}
        isSignUpForm={false}
      ></AuthForm>
    </header>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
