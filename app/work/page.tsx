"use client";

import HomeIcon from "../components/HomeIcon";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import SystemArchitecture from "../components/WorkExperience";


export default function BackendPortfolio() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white overflow-x-hidden">
      <HomeIcon />
      <ThemeToggle />
      <SystemArchitecture />
    </main>
  );
}
