import React from "react";
import Sidebar from "./Sidebar"; // Import Sidebar
import Header from "./Header";   // Import Header
import { ReactNode } from "react";

interface DashboardLayoutProps {
  activeNav: string;
  activeSubNav: string | undefined;
  children: ReactNode; // To type the children prop
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ activeNav, activeSubNav, children }) => {
  return (
    <div className="main_wrapper">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <Header />
        <main className="main_content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;