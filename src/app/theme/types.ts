export type Theme = 'dark' | 'light';

export interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
};

export interface ThemeProviderProps {
    children: React.ReactNode;
}
