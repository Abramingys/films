import React from 'react';

export function useTheme() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('app-theme') || 'dark'
  );

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);
  return { theme, setTheme };
}
