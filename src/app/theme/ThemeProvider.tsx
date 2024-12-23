import React, { useState } from 'react';
import { Theme, ThemeProviderProps, IThemeContext } from './types';
import { DEFAULT_THEME } from './const';

export const ThemeContext = React.createContext<IThemeContext>({
    theme: 'dark',
    toggleTheme: () => null,
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const themeFromStorage = localStorage.getItem('theme');

    const currentTheme = themeFromStorage
        ? (themeFromStorage as Theme)
        : DEFAULT_THEME;

    const [theme, setTheme] = useState<Theme>(currentTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);

            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
            <main className={`${theme} text-foreground bg-background`}>
                {children}
            </main>
        </ThemeContext.Provider>
    );
};
