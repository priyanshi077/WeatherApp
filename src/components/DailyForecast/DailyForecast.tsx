// Presentation/UI Layer: Daily weather forecast component
// Shows upcoming days weather predictions

import { CloudRain, Zap } from 'lucide-react';
import { DailyForecast as DailyForecastType } from '../../types/weather.types';

interface DailyForecastProps {
  data: DailyForecastType[];
}

export const DailyForecast = ({ data }: DailyForecastProps) => {
  return (
    <div className="h-full">
      {data.map((day, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#1a2642] to-[#0f1829] rounded-3xl p-4 flex items-center justify-between border border-[#1E2A47] h-full"
        >
          <div>
            <p className="text-white text-base font-semibold mb-0.5">{day.day}</p>
            <p className="text-gray-400 text-xs">{day.condition}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white text-3xl font-bold">{day.temperature}°</span>
            <div className="w-16 h-16 bg-[#1E2A47] rounded-2xl flex items-center justify-center relative">
              <CloudRain className="text-gray-300" size={24} />
              <Zap className="text-cyan-400 absolute" size={14} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
