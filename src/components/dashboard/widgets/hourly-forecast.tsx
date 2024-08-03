"use client";

import { Card } from "@/components/ui/card";
import {
  Sun,
  Cloudy,
  CloudLightning,
  CloudRain,
  CloudRainWind,
} from "lucide-react";

export default function HourlyForecast() {
  function extractHoursFromDate(dt: number): number {
    const date = new Date(dt * 1000);
    return date.getHours();
  }

  const HourlyData = [
    {
      dt: 1609462800,
      main: {
        temp: 30.5,
      },
      weather: [
        {
          id: 800,
        },
      ],
      sys: {
        pod: "d",
      },
      icon: <Sun className="h-8 w-8 text-foreground" />,
    },
    {
      dt: 1609470000,
      main: {
        temp: 28.2,
      },
      weather: [
        {
          id: 801,
        },
      ],
      sys: {
        pod: "d",
      },
      icon: <Cloudy className="h-8 w-8 text-foreground" />,
    },
    {
      dt: 1609477200,
      main: {
        temp: 25.3,
      },
      weather: [
        {
          id: 802,
        },
      ],
      sys: {
        pod: "d",
      },
      icon: <CloudLightning className="h-8 w-8 text-foreground" />,
    },
    {
      dt: 1609484400,
      main: {
        temp: 22.1,
      },
      weather: [
        {
          id: 803,
        },
      ],
      sys: {
        pod: "d",
      },
      icon: <CloudRain className="h-8 w-8 text-foreground" />,
    },
    {
      dt: 1609491600,
      main: {
        temp: 20.5,
      },
      weather: [
        {
          id: 804,
        },
      ],
      sys: {
        pod: "d",
      },
      icon: <CloudRainWind className="h-8 w-8 text-foreground" />,
    },
    {
      dt: 1609497000,
      main: {
        temp: 22.1,
      },
      weather: [
        {
          id: 803,
        },
      ],
      sys: {
        pod: "d",
      },
      icon: <CloudRain className="h-8 w-8 text-foreground" />,
    },
  ];

  return (
    <>
      <Card className="scrollbar-hide no-scrollbar order-first col-span-2 flex h-fit cursor-grab touch-auto touch-pan-x select-none scroll-px-0.5 flex-row items-center justify-between gap-2 overflow-hidden overscroll-contain scroll-smooth p-4 ring-offset-background transition-colors hover:overflow-x-auto focus:scroll-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-[475px]:p-6 sm:h-full md:order-2 lg:order-3">
        {HourlyData.slice(0, 12).map((item, i) => (
          <div
            key={item.dt}
            className="flex h-full flex-col justify-between gap-4"
          >
            <div className="flex justify-center text-sm text-neutral-600 dark:text-neutral-400">
              {i === 0 ? "Now" : extractHoursFromDate(item.dt)}
            </div>
            <div className="flex h-full items-center justify-center">
              {item.icon}
            </div>
            <div className="flex justify-center">
              {Math.floor(item.main.temp)}&deg;
            </div>
          </div>
        ))}
      </Card>
    </>
  );
}
