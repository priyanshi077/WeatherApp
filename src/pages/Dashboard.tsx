// Presentation/UI Layer: Dashboard page component
// Orchestrates all weather components in the main view

import { CurrentWeather } from '../components/CurrentWeather/CurrentWeather';
import { HourlyForecast } from '../components/HourlyForecast/HourlyForecast';
import { DailyForecast } from '../components/DailyForecast/DailyForecast';
import { TodayHighlight } from '../components/TodayHighlight/TodayHighlight';
import { SunriseSunset } from '../components/SunriseSunset/SunriseSunset';
import { OtherCities } from '../components/OtherCities/OtherCities';
import { useWeather } from '../hooks/useWeather';

export const Dashboard = () => {
  const { weatherData, loading, temperatureUnit, toggleTemperatureUnit, changeCity } = useWeather();

  if (loading || !weatherData) {
    return null;
  }

  return (
    <div className="p-6 h-full">
      <div className="grid grid-cols-12 gap-6 h-full">
        <div className="col-span-7 flex flex-col gap-6">
          <div className="flex-shrink-0">
            <CurrentWeather
              data={weatherData.current}
              temperatureUnit={temperatureUnit}
              onToggleUnit={toggleTemperatureUnit}
            />
          </div>

          <div className="flex-shrink-0">
            <HourlyForecast data={weatherData.hourly} />
          </div>

          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-6">
              <DailyForecast data={weatherData.daily} />
              <SunriseSunset data={weatherData.sunriseSunset} />
            </div>
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-6">
          <div className="flex-shrink-0">
            <TodayHighlight data={weatherData.highlights} />
          </div>

          <div className="flex-shrink-0 flex-1">
            <OtherCities
              data={weatherData.otherCities}
              onCityClick={changeCity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
