import { createContext, useContext, useMemo } from 'react';

import { useTheme } from '../hooks/useTheme';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const { theme, setTheme } = useTheme();

  const themeContextValue = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
