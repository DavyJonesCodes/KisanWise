"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Text, Languages, Bot, LibraryBig, ShoppingCart, Cloud } from "lucide-react";
import ResourcesSVG from "@/components/svg/resources";
import WeatherSVG from "@/components/svg/weather";
import MarketplaceSVG from "@/components/svg/marketplace";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function BentoGridThird() {
  return (
    <section className="relative w-full mb-64 flex justify-center items-center" id="features">
      <div className="flex flex-col items-center justify-center relative z-10 mx-4">
        <div className="flex flex-col items-center justify-center relative">
          <p className="text-3xl min-[385px]:text-4xl sm:text-5xl font-bold text-center text-foreground">Key Features</p>
          <div className="w-[calc(100%+100px)] h-fit relative mt-2 sm:mt-4 mb-8">
            <div className="absolute top-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute top-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent h-px w-full" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-1/4" />
          </div>
        </div>
        <BentoGrid className="max-w-4xl md:auto-rows-[20rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, i) => (
            <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} className={cn("[&>p:text-lg] dark:bg-card dark:border-border ", item.className)} icon={item.icon} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const SkeletonAdvice = () => {
  const [isHovered, setIsHovered] = useState(false);

  const generateNewWidths = (): string[] => {
    return new Array(6).fill(0).map(() => `${Math.random() * (100 - 30) + 30}%`);
  };

  const [widths, setWidths] = useState<string[]>(generateNewWidths);

  useEffect(() => {
    setWidths(generateNewWidths());
  }, []);

  const handleMouseEnter = () => {
    setWidths(generateNewWidths());
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const variants = {
    animate: (i: number) => ({
      width: widths[i],
      transition: {
        duration: 1,
      },
    }),
  };

  return (
    <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex flex-1 w-full h-full min-h-[6rem] bg-muted flex-col gap-2.5 justify-center rounded-lg p-4">
      {widths.map((width, i) => (
        <motion.div key={`skeleton-one-${i}`} custom={i} animate="animate" variants={variants} className="flex flex-row rounded-full p-2 items-center bg-background w-full h-4" />
      ))}
    </motion.div>
  );
};

const SkeletonChatbot = () => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate={isHovered ? "animate" : "initial"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-muted flex-col space-y-2 justify-center rounded-lg p-4"
    >
      <motion.div variants={variants} className="flex flex-row rounded-full border border-border p-2  items-center space-x-2 bg-card">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-primary-foreground flex-shrink-0" />
        <div className="w-full bg-background h-4 rounded-full" />
      </motion.div>
      <motion.div variants={variantsSecond} className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 w-3/4 ml-auto bg-card">
        <div className="w-full bg-background h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-primary-foreground flex-shrink-0" />
      </motion.div>
      <motion.div variants={variants} className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 bg-card">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-primary-foreground flex-shrink-0" />
        <div className="w-full bg-background h-4 rounded-full " />
      </motion.div>
    </motion.div>
  );
};

const SkeletonLibrary = () => {
  const [animated, setAnimated] = useState(false);

  return (
    <motion.div onMouseEnter={() => setAnimated(true)} onMouseLeave={() => setAnimated(false)} className="flex flex-1 w-full h-full min-h-[16rem] sm:min-h-[10rem] flex-col relative bg-muted rounded-lg">
      <ResourcesSVG className="absolute h-[calc(100%+3rem)] left-1/2 -translate-x-1/2 -top-6" isAnimate={animated} />
    </motion.div>
  );
};

const SkeletonWeather = () => {
  const [animated, setAnimated] = useState(false);

  return (
    <motion.div onMouseEnter={() => setAnimated(true)} onMouseLeave={() => setAnimated(false)} className="flex flex-1 w-full h-full min-h-[16rem] sm:min-h-[10rem] flex-col relative bg-muted rounded-lg">
      <WeatherSVG className="absolute h-full left-1/2 -translate-x-1/2" isAnimate={animated} />
    </motion.div>
  );
};

const SkeletonMarket = () => {
  const [animated1, setAnimated1] = useState(false);

  return (
    <motion.div onMouseEnter={() => setAnimated1(true)} onMouseLeave={() => setAnimated1(false)} className="flex flex-1 w-full h-full min-h-[16rem] sm:min-h-[10rem] flex-col relative bg-muted rounded-lg">
      <MarketplaceSVG className="absolute h-full left-1/2 -translate-x-1/2 -top-1" isAnimate={animated1} />
    </motion.div>
  );
};

const SkeletonLanguage = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#262626",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    shininess: 0.9,
    polygonColor: "#1c1917",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 29.3355666, lng: 74.6871317 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#22c55e", "#0f592a", "#2bff95"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="flex flex-1 w-full h-full min-h-[11rem] flex-col relative bg-muted rounded-lg overflow-hidden">
      <div className="absolute w-full min-w-[300px] aspect-square -top-[10%] -right-1/3  min-[425px]:-right-1/4 md:-top-1/3">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
};

const items = [
  {
    title: "Resource Library",
    description: <span className="text-sm min-h-[2.5rem] line-clamp-2 text-muted-foreground">Access articles, videos, and tutorials on sustainable agriculture.</span>,
    header: <SkeletonLibrary />,
    className: "md:col-span-1",
    icon: <LibraryBig className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "AI Chatbot",
    description: <span className="text-sm min-h-[2.5rem] line-clamp-2 text-muted-foreground">Get real-time assistance for your agricultural queries in multiple languages.</span>,
    header: <SkeletonChatbot />,
    className: "md:col-span-2",
    icon: <Bot className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Personalized Advice",
    description: <span className="text-sm min-h-[2.5rem] line-clamp-2 text-muted-foreground">Receive tailored farming recommendations based on your specific crop details.</span>,
    header: <SkeletonAdvice />,
    className: "md:col-span-2",
    icon: <Text className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Weather Forecasting",
    description: <span className="text-sm min-h-[2.5rem] line-clamp-2 text-muted-foreground">Check detailed weather forecasts and tips for farming activities.</span>,
    header: <SkeletonWeather />,
    className: "md:col-span-1",
    icon: <Cloud className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Marketplace",
    description: <span className="text-sm min-h-[2.5rem] line-clamp-2 text-muted-foreground">Buy and sell agricultural products and equipment easily.</span>,
    header: <SkeletonMarket />,
    className: "md:col-span-1",
    icon: <ShoppingCart className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Multiple Language Support",
    description: <span className="text-sm min-h-[2.5rem] line-clamp-2 text-muted-foreground">Receive assistance and resources in various Indian languages for better accessibility and understanding.</span>,
    header: <SkeletonLanguage />,
    className: "md:col-span-2",
    icon: <Languages className="h-4 w-4 text-muted-foreground" />,
  },
];
