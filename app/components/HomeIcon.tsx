"use client";

import Link from "next/link";

export default function HomeIcon() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="fixed top-4 left-4 z-50"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-white/90 dark:bg-gray-900/80 rounded-md border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-800 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" />
        </svg>
      </div>
    </Link>
  );
}