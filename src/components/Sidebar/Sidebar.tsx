// Presentation/UI Layer: Sidebar navigation component
// Displays app logo and navigation icons

import { LayoutGrid, PieChart, MapPin, Calendar, Settings, LogOut, Moon } from 'lucide-react';

interface SidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Sidebar = ({ activeTab = 'dashboard', onTabChange }: SidebarProps) => {
  const navItems = [
    { id: 'dashboard', icon: LayoutGrid },
    { id: 'analytics', icon: PieChart },
    { id: 'locations', icon: MapPin },
    { id: 'calendar', icon: Calendar },
    { id: 'settings', icon: Settings }
  ];

  return (
    <div className="w-[113px] h-screen bg-[#0B1022] border-r-2 border-[#1E2A47] flex flex-col items-center py-8">
      <div className="mb-12 flex flex-col items-center gap-2">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center border-2 border-cyan-400">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-yellow-400">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
          </svg>
        </div>
        <span className="text-white text-xs font-medium">SkySense</span>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange?.(item.id)}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
              activeTab === item.id
                ? 'bg-[#1E2A47] text-cyan-400'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <item.icon size={24} />
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6 mt-auto">
         <button className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-300 transition-colors">
          <LogOut size={24} />
        </button>
        <button className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-300 transition-colors">
          <Moon size={24} />
        </button>
      </div>
    </div>
  );
};
