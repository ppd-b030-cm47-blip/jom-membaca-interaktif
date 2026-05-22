import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { award, loadProgress, resetProgress, saveProgress } from '../utils/progress.js';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const value = useMemo(() => ({
    progress,
    setProfile: (updates) => setProgress((current) => ({ ...current, ...updates })),
    setSettings: (updates) => setProgress((current) => ({ ...current, settings: { ...current.settings, ...updates } })),
    awardActivity: (materialId, activity, score) => setProgress((current) => award(current, materialId, activity, score)),
    reset: () => setProgress(resetProgress()),
  }), [progress]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) throw new Error('useProgress must be used inside ProgressProvider');
  return value;
}
