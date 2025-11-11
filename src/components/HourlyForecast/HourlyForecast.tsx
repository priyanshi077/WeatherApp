// Presentation/UI Layer: Hourly weather forecast component
// Displays weather predictions for different hours


import { HourlyForecast as HourlyForecastType } from '../../types/weather.types';
import { Sunrise, Sunset } from 'lucide-react';


interface HourlyForecastProps {
  data: HourlyForecastType[];
}

export const HourlyForecast = ({ data }: HourlyForecastProps) => {
  return (
    <div className="bg-[#12182b] rounded-3xl p-5 mt-5 pt-2 w-full">
      
      {/* Header */}
      <h3 className="text-white text-sm font-semibold mb-4">Today / Week</h3>

      {/* Main container: side-by-side layout */}
      <div className="flex gap-4">
        
        {/* Left: Hourly Cards */}
        <div className="flex-1 flex gap-2">
          {data.map((hour, index) => (
            <div
              key={index}
              className="bg-[#1a2642] rounded-2xl p-4 flex flex-col items-center justify-center gap-1 border border-[#1E2A47] hover:border-cyan-400/50 transition-colors w-[70px]"
            >
              <span className="text-gray-400 text-xs font-medium">{hour.time}</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <img src="Cloudy.png" className="w-full" alt="" />
              </div>
              <span className="text-white text-sm font-semibold">{hour.temperature}°</span>
            </div>
          ))}
        </div>

        {/* Right: Sunrise/Sunset Card */}
        <div className="w-[170px] text-white bg-gradient-to-br from-[#1a2642] to-[#0f1829] rounded-3xl p-4 border border-[#1E2A47]">
          
          <div className="flex items-center gap-2 mb-3">
            <Sunrise className="text-yellow-400" size={18} />
            <span className="text-gray-400 text-xs">Sunrise</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Sunset className="text-orange-400" size={18} />
            <span className="text-gray-400 text-xs">Sunset</span>
          </div>

          <div className="pt-2 border-t border-[#1E2A47] mt-2">
            <span className="text-gray-400 text-xs">Length of day</span>
          </div>
        </div>
      </div>
    </div>
  );
};
