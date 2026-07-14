import { createContext } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const ScrollContext = createContext({
  scrollY: 0,
  isScrolled: false,
});

export function ScrollProvider({ children }) {
  const scrollData = useScrollPosition();

  return (
    <ScrollContext.Provider value={scrollData}>
      {children}
    </ScrollContext.Provider>
  );
}
