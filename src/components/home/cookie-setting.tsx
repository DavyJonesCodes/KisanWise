"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  performance: boolean;
};

export default function CardsCookieSettings() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    performance: false,
  });

  useEffect(() => {
    const storedPreferences = localStorage.getItem("cookiePreferences");
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences));
    }
  }, []);

  const handleToggle = (type: keyof CookiePreferences) => {
    setPreferences((prevPreferences) => {
      const newPreferences = {
        ...prevPreferences,
        [type]: !prevPreferences[type],
      };
      localStorage.setItem("cookiePreferences", JSON.stringify(newPreferences));
      return newPreferences;
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground/80">
          Cookies Settings
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-lg">
        <DialogHeader>
          <DialogTitle>Cookie Settings</DialogTitle>
          <DialogDescription>
            Manage your cookie settings here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6">
          <div className="flex items-center justify-between space-x-4">
            <Label htmlFor="necessary" className="flex flex-col space-y-1">
              <span>Strictly Necessary</span>
              <span className="text-xs font-normal leading-snug text-muted-foreground">
                These cookies are essential in order to use the website and use
                its features.
              </span>
            </Label>
            <Switch
              id="necessary"
              checked={preferences.necessary}
              onCheckedChange={() => handleToggle("necessary")}
              aria-label="Necessary"
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Label htmlFor="functional" className="flex flex-col space-y-1">
              <span>Functional Cookies</span>
              <span className="text-xs font-normal leading-snug text-muted-foreground">
                These cookies allow the website to provide personalized
                functionality.
              </span>
            </Label>
            <Switch
              id="functional"
              checked={preferences.functional}
              onCheckedChange={() => handleToggle("functional")}
              aria-label="Functional"
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Label htmlFor="performance" className="flex flex-col space-y-1">
              <span>Performance Cookies</span>
              <span className="text-xs font-normal leading-snug text-muted-foreground">
                These cookies help to improve the performance of the website.
              </span>
            </Label>
            <Switch
              id="performance"
              checked={preferences.performance}
              onCheckedChange={() => handleToggle("performance")}
              aria-label="Performance"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose className="w-full">
            <Button variant="default" className="w-full">
              Save preferences
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
