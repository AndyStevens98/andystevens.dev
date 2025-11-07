"use client";

import { ThemeToggle } from "./components/theme/ThemeToggle";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";

export default function BackendPortfolio() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white overflow-x-hidden">
      <ThemeToggle />
      <HeroSection />
      <ContactSection />
    </main>
  );
}
