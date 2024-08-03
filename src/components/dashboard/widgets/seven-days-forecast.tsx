import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { convertToDate } from "@/lib/date-utils";
import { TemperatureRange } from "@/components/ui/temperature-range";
import {
  Sun,
  Cloudy,
  CloudLightning,
  CloudRain,
  CloudRainWind,
  CalendarDays,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function SevenDayForecast() {
  // Define the array of icons
  const icons = [Sun, Cloudy, CloudLightning, CloudRain, CloudRainWind];

  // Function to get a random icon
  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  };

  const SevenDayForecastData = {
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
    cod: "200",
    message: 0,
    cnt: 10,
    list: [
      {
        dt: 1609473600,
        sunrise: 1609456920,
        sunset: 1609497620,
        temp: {
          day: 32.1,
          min: 26.5,
          max: 32.5,
          night: 28.5,
          eve: 30.0,
          morn: 27.0,
        },
        feels_like: {
          day: 29.8,
          night: 26.3,
          eve: 28.7,
          morn: 25.8,
        },
        pressure: 1014,
        humidity: 45,
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        speed: 2.0,
        deg: 30,
        gust: 2.6,
        clouds: 12,
        pop: 0.1,
        rain: 0.1,
      },
      {
        dt: 1609560000,
        sunrise: 1609543320,
        sunset: 1609584020,
        temp: {
          day: 30.0,
          min: 25.0,
          max: 30.5,
          night: 27.0,
          eve: 28.0,
          morn: 25.5,
        },
        feels_like: {
          day: 28.0,
          night: 24.8,
          eve: 26.5,
          morn: 24.0,
        },
        pressure: 1016,
        humidity: 50,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        speed: 2.5,
        deg: 40,
        gust: 3.0,
        clouds: 25,
        pop: 0.2,
        rain: 0.2,
      },
      {
        dt: 1609646400,
        sunrise: 1609629720,
        sunset: 1609670420,
        temp: {
          day: 31.5,
          min: 25.5,
          max: 31.8,
          night: 26.8,
          eve: 29.0,
          morn: 26.2,
        },
        feels_like: {
          day: 29.0,
          night: 24.5,
          eve: 27.2,
          morn: 24.5,
        },
        pressure: 1013,
        humidity: 48,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        speed: 2.8,
        deg: 45,
        gust: 3.5,
        clouds: 40,
        pop: 0.3,
        rain: 0.3,
      },
      {
        dt: 1609732800,
        sunrise: 1609716120,
        sunset: 1609756820,
        temp: {
          day: 32.0,
          min: 26.0,
          max: 32.5,
          night: 27.5,
          eve: 30.2,
          morn: 27.0,
        },
        feels_like: {
          day: 30.0,
          night: 25.0,
          eve: 28.0,
          morn: 25.5,
        },
        pressure: 1015,
        humidity: 46,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        speed: 2.0,
        deg: 35,
        gust: 2.4,
        clouds: 5,
        pop: 0.0,
        rain: 0.0,
      },
      {
        dt: 1609819200,
        sunrise: 1609802520,
        sunset: 1609843220,
        temp: {
          day: 33.0,
          min: 27.0,
          max: 33.5,
          night: 28.0,
          eve: 31.0,
          morn: 27.5,
        },
        feels_like: {
          day: 30.5,
          night: 25.5,
          eve: 29.0,
          morn: 25.0,
        },
        pressure: 1018,
        humidity: 44,
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        speed: 2.2,
        deg: 25,
        gust: 2.8,
        clouds: 10,
        pop: 0.1,
        rain: 0.1,
      },
      {
        dt: 1609905600,
        sunrise: 1609888920,
        sunset: 1609929620,
        temp: {
          day: 34.0,
          min: 28.0,
          max: 34.5,
          night: 29.0,
          eve: 32.0,
          morn: 28.5,
        },
        feels_like: {
          day: 31.0,
          night: 26.0,
          eve: 29.5,
          morn: 25.5,
        },
        pressure: 1020,
        humidity: 42,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        speed: 2.0,
        deg: 30,
        gust: 2.5,
        clouds: 20,
        pop: 0.2,
        rain: 0.2,
      },
      {
        dt: 1609992000,
        sunrise: 1609975320,
        sunset: 1610016020,
        temp: {
          day: 35.0,
          min: 29.0,
          max: 35.5,
          night: 30.0,
          eve: 33.0,
          morn: 29.5,
        },
        feels_like: {
          day: 32.0,
          night: 27.0,
          eve: 30.5,
          morn: 26.5,
        },
        pressure: 1022,
        humidity: 40,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        speed: 1.8,
        deg: 35,
        gust: 2.2,
        clouds: 30,
        pop: 0.3,
        rain: 0.3,
      },
    ],
  };

  const temperatures = SevenDayForecastData.list.map((item) => item.temp);
  const minTemperature = Math.min(...temperatures.map((temp) => temp.min));
  const maxTemperature = Math.max(...temperatures.map((temp) => temp.max));

  return (
    <>
      <Card className="flex h-fit shrink-0 flex-col sm:h-full">
        <CardHeader className="p-4 min-[475px]:p-6">
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-foreground" />
            <span>7-Day Forecast</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex grow flex-col justify-between gap-2 p-4 text-base font-normal min-[475px]:p-6">
          {SevenDayForecastData.list.map((item, i) => {
            const IconComponent = getRandomIcon();

            return (
              <div key={item.dt}>
                <div className="flex w-full flex-row items-center justify-between gap-2 last:mb-0">
                  <p className="min-w-[3rem] font-medium">
                    {i === 0
                      ? "Today"
                      : convertToDate(
                          SevenDayForecastData.city.timezone,
                          item.dt,
                          "short",
                        )}
                  </p>
                  <IconComponent className="h-8 w-8" />
                  <div className="flex w-[60%] flex-row gap-2 overflow-hidden">
                    <div className="flex w-full select-none flex-row items-center justify-between gap-2 pr-2 text-sm">
                      <p className="flex w-[3rem] min-w-fit justify-end text-neutral-600 dark:text-neutral-400">
                        {Math.floor(item.temp.min)}&deg;
                      </p>
                      <TemperatureRange
                        min={minTemperature}
                        max={maxTemperature}
                        value={[item.temp.min, item.temp.max]}
                      />
                      <p className="flex w-[3rem] min-w-fit justify-end">
                        {Math.floor(item.temp.max)}&deg;
                      </p>
                    </div>
                  </div>
                </div>
                {i !== SevenDayForecastData.list.length - 1 && (
                  <Separator className="mt-3" />
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}
