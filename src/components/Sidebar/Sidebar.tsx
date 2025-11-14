// Presentation/UI Layer: Sidebar navigation component
// Displays app logo and navigation icons

import { LayoutGrid, PieChart, MapPin, Calendar, Settings, LogOut, Moon, Sun } from 'lucide-react';
import { useTheme } from "../../hooks";


interface SidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Sidebar = ({ activeTab = 'dashboard', onTabChange }: SidebarProps) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { id: 'dashboard', icon: LayoutGrid },
    { id: 'analytics', icon: PieChart },
    { id: 'locations', icon: MapPin },
    { id: 'calendar', icon: Calendar },
    { id: 'settings', icon: Settings }
  ];

  return (
    <div className="w-[113px] h-screen bg-slate-50 dark:bg-[#0B1022] border-r-2 border-gray-200 dark:border-[#1E2A47] flex flex-col items-center py-8">
      <div className="mb-12 flex flex-col items-center gap-2">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center border-2 border-cyan-400 dark:border-cyan-300">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-yellow-400">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
          </svg>
        </div>
        <span className="text-gray-800 dark:text-gray-200 text-xs font-medium">SkySense</span>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange?.(item.id)}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
              activeTab === item.id
                ? 'bg-gray-200 dark:bg-gray-700 text-cyan-600 dark:text-cyan-400'
                : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            <item.icon size={24} />
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6 mt-auto">
         <button className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          <LogOut size={24} />
        </button>
        <button
          onClick={toggleTheme}
          className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </div>
  );
};
