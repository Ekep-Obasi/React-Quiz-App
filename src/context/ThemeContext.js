import { ThemeProvider as StyledComponentThemeProvider } from '@emotion/react';
import { createContext, useContext, useEffect, useState } from 'react';
import { theme } from '../utils/theme';
import { LocalStorage } from '../utils/localStorage';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(LocalStorage.getData('mode') || 'light');

  useEffect(() => {
    if (LocalStorage.getData('mode')) {
      LocalStorage.setData('mode', mode);
    }
  }, [mode]);

  const themeObj = theme(mode);

  const contextValue = { themeObj, mode, setMode };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledComponentThemeProvider theme={themeObj}>
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
