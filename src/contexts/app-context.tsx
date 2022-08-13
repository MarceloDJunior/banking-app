import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

type AppContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const AppContext = createContext({} as AppContextType);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
