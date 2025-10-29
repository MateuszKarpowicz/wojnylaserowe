'use client';
import { createContext, useCallback, useContext, useState } from 'react';

const OfertaContext = createContext(null);

export function OfertaProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <OfertaContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </OfertaContext.Provider>
  );
}

export function useOferta() {
  const context = useContext(OfertaContext);
  if (!context) {
    throw new Error('useOferta must be used within OfertaProvider');
  }
  return context;
}
