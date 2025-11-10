// Presentation/UI Layer: Main layout wrapper component
// Combines sidebar, header, and content areas

import { ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";

interface MainLayoutProps {
  children: ReactNode;
  onSearch?: (query: string) => void;
  userName?: string;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen bg-[#0B1022]">
      <Sidebar />{" "}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto hide-scrollbar">{children}</main>

      </div>
    </div>
  );
};
