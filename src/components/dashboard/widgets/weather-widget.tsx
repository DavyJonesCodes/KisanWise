import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/pollution-progress";
import Compass from "@/components/ui/compass";
import { formatSunTimeWithAMPM } from "@/lib/date-utils";
import {
  Sunset,
  Droplet,
  Thermometer,
  CloudHail,
  Wind,
  SunMedium,
} from "lucide-react";

export default function WeatherWidgets() {
  const data = {
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
      "1h": 0.5,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2021-01-01 03:00:00",
  };

  const city = {
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
  };

  const uvIndexForToday = 6.8;

  return (
    <>
      <Card className="order-3 flex h-full flex-col justify-between overflow-hidden lg:order-2">
        <CardHeader className="p-4 min-[475px]:p-6">
          <CardTitle className="flex items-center gap-2">
            <Sunset className="h-5 w-5 min-w-5 text-foreground" />
            <span className="text-lg min-[475px]:text-xl xl:text-2xl">
              Sunset
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 min-[475px]:p-6">
          <p>{formatSunTimeWithAMPM(city.sunset, city.timezone)}</p>
        </CardContent>
        <CardFooter className="p-4 min-[475px]:p-6">
          <p className="line-clamp-2 text-clip">
            Sunrise: {formatSunTimeWithAMPM(city.sunrise, city.timezone)}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-4 h-full xl:order-3">
        <CardHeader className="p-4 min-[475px]:p-6">
          <CardTitle className="flex items-center gap-2">
            <Wind className="h-5 w-5 min-w-5 text-foreground" />
            <span className="text-lg min-[475px]:text-xl xl:text-2xl">
              Wind
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center p-0">
          <Compass speed={data.wind.speed} deg={data.wind.deg} />
        </CardContent>
      </Card>
      <Card className="order-5 flex h-full flex-col justify-between overflow-hidden">
        <CardHeader className="p-4 min-[475px]:p-6">
          <CardTitle className="flex items-center gap-2">
            <SunMedium className="h-5 w-5 min-w-5 text-foreground" />
            <span className="text-lg min-[475px]:text-xl xl:text-2xl">
              UV Index
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 min-[475px]:p-6">
          <p className="mb-2">
            {Math.round(uvIndexForToday)}
            <br></br>
            {uvIndexForToday <= 2
              ? "Low"
              : uvIndexForToday <= 5
                ? "Moderate"
                : uvIndexForToday <= 7
                  ? "High"
                  : "Very High"}
          </p>
          <Progress aria-label="UV Index" value={uvIndexForToday * 10} />
        </CardContent>
        <CardFooter className="p-4 min-[475px]:p-6">
          <p className="line-clamp-2 text-clip">
            {uvIndexForToday <= 2
              ? "No protection needed."
              : uvIndexForToday <= 5
                ? "Wear sunscreen."
                : "Take precautions."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-6 flex h-full flex-col justify-between overflow-hidden">
        <CardHeader className="p-4 min-[475px]:p-6">
          <CardTitle className="flex items-center gap-2">
            <CloudHail className="h-5 w-5 min-w-5 text-foreground" />
            <span className="text-lg min-[475px]:text-xl xl:text-2xl">
              Precipitation
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 min-[475px]:p-6">
          <p>
            {data.rain?.["1h"] || 0}mm <br></br>in the last 3h
          </p>
        </CardContent>
        <CardFooter className="p-4 min-[475px]:p-6">
          <p className="line-clamp-2 text-clip">
            {data.rain?.["1h"] !== undefined
              ? data.rain["1h"] <= 0.2
                ? "Light rain or drizzle. An umbrella may come in handy."
                : data.rain["1h"] <= 2.5
                  ? "Moderate rain."
                  : "Heavy rain."
              : "Conditions are dry."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-7 flex h-full flex-col justify-between overflow-hidden">
        <CardHeader className="p-4 min-[475px]:p-6">
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 min-w-5 text-foreground" />
            <span className="text-lg min-[475px]:text-xl xl:text-2xl">
              Feels like
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 min-[475px]:p-6">
          <p>{Math.floor(data.main.feels_like)}&deg;</p>
        </CardContent>
        <CardFooter className="p-4 min-[475px]:p-6">
          <p className="line-clamp-2 text-clip">
            {data.main.feels_like < data.main.temp
              ? "Feels colder than the actual temperature."
              : data.main.feels_like > data.main.temp
                ? "Feels warmer than the actual temperature."
                : "Feels like the actual temperature."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-8 flex h-full flex-col justify-between overflow-hidden">
        <CardHeader className="p-4 min-[475px]:p-6">
          <CardTitle className="flex items-center gap-2">
            <Droplet className="h-5 w-5 min-w-5 text-foreground" />
            <span className="text-lg min-[475px]:text-xl xl:text-2xl">
              Humidity
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 min-[475px]:p-6">
          <p>74&deg;</p>
        </CardContent>
        <CardFooter className="p-4 min-[475px]:p-6">
          <p className="line-clamp-2 text-clip">
            {data.main.humidity < 40
              ? "Low humidity. It might feel dry."
              : data.main.humidity < 70
                ? "Moderate humidity. Comfortable conditions."
                : "High humidity. It might feel humid and uncomfortable."}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
