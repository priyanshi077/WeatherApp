// Presentation/UI Layer: Hourly weather forecast component
// Displays weather predictions for different hours


import { HourlyForecast as HourlyForecastType } from '../../types/weather.types';
import { Sunrise, Sunset } from 'lucide-react';

interface HourlyForecastProps {
  data: HourlyForecastType[];
}

export const HourlyForecast = ({ data }: HourlyForecastProps) => {
  return (
    <div className="bg-white dark:bg-[#12182b] rounded-3xl p-5 mt-5 pt-2 w-full h-full">

      {/* Header */}
      <h3 className="text-black dark:text-gray-100 text-sm font-semibold mb-4 mt-10">Today / Week</h3>

      {/* Main container: side-by-side layout */}
      <div className="flex gap-4">

        {/* Left: Hourly Cards */}
        <div className="flex-1 flex gap-2">
          {data.map((hour, index) => (
            <div
              key={index}
             className="bg-gray-100 dark:bg-[#1a2642] rounded-2xl p-4 flex flex-col items-center justify-center gap-1 border border-gray-200 dark:border-gray-600 hover:border-cyan-400/50 dark:hover:border-cyan-400/50 transition-colors w-[70px]"
             >
              <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">{hour.time}</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <img src="Cloudy.png" className="w-full" alt="" />
              </div>
              <span className="text-black dark:text-gray-100 text-sm font-semibold">{hour.temperature}°</span>
            </div>
          ))}
        </div>

        {/* Right: Sunrise/Sunset Card */}
        <div className="w-[150px] text-black dark:text-gray-100 bg-gradient-to-br from-white to-gray-50 dark:from-[#1a2642] dark:to-[#0f1829] rounded-3xl p-6 border border-gray-200 dark:border-gray-700">

          <div className="flex items-center gap-2 mb-3">
            <Sunrise className="text-yellow-500 dark:text-yellow-300" size={18} />
            <span className="text-gray-600 dark:text-gray-500 text-xs">Sunrise</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Sunset className="text-orange-500 dark:text-orange-300" size={18} />
            <span className="text-gray-600 dark:text-gray-500 text-xs">Sunset</span>
          </div>

          <div className="pt-2 border-t border-gray-200 dark:border-gray-600 mt-2">
            <span className="text-gray-600 dark:text-gray-500 text-xs">Length of day</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-[#1A2642] text-black dark:text-gray-100 mt-5 rounded-3xl h-24 w-72 border border-gray-200 dark:border-gray-700 flex items-center justify-between px-5">

        {/* Left Section */}
        <div>
          <h2 className="text-sm font-semibold">Tomorrow</h2>
          <p className="text-xs text-gray-600 dark:text-gray-500 mt-1">Thunder Storm</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">14°</span>
          <img
            src="Thunder.gif"   
            alt=""
            className="h-15 w-10"
          />
        </div>
      </div>
    </div>
  );
};