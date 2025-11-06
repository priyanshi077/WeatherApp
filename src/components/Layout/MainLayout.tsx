// Presentation/UI Layer: Main layout wrapper component
// Combines sidebar, header, and content areas

import { ReactNode } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';


interface MainLayoutProps {
  children: ReactNode;
  onSearch?: (query: string) => void;
  userName?: string;
}

export const MainLayout = ({ children, onSearch, userName }: MainLayoutProps) => {
  return (
    <div className="flex h-screen bg-[#0B1022] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        

        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};
