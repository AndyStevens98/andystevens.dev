'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button onClick={toggleTheme} className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
			{theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
		</button>
	);
}
