import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const ThemeContextValue = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => React.useContext(ThemeContext);
