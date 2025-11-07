"use client";

import { ThemeToggle } from "../components/theme/ThemeToggle";
import TechnicalMetrics from "../components/Projects";
import HomeIcon from "../components/HomeIcon";

export default function BackendPortfolio() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white overflow-x-hidden">
      <HomeIcon />
      <ThemeToggle />
      <TechnicalMetrics />
    </main>
  );
}
