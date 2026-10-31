import React, { createContext, useContext, useState, useEffect } from 'react';
import type { GlowMode } from '../types';

interface GlowContextType {
  glowMode: GlowMode;
  setGlowMode: (mode: GlowMode) => void;
  isSnowing: boolean;
  toggleSnow: () => void;
}

const GlowContext = createContext<GlowContextType | undefined>(undefined);

export const GlowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [glowMode, setGlowModeState] = useState<GlowMode>(() => {
    return (localStorage.getItem('balsam_glow_mode') as GlowMode) || 'daylight';
  });

  const [isSnowing, setIsSnowing] = useState<boolean>(() => {
    const saved = localStorage.getItem('balsam_snowing');
    return saved !== null ? saved === 'true' : true;
  });

  const setGlowMode = (mode: GlowMode) => {
    setGlowModeState(mode);
    localStorage.setItem('balsam_glow_mode', mode);
  };

  const toggleSnow = () => {
    setIsSnowing(prev => {
      const next = !prev;
      localStorage.setItem('balsam_snowing', String(next));
      return next;
    });
  };

  useEffect(() => {
    if (glowMode === 'daylight') {
      document.body.removeAttribute('data-glow-mode');
    } else {
      document.body.setAttribute('data-glow-mode', glowMode);
    }
  }, [glowMode]);

  return (
    <GlowContext.Provider value={{ glowMode, setGlowMode, isSnowing, toggleSnow }}>
      {children}
    </GlowContext.Provider>
  );
};

export const useGlow = () => {
  const context = useContext(GlowContext);
  if (!context) throw new Error('useGlow must be used within GlowProvider');
  return context;
};
