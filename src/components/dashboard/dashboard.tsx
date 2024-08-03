import CurrentWeather from "@/components/dashboard/widgets/current-weather";
import HourlyForecast from "@/components/dashboard/widgets/hourly-forecast";
import SevenDayForecast from "@/components/dashboard/widgets/seven-days-forecast";
import WeatherWidgets from "@/components/dashboard/widgets/weather-widget";
import AirPollution from "@/components/dashboard/widgets/air-pollution";

export default async function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-3 sm:grid-rows-6 min-[900px]:grid-cols-4 min-[900px]:grid-rows-5 lg:grid-cols-5 lg:grid-rows-4 xl:grid-cols-6 xl:grid-rows-3">
      <div className="[grid-area:1/1/3/3]">
        <CurrentWeather />
      </div>
      <div className="[grid-area:5/1/6/3] min-[900px]:[grid-area:3/1/4/3] lg:[grid-area:3/1/4/3] xl:[grid-area:1/3/2/5]">
        <AirPollution />
      </div>
      <div className="[grid-area:6/1/7/3] min-[900px]:[grid-area:3/3/4/5] lg:[grid-area:3/4/4/6] xl:[grid-area:2/3/3/5]">
        <HourlyForecast />
      </div>
      <div className="[grid-area:3/1/5/3] min-[900px]:[grid-area:1/3/3/5] lg:[grid-area:1/3/3/6] xl:[grid-area:1/5/3/7]">
        <SevenDayForecast />
      </div>
      <WeatherWidgets />
    </div>
  );
}
