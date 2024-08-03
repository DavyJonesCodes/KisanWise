import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/pollution-progress";
import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";
import { Wind } from "lucide-react";

interface AirPollutionProps {
  className?: ClassNameValue;
}

export default function AirPollution({ className }: AirPollutionProps) {
  const airQuality = {
    main: {
      aqi: 2,
    },
    components: {
      co: 453.95,
      no: 0,
      no2: 7.28,
      o3: 39.7,
      so2: 1.27,
      pm2_5: 13.24,
      pm10: 20.03,
      nh3: 5.32,
    },
    dt: 1722633350,
  };

  return (
    <Card
      className={cn(
        "order-2 col-span-2 flex h-fit flex-col justify-between sm:h-full",
        className,
      )}
    >
      <CardHeader className="p-4 min-[475px]:p-6">
        <CardTitle className="flex items-center gap-2">
          <Wind className="h-5 w-5 text-foreground" />
          <span> Air pollution</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="my-auto p-4 min-[475px]:p-6">
        <Progress aria-label="Air pollution" value={airQuality.main.aqi * 10} />
      </CardContent>
      <CardFooter className="p-4 min-[475px]:p-6">
        <p>
          {airQuality.main.aqi < 50
            ? "Air quality is good."
            : airQuality.main.aqi < 100
              ? "Air quality is moderate."
              : airQuality.main.aqi < 150
                ? "Air quality is unhealthy for sensitive groups."
                : airQuality.main.aqi < 200
                  ? "Air quality is unhealthy."
                  : airQuality.main.aqi < 300
                    ? "Air quality is very unhealthy."
                    : "Air quality is hazardous."}
        </p>
      </CardFooter>
    </Card>
  );
}
