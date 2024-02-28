import { ReactNode, createContext, useState } from 'react';
import { changeCssVariables } from '../services/changeCssVariables';

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
    changeCssVariables(name);
  };

  const value = {
    theme,
    change,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
