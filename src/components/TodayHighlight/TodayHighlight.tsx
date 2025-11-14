import { TodayHighlight as TodayHighlightType } from '../../types/weather.types';
import React from 'react';

interface HighlightCardProps {
  title: string;
  imgSrc: string;
  imgAlt?: string;
  children?: React.ReactNode;
}

const HighlightCard = ({ title, imgSrc, imgAlt, children }: HighlightCardProps) => (
  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#031131] dark:to-[#01050c] rounded-3xl p-6 border border-gray-200 dark:border-[#1E2A47] flex flex-col justify-between items-center h-48 overflow-hidden">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-gray-600 dark:text-gray-500 text-xs">{title}</span>
      <div className="h-10">
     <img src={imgSrc} alt={imgAlt || title} className="h-25 w-auto object-contain mx-auto" />

      </div>
      {children}
    </div>
  </div>
);

interface TodayHighlightProps {
  data: TodayHighlightType;
}

export const TodayHighlight = ({ }: TodayHighlightProps) => {
  return (
    <div className="space-y-5 h-full flex flex-col">
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1a2642] dark:to-[#0f1829] h-full rounded-3xl p-4 border border-gray-200 dark:border-[#1E2A47] flex flex-col justify-between">
        <h3 className="text-black dark:text-gray-100 text-base font-semibold flex-shrink-0">Today Highlight</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 h-60 w-full">
          <HighlightCard title="Chance of Rain" imgSrc="1stimg.gif" />

          <HighlightCard title="UV Index" imgSrc="Uvindex.gif">
            <div className="flex items-center justify-center relative h-10">
              <div className="relative w-16 h-12">
                
              </div>
            </div>
          </HighlightCard>

          <HighlightCard title="Wind Status" imgSrc="windStatus.gif" />

          <HighlightCard title="Humidity" imgSrc="Humidity.gif" />
        </div>
      </div>
    </div>
  );
};
