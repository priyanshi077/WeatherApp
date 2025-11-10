// Presentation/UI Layer: Current weather display component
// Shows current temperature, conditions, and location

import { MapPin, CloudRain, Cloud } from 'lucide-react';
import { CurrentWeather as CurrentWeatherType } from '../../types/weather.types';

interface CurrentWeatherProps {
  data: CurrentWeatherType;
  temperatureUnit: 'C' | 'F';
  onToggleUnit: () => void;
  loading?: boolean;
  error?: string | null;
}

export const CurrentWeather = ({ 
  data, 
  temperatureUnit, 
  onToggleUnit, 
  loading = false,
  error = null 
}: CurrentWeatherProps) => {
  return (
    <div className="relative bg-gradient-to-br from-[#1a2642] to-[#0f1829] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-cyan-400/30 overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400"></div>

      {loading && (
        <div className="absolute inset-0 bg-[#0B1022]/80 flex items-center justify-center z-10">
          <div className="text-white text-sm sm:text-base">Loading weather data...</div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 bg-[#0B1022]/80 flex items-center justify-center z-10">
          <div className="text-red-500">{error}</div>
        </div>
      )}

       {/* Location & Unit Switch */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
        <div className="flex items-center gap-2 bg-purple-600 px-2 sm:px-3 py-1 rounded-full">
          <MapPin className="text-white" size={12} />
          <span className="text-white text-[10px] sm:text-xs font-medium">{data.location}</span>
        </div>

        <div className="flex items-center gap-1 bg-[#1E2A47] rounded-full p-1">
          <button
            onClick={onToggleUnit}
            className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium transition-colors ${
              temperatureUnit === 'F' ? 'bg-white text-black' : 'text-gray-400'
            }`}
          >
            F
          </button>
          <button
            onClick={onToggleUnit}
            className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium transition-colors ${
              temperatureUnit === 'C' ? 'bg-white text-black' : 'text-gray-400'
            }`}
          >
            C
          </button>
        </div>
      </div>

         {/* Main Weather Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-1 gap-4 sm:gap-0">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
            <h2 className="text-white text-2xl sm:text-3xl font-bold">{data.day}</h2>
            <span className="text-gray-400 text-xs sm:text-sm">({data.location}, {data.country})</span>
          </div>
          <p className="text-gray-400 text-[10px] sm:text-xs mb-3 sm:mb-4">{data.date}</p>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-white text-4xl sm:text-5xl font-bold">{data.temperature}°{temperatureUnit}</span>
            <Cloud className="text-gray-400" size={28} />
          </div>

          <p className="text-gray-400 text-[10px] sm:text-xs">
            High: {data.high}° Low: {data.low}°
          </p>
        </div>


          {/* Footer: Condition & Feels Like */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
          <Cloud className="absolute top-0 right-0 text-gray-400 opacity-80" size={60} />
          <div className="absolute bottom-2 right-3 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-sm opacity-80"></div>
          <div className="absolute bottom-3 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
          <div className="absolute top-1 right-10 w-1 h-4 sm:w-1.5 sm:h-6 bg-yellow-400 rounded-full rotate-45"></div>
          <div className="absolute top-4 right-2 w-1 h-4 sm:w-1.5 sm:h-6 bg-yellow-400 rounded-full rotate-90"></div>
          <div className="absolute top-8 right-0 w-1 h-4 sm:w-1.5 sm:h-6 bg-yellow-400 rounded-full rotate-135"></div>
          <div className="absolute bottom-8 right-2 w-1 h-4 sm:w-1.5 sm:h-6 bg-yellow-400 rounded-full -rotate-45"></div>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#1E2A47] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          <CloudRain className="text-gray-400" size={14} />
          <span className="text-white text-xs sm:text-sm font-semibold">{data.condition}</span>
        </div>
        <span className="text-gray-400 text-[10px] sm:text-xs">Feels Like {data.feelsLike}°</span>
      </div>
    </div>
  );
};
