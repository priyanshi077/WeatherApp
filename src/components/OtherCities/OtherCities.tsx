// Presentation/UI Layer: Other cities weather component
// Displays weather for multiple cities in grid format


import { CityWeather } from '../../types/weather.types';

interface OtherCitiesProps {
  data: CityWeather[];
  onCityClick?: (city: string) => void;
}

export const OtherCities = ({ data, onCityClick }: OtherCitiesProps) => {
  return (
   
    <div className="space-y-3 h-full flex flex-col">
      <div className="flex items-center justify-between flex-shrink-0">
        <h3 className="text-black dark:text-gray-100 text-lg sm:text-xl font-semibold">Other Cities</h3>
        <button className="text-cyan-500 dark:text-cyan-300 text-xs sm:text-sm hover:text-cyan-300 dark:hover:text-cyan-200 transition-colors">
          Show All
        </button>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 flex-1 max-h-[220px] sm:max-h-full overflow-hidden pr-2">
        {data.slice(0, 4).map((city, index) => (
          <div
            key={index}
            onClick={() => onCityClick?.(city.city)}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1a2642] dark:to-[#0f1829] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-gray-200 dark:border-[#1E2A47] cursor-pointer hover:border-cyan-400/50 dark:hover:border-cyan-400/50 transition-all flex flex-col justify-between min-h-[120px]"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-black dark:text-gray-100 text-2xl sm:text-3xl font-bold">{city.temperature}°</div>
              <img
                src="Cloudy.png"
                alt="Weather icon"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
              />
            </div>

            <div className="text-gray-600 dark:text-gray-500 text-[11px] sm:text-sm mb-1">
              H:{city.high}° L:{city.low}°
            </div>

            <div className="mt-2">
              <div className="text-black dark:text-gray-100 text-sm sm:text-base font-semibold truncate">{city.city}</div>
              {city.country !== city.city && (
                <div className="text-gray-600 dark:text-gray-500 text-xs sm:text-sm truncate">{city.country}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
