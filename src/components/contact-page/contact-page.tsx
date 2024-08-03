import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input-motion";
import { Building, Phone, Mail } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import { Textarea } from "@/components/ui/textarea-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const { toast } = useToast();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const inputRefs = {
    firstname: useRef<HTMLInputElement>(null),
    lastname: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Remove error message as soon as the user starts fixing the input
    if (errors[id]) {
      const newErrors = { ...errors };
      if (
        id === "email" &&
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          formData.email,
        )
      ) {
        newErrors.email = "Email address is invalid";
      } else if (id === "phone" && !/^\+91 \d{5} \d{5}$/.test(formData.phone)) {
        newErrors.email = "Phone number is invalid";
      } else {
        delete newErrors[id];
      }
      setErrors(newErrors);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
    if (value.startsWith("91")) {
      value = "+" + value; // Ensure the number starts with '+91'
    } else {
      value = "+91" + value; // Prepend '+91' to the number
    }
    value =
      value.substring(0, 3) +
      " " +
      value.substring(3, 8) +
      " " +
      value.substring(8, 13);
    setFormData({ ...formData, phone: value.trim() });

    if (errors.phone) {
      const newErrors = { ...errors };
      delete newErrors.phone;
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: { [key: string]: string } = {};

    if (!formData.firstname) {
      newErrors.firstname = "First name is required";
      valid = false;
    } else if (!formData.lastname) {
      newErrors.lastname = "Last name is required";
      valid = false;
    } else if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        formData.email,
      )
    ) {
      newErrors.email = "Email address is invalid";
      valid = false;
    } else if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\+91 \d{5} \d{5}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
      valid = false;
    } else if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      toast({
        title: "Submission Successful",
        description:
          "Your inquiry has been received. We will get back to you soon.",
      });
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0] as keyof typeof inputRefs;
      if (firstErrorKey && inputRefs[firstErrorKey].current) {
        inputRefs[firstErrorKey].current?.focus();
      }
    }
  }, [errors, inputRefs]);

  const formVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { opacity: 1, height: "auto", overflow: "visible" },
  };

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <Vortex
        backgroundColor="transparent"
        rangeY={200}
        particleCount={100}
        baseHue={120}
        containerClassName="flex h-80 md:h-96 w-full flex-col items-center justify-center overflow-hidden"
        rangeSpeed={0.5}
      >
        <div className="mx-4 flex max-w-4xl flex-col items-start justify-center gap-6 py-8 sm:mx-8 sm:gap-8">
          <div>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
              Get in touch
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base md:text-lg">
              For personalized farming advice, support, or inquiries about
              KisanWise, feel free to contact us:
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-3 text-muted-foreground sm:gap-4">
              <Building className="h-6 w-6 min-w-6" />
              <span className="text-sm sm:text-base">
                1000 Sunny Lane, Orange Town, Grand Line
              </span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground sm:gap-4">
              <Phone className="h-6 w-6 min-w-6" />
              <span className="text-sm sm:text-base">
                +91 12345 67890 (Call for adventure)
              </span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground sm:gap-4">
              <Mail className="h-6 w-6 min-w-6" />
              <Link
                href="mailto:devjonescodes@gmail.com"
                className="text-sm text-primary sm:text-base"
              >
                devjonescodes@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </Vortex>
      <form className="my-16 w-full max-w-xl px-4" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:gap-2">
          <LabelInputContainer className="relative space-y-2">
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="First name"
              type="text"
              value={formData.firstname}
              onChange={handleInputChange}
              ref={inputRefs.firstname}
              className={cn(
                "dark:bg-background dark:text-foreground dark:shadow-[0px_0px_1px_1px_hsl(var(--border))] dark:placeholder:text-muted-foreground/60 dark:focus-visible:ring-primary",
                errors.firstname &&
                  "ring-2 ring-destructive dark:focus-visible:ring-destructive",
              )}
            />
            {errors.firstname && (
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                className="absolute -top-3 right-0 text-sm font-medium text-destructive"
              >
                {errors.firstname}
              </motion.div>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="relative space-y-2">
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Last name"
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
              ref={inputRefs.lastname}
              className={cn(
                "dark:bg-background dark:text-foreground dark:shadow-[0px_0px_1px_1px_hsl(var(--border))] dark:placeholder:text-muted-foreground/60 dark:focus-visible:ring-primary",
                errors.lastname &&
                  "ring-2 ring-destructive dark:focus-visible:ring-destructive",
              )}
            />
            {errors.lastname && (
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                className="absolute -top-3 right-0 text-sm font-medium text-destructive"
              >
                {errors.lastname}
              </motion.div>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="relative mb-4 space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="devjonescodes@gmail.com"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
            ref={inputRefs.email}
            className={cn(
              "dark:bg-background dark:text-foreground dark:shadow-[0px_0px_1px_1px_hsl(var(--border))] dark:placeholder:text-muted-foreground/60 dark:focus-visible:ring-primary",
              errors.email &&
                "ring-2 ring-destructive dark:focus-visible:ring-destructive",
            )}
          />
          {errors.email && (
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="absolute -top-3 right-0 text-sm font-medium text-destructive"
            >
              {errors.email}
            </motion.div>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="relative mb-4 space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+91 12345 67890"
            type="text"
            value={formData.phone}
            onChange={handlePhoneChange}
            ref={inputRefs.phone}
            className={cn(
              "dark:bg-background dark:text-foreground dark:shadow-[0px_0px_1px_1px_hsl(var(--border))] dark:placeholder:text-muted-foreground/60 dark:focus-visible:ring-primary",
              errors.phone &&
                "ring-2 ring-destructive dark:focus-visible:ring-destructive",
            )}
          />
          {errors.phone && (
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="absolute -top-3 right-0 text-sm font-medium text-destructive"
            >
              {errors.phone}
            </motion.div>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="relative mb-4 space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            ref={inputRefs.message}
            className={cn(
              "dark:bg-background dark:text-foreground dark:shadow-[0px_0px_1px_1px_hsl(var(--border))] dark:placeholder:text-muted-foreground/60 dark:focus-visible:ring-primary",
              errors.message &&
                "ring-2 ring-destructive dark:focus-visible:ring-destructive",
            )}
          />
          {errors.message && (
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="absolute -top-3 right-0 text-sm font-medium text-destructive"
            >
              {errors.message}
            </motion.div>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 space-y-2">
          <Button
            variant="default"
            type="submit"
            className="group/btn relative w-full"
          >
            Submit
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </LabelInputContainer>
      </form>
    </section>
  );
}

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
