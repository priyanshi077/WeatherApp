// Presentation/UI Layer: Hourly weather forecast component
// Displays weather predictions for different hours


import { HourlyForecast as HourlyForecastType } from '../../types/weather.types';


interface HourlyForecastProps {
  data: HourlyForecastType[];
}

export const HourlyForecast = ({ data }: HourlyForecastProps) => {
  return (
    <div className="bg-[#0f1829] rounded-3xl p-20 pt-2 ml-10 h-full flex flex-col">

      <h3 className="text-white text-sm font-semibold mb-4">Today / Week</h3>

      <div className="flex gap-2 h-40 w-10">
        {data.map((hour, index) => (
          <div
            key={index}
            className= "flex-1  bg-[#1a2642] rounded-2xl p-2 flex flex-col items-center justify-center gap-5 border border-[#1E2A47] hover:border-cyan-400/50 transition-colors"
          >
            <span className="text-gray-400 text-xs font-medium">{hour.time}</span>
            <div className='h-1 w-10 flex items-center justify-center '>
              <img src="Cloudy.png" alt="" />
            </div>
            <span className="text-black text-sm font-semibold ">{hour.temperature}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};
