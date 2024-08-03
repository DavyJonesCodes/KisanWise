import { Card } from "@/components/ui/card";
import Clock from "@/components/ui/clock";
import { convertToDate } from "@/lib/date-utils";
import { Sun, Navigation } from "lucide-react";

export default function CurrentWeather() {
  const initial = new Date();

  const HourlyDataData = {
    cod: "200",
    message: 0,
    cnt: 48,
    list: [
      {
        dt: 1609462800,
        main: {
          temp: 30.5,
          feels_like: 28.5,
          temp_min: 30.0,
          temp_max: 31.0,
          pressure: 1015,
          humidity: 50,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.5,
          deg: 350,
          gust: 2.1,
        },
        visibility: 10000,
        pop: 0,
        rain: {
          "1h": 0.0,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2021-01-01 03:00:00",
      },
    ],
    city: {
      id: 1273294,
      name: "New Delhi",
      coord: {
        lon: 77.209,
        lat: 28.6139,
      },
      country: "IN",
      population: 16787941,
      timezone: 19800,
      sunrise: 1609456920,
      sunset: 1609497620,
    },
  };

  return (
    <Card className="relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden p-4 min-[475px]:p-6 sm:h-full">
      <div className="absolute" />
      <div>
        <div className="flex justify-between text-lg font-semibold">
          <span>
            {convertToDate(
              HourlyDataData.city.timezone,
              HourlyDataData.list[0].dt,
              "long",
            )}
          </span>
          <Clock initial={initial} timezone={HourlyDataData.city.timezone} />
        </div>
        <div className="text-md mt-2 flex items-center font-bold">
          <span>{HourlyDataData.city.name}</span>
          <Navigation className="ml-2 h-4 w-4 text-foreground" />
        </div>
      </div>
      <div className="flex justify-center py-7 text-8xl font-bold md:py-10">
        {Math.round(HourlyDataData.list[0].main.temp)}&deg;
      </div>
      <div>
        <Sun className="h-9 w-9" />
        <div className="font-semibold">
          {HourlyDataData.list[0].weather[0].main}
        </div>
        <div className="flex gap-2 dark:text-neutral-500">
          <span>
            H: {Math.round(HourlyDataData.list[0].main.temp_max)}&deg;
          </span>
          <span>
            L: {Math.round(HourlyDataData.list[0].main.temp_min)}&deg;
          </span>
        </div>
      </div>
    </Card>
  );
}
