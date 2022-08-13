import { createContext, useContext, useState } from 'react';

type StickyScrollContextType = {
  isScrollingDown: boolean;
  isStickyEnabled: boolean;
  setIsScrollingDown: (isScrollingDown: boolean) => void;
  setIsStickyEnabled: (isStickyEnabled: boolean) => void;
};

const StickyScrollContext = createContext({} as StickyScrollContextType);

export const useStickyScrollContext = () => useContext(StickyScrollContext);

export const StickyScrollProvider: React.FC = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isStickyEnabled, setIsStickyEnabled] = useState(false);

  return (
    <StickyScrollContext.Provider
      value={{
        isScrollingDown,
        isStickyEnabled,
        setIsScrollingDown,
        setIsStickyEnabled,
      }}
    >
      {children}
    </StickyScrollContext.Provider>
  );
};
