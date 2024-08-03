"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input-motion";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, EyeOff, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogleFilled,
  IconBrandAppleFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FormProps {
  isOpen?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isSignUpForm?: boolean;
}

const AuthForm: React.FC<FormProps> = ({
  isOpen = false,
  setOpen,
  isSignUpForm = false,
}) => {
  const [isSignUp, setIsSignUp] = useState(isSignUpForm);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const formVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { opacity: 1, height: "auto", overflow: "visible" },
  };

  const [previousURL, setPreviousURL] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (!previousURL) {
        setPreviousURL(window.location.pathname);
      }
      window.history.pushState(null, "", isSignUp ? "/sign-up" : "/login");
    } else {
      if (previousURL) {
        window.history.pushState(null, "", previousURL);
        setPreviousURL("");
      }
    }
  });

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setOpen?.(false);
        isSignUpForm ? setIsSignUp(true) : setIsSignUp(false);
      }}
    >
      <DialogContent className="m-4 mx-auto w-full max-w-md rounded-none md:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Welcome to KisanWise</DialogTitle>
          <DialogDescription>
            {isSignUp
              ? "Sign up to KisanWise for personalized farming advice and resources."
              : "Login to KisanWise to access your account."}
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4" onSubmit={handleSubmit}>
          <motion.div
            variants={formVariants}
            initial={isSignUp ? "visible" : "hidden"}
            animate={isSignUp ? "visible" : "hidden"}
          >
            <div className="mb-4 flex space-x-2">
              <LabelInputContainer className="space-y-2">
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="First name"
                  type="text"
                  className="border dark:!border-border dark:bg-background dark:text-foreground dark:shadow-none dark:placeholder:text-muted-foreground/60 dark:focus-visible:ring-primary"
                />
              </LabelInputContainer>
              <LabelInputContainer className="space-y-2">
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Last name"
                  type="text"
                  className="dark:focus-visible:ring-primar border dark:!border-border dark:bg-background dark:text-foreground dark:shadow-none dark:placeholder:text-muted-foreground/60"
                />
              </LabelInputContainer>
            </div>
          </motion.div>
          <LabelInputContainer className="mb-4 space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="devjonescodes@gmail.com"
              type="email"
              className="dark:focus-visible:ring-primar border dark:!border-border dark:bg-background dark:text-foreground dark:shadow-none dark:placeholder:text-muted-foreground/60"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="dark:focus-visible:ring-primar border dark:!border-border dark:bg-background dark:text-foreground dark:shadow-none dark:placeholder:text-muted-foreground/60"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                disabled={!password}
                className="absolute right-3 top-1/2 -translate-y-1/2 transform transition-colors enabled:cursor-pointer disabled:text-muted-foreground/60"
              >
                {showPassword ? (
                  <EyeOff className="m-1 h-4 w-4" />
                ) : (
                  <Eye className="m-1 h-4 w-4" />
                )}
              </button>
            </div>
          </LabelInputContainer>
          <motion.div
            variants={formVariants}
            initial={isSignUp ? "visible" : "hidden"}
            animate={isSignUp ? "visible" : "hidden"}
          >
            <LabelInputContainer className="mb-8 space-y-2">
              <Label htmlFor="confirmpassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmpassword"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="dark:focus-visible:ring-primar border dark:!border-border dark:bg-background dark:text-foreground dark:shadow-none dark:placeholder:text-muted-foreground/60"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  disabled={!confirmPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform transition-colors enabled:cursor-pointer disabled:text-muted-foreground/60"
                >
                  {showPassword ? (
                    <EyeOff className="m-1 h-4 w-4" />
                  ) : (
                    <Eye className="m-1 h-4 w-4" />
                  )}
                </button>
              </div>
            </LabelInputContainer>
          </motion.div>
          <Button variant="default" className="group/btn relative w-full">
            <Link href="/sign-up" className="flex items-center justify-center">
              {isSignUp ? "Sign Up Now" : "Sign In"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Separator className="my-4" />

          <div className="flex flex-col gap-4">
            <Button variant="secondary" className="group/btn relative w-full">
              <Link
                href="/sign-up"
                className="flex items-center justify-center"
              >
                <IconBrandAppleFilled className="mr-2 h-4 w-4" />
                Continue with Apple
              </Link>
              <BottomGradient />
            </Button>
            <Button variant="secondary" className="group/btn relative w-full">
              <Link
                href="/sign-up"
                className="flex items-center justify-center"
              >
                <IconBrandGoogleFilled className="mr-2 h-4 w-4" />
                Continue with Google
              </Link>
              <BottomGradient />
            </Button>
            <Button variant="secondary" className="group/btn relative w-full">
              <Link
                href="/sign-up"
                className="flex items-center justify-center"
              >
                <IconBrandGithub className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Link>
              <BottomGradient />
            </Button>
          </div>
          <div className="mt-3 text-center text-sm">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="underline"
                  onClick={toggleForm}
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="underline"
                  onClick={toggleForm}
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-primary-foreground to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col", className)}>{children}</div>
  );
};

export default AuthForm;
