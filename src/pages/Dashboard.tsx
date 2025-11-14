// Presentation/UI Layer: Dashboard page component
// Orchestrates all weather components in the main view

import { Header } from '../components/Header/Header';
import { CurrentWeather } from '../components/CurrentWeather/CurrentWeather';
import { HourlyForecast } from '../components/HourlyForecast/HourlyForecast';
import { DailyForecast } from '../components/DailyForecast/DailyForecast';
import { TodayHighlight } from '../components/TodayHighlight/TodayHighlight';

import { OtherCities } from '../components/OtherCities/OtherCities';
import { useWeather } from '../hooks/useWeather';

export const Dashboard = () => {
  const
    { weatherData,
      loading,
      error,
      temperatureUnit,
      toggleTemperatureUnit,
      changeCity,
    } = useWeather();

  const handleSearch = (query: string) => {
    changeCity(query);
  };
  // Global Loading screen

  if (loading && !weatherData) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-white text-xl">Loading weather data...</div>
      </div>
    );
  }

  if (error && !weatherData) {
    return (
      <div className="h-full flex items-center justify-center text-red-500 text-xl">
        {error}
      </div>
    );
  }


  return (
    <div className="h-full bg-white dark:bg-[#0B1022]">
      <Header onSearch={handleSearch} />

      <div className="p-6">
        <div className="grid grid-cols-12 gap-6 h-full">

          <div className="col-span-7 flex flex-col gap-6">

            {weatherData?.current && (
              <CurrentWeather
                data={weatherData.current}
                temperatureUnit={temperatureUnit}
                onToggleUnit={toggleTemperatureUnit}
                loading={loading}
                error={error}
              />
            )}

            {weatherData?.hourly && <HourlyForecast data={weatherData.hourly} />}

            <div className="grid grid-cols-2 gap-6">
              {weatherData?.daily && <DailyForecast data={weatherData.daily} />}
              
            </div>
          </div>

          <div className="col-span-5 flex flex-col gap-6">
            {weatherData?.highlights && <TodayHighlight data={weatherData.highlights} />}

            <div className="flex-1">
              {weatherData?.otherCities && (
                <OtherCities data={weatherData.otherCities} onCityClick={changeCity} />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};