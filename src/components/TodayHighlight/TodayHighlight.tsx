// Presentation/UI Layer: Today's weather highlights component
// Displays key weather metrics in card format

import { CloudRain, Sun, Wind, Droplets } from 'lucide-react';
import { TodayHighlight as TodayHighlightType } from '../../types/weather.types';

interface TodayHighlightProps {
  data: TodayHighlightType;
}

export const TodayHighlight = ({ data }: TodayHighlightProps) => {
  return (
    <div className="space-y-4 h-full flex flex-col">
      <h3 className="text-white text-base font-semibold flex-shrink-0">Today Highlight</h3>

      <div className="grid grid-cols-2 gap-3 flex-1">
        <div className="bg-gradient-to-br from-[#1a2642] to-[#0f1829] rounded-3xl p-4 border border-[#1E2A47] flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <CloudRain className="text-cyan-400" size={16} />
            <span className="text-gray-400 text-xs">Chance of Rain</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-white text-3xl font-bold">{data.chanceOfRain}%</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1a2642] to-[#0f1829] rounded-3xl p-4 border border-[#1E2A47] flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="text-cyan-400" size={16} />
            <span className="text-gray-400 text-xs">UV Index</span>
          </div>
          <div className="flex items-center justify-center relative h-12">
            <div className="relative w-16 h-12">
              <div className="absolute inset-0 rounded-full border-2 border-[#1E2A47] flex items-center justify-center">
                <Sun className="text-purple-500" size={20} />
              </div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                <div className="w-0.5 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1a2642] to-[#0f1829] rounded-3xl p-4 border border-[#1E2A47] flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="text-cyan-400" size={16} />
            <span className="text-gray-400 text-xs">Wind Status</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind className="text-cyan-400" size={20} />
              <div>
                <div className="text-white text-sm font-semibold">{data.windSpeed}</div>
                <div className="text-gray-400 text-xs">km/h</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1a2642] to-[#0f1829] rounded-3xl p-4 border border-[#1E2A47] flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="text-cyan-400" size={16} />
            <span className="text-gray-400 text-xs">Humidity</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-white text-3xl font-bold">{data.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
