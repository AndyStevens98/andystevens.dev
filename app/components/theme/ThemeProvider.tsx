'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		const root = window.document.documentElement;
		const storedTheme = localStorage.getItem('theme') as Theme | null;

		if (storedTheme) {
			setTheme(storedTheme);
			root.classList.toggle('dark', storedTheme === 'dark');
		}
	}, []);

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
			const root = window.document.documentElement;

			localStorage.setItem('theme', newTheme);
			root.classList.toggle('dark', newTheme === 'dark');

			return newTheme;
		});
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
