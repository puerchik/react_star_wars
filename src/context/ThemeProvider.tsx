import { ReactNode, createContext, useState } from 'react';

export type Themes = 'neutral' | 'light' | 'dark';
type ThemesContext = {
  theme: Themes;
  change: (name: Themes) => void;
};
type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemesContext>({ theme: 'neutral', change: () => {} });

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes>('neutral');

  const change = (name: Themes) => {
    setTheme(name);
  };

  const value = {
    theme,
    change,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
