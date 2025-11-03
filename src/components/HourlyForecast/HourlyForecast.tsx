// Presentation/UI Layer: Hourly weather forecast component
// Displays weather predictions for different hours

import { Cloud } from 'lucide-react';
import { HourlyForecast as HourlyForecastType } from '../../types/weather.types';

interface HourlyForecastProps {
  data: HourlyForecastType[];
}

export const HourlyForecast = ({ data }: HourlyForecastProps) => {
  return (
    <div className="bg-[#0f1829] rounded-3xl p-4 h-full flex flex-col">
      <h3 className="text-white text-sm font-semibold mb-4">Today / Week</h3>

      <div className="flex gap-2 flex-1">
        {data.map((hour, index) => (
          <div
            key={index}
            className="flex-1 bg-[#1a2642] rounded-2xl p-2 flex flex-col items-center justify-center gap-2 border border-[#1E2A47] hover:border-cyan-400/50 transition-colors"
          >
            <span className="text-gray-400 text-xs font-medium">{hour.time}</span>
            <Cloud className="text-gray-300" size={24} />
            <span className="text-white text-sm font-semibold">{hour.temperature}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};
