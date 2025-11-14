// Presentation/UI Layer: Header component with search and user profile
// Contains search functionality and user information

import { Search, ChevronDown } from 'lucide-react';
import { useState, useCallback } from 'react';

interface HeaderProps {
  onSearch?: (query: string) => void;
  userName?: string;
}

export const Header = ({ onSearch, userName = 'User Name' }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = useCallback(() => {
    const trimmedValue = searchValue.trim();
    if (trimmedValue) {
      onSearch?.(trimmedValue);
    }
  }, [searchValue, onSearch]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="h-20 bg-white dark:bg-[#0B1022] flex items-center justify-between px-8 border-b border-gray-200 dark:border-[#1E2A47]">

      <div className="flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-1 flex-1 max-w-xl">
        <button onClick={handleSearch}>
          <Search className="text-gray-600 dark:text-gray-400 transition-colors" size={30} />

        </button >
        <input
          type="text"
          placeholder="Search City"
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="bg-transparent text-black dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 px-8 py-4 outline-none text-sm flex-1"
        />
      </div>



      <div className="flex items-center gap-10 rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-1 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">U</span>
        </div>
        <span className="text-black dark:text-gray-100 text-sm">{userName}</span>
        <ChevronDown className="text-gray-600 dark:text-gray-500" size={20} />
      </div>
    </header>
  );
};
