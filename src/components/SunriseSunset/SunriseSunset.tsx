// Presentation/UI Layer: Sunrise and sunset times component
// Shows sunrise, sunset times and day length

import { Sunrise, Sunset } from 'lucide-react';
import { SunriseSunset as SunriseSunsetType } from '../../types/weather.types';

interface SunriseSunsetProps {
  data: SunriseSunsetType;
}

export const SunriseSunset = ({ data }: SunriseSunsetProps) => {
  return (
    <div className="bg-gradient-to-br from-[#1a2642] to-[#0f1829] rounded-3xl p-4 border border-[#1E2A47] h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sunrise className="text-yellow-400" size={18} />
            <span className="text-gray-400 text-xs">Sunrise</span>
          </div>
          <span className="text-white text-lg font-semibold">{data.sunrise}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sunset className="text-orange-400" size={18} />
            <span className="text-gray-400 text-xs">Sunset</span>
          </div>
          <span className="text-white text-lg font-semibold">{data.sunset}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-[#1E2A47]">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Length of day</span>
          <span className="text-white text-base font-semibold">{data.lengthOfDay}</span>
        </div>
      </div>
    </div>
  );
};
