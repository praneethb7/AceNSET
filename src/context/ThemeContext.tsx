import React, { createContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Determine initial theme: check localStorage, then default to dark.
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      // No stored preference: default to dark mode.
      // (If you wanted light as default, return 'light' here:contentReference[oaicite:3]{index=3}.)
      return 'dark';
    }
    return 'dark';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    const root = window.document.documentElement;
    // Add or remove the 'dark' class on <html>
    root.classList.toggle('dark', theme === 'dark');
    // Persist the preference in localStorage
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(curr => (curr === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
