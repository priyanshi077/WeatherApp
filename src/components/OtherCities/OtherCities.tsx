// Presentation/UI Layer: Other cities weather component
// Displays weather for multiple cities in grid format

import { Cloud } from 'lucide-react';
import { CityWeather } from '../../types/weather.types';

interface OtherCitiesProps {
  data: CityWeather[];
  onCityClick?: (city: string) => void;
}

export const OtherCities = ({ data, onCityClick }: OtherCitiesProps) => {
  return (
    <div className="space-y-3 h-full flex flex-col">
      <div className="flex items-center justify-between flex-shrink-0">
        <h3 className="text-white text-base font-semibold">Other Cities</h3>
        <button className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors">
          Show All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1">
        {data.map((city, index) => (
          <div
            key={index}
            onClick={() => onCityClick?.(city.city)}
            className="bg-gradient-to-br from-[#1a2642] to-[#0f1829] rounded-3xl p-3 border border-[#1E2A47] cursor-pointer hover:border-cyan-400/50 transition-all hover:scale-105 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-white text-2xl font-bold">{city.temperature}°</div>
              <Cloud className="text-gray-300" size={32} />
            </div>

            <div className="text-gray-400 text-xs mb-1">
              H:{city.high}° L:{city.low}°
            </div>

            <div>
              <div className="text-white text-sm font-semibold">{city.city}</div>
              {city.country !== city.city && (
                <div className="text-gray-400 text-xs">{city.country}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
