import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  locked: boolean;
  completed: boolean;
  points: number;
}

interface UserProgress {
  points: number;
  completedModules: number[];
  badges: Badge[];
  username: string;
}

interface GameContextType {
  progress: UserProgress;
  updateProgress: (points: number, moduleId?: number) => void;
  earnBadge: (badge: Badge) => void;
  modules: Module[];
  unlockModule: (moduleId: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const initialBadges: Badge[] = [
  { id: 'beginner', name: 'Insurance Beginner', icon: '🎓', description: 'Complete Module 1', earned: false },
  { id: 'life-expert', name: 'Life Insurance Expert', icon: '❤️', description: 'Complete Life Insurance module', earned: false },
  { id: 'health-pro', name: 'Health Insurance Pro', icon: '🏥', description: 'Complete Health Insurance module', earned: false },
  { id: 'vehicle-master', name: 'Vehicle Insurance Master', icon: '🚗', description: 'Complete Vehicle Insurance module', earned: false },
  { id: 'travel-guru', name: 'Travel Insurance Guru', icon: '✈️', description: 'Complete Travel Insurance module', earned: false },
  { id: 'perfect-score', name: 'Perfect Scholar', icon: '⭐', description: 'Get perfect scores', earned: false },
  { id: 'roadmap-complete', name: 'Journey Complete', icon: '🏆', description: 'Complete the Insurance Roadmap', earned: false },
];

const initialModules: Module[] = [
  { id: 1, title: 'Introduction to Insurance', description: 'Learn the basics', icon: '📚', locked: false, completed: false, points: 100 },
  { id: 2, title: 'Life Insurance', description: 'Protecting your loved ones', icon: '❤️', locked: true, completed: false, points: 150 },
  { id: 3, title: 'Health Insurance', description: 'Medical coverage explained', icon: '🏥', locked: true, completed: false, points: 150 },
  { id: 4, title: 'Vehicle Insurance', description: 'Auto protection guide', icon: '🚗', locked: true, completed: false, points: 150 },
  { id: 5, title: 'Travel Insurance', description: 'Safe journeys ahead', icon: '✈️', locked: true, completed: false, points: 150 },
];

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('insurelearn-progress');
    return saved ? JSON.parse(saved) : {
      points: 0,
      completedModules: [],
      badges: initialBadges,
      username: 'Player',
    };
  });

  const [modules, setModules] = useState<Module[]>(() => {
    const saved = localStorage.getItem('insurelearn-modules');
    return saved ? JSON.parse(saved) : initialModules;
  });

  useEffect(() => {
    localStorage.setItem('insurelearn-progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('insurelearn-modules', JSON.stringify(modules));
  }, [modules]);

  const updateProgress = (points: number, moduleId?: number) => {
    setProgress(prev => {
      const newProgress = { ...prev, points: prev.points + points };
      if (moduleId && !prev.completedModules.includes(moduleId)) {
        newProgress.completedModules = [...prev.completedModules, moduleId];
      }
      return newProgress;
    });

    if (moduleId) {
      setModules(prev =>
        prev.map(m => m.id === moduleId ? { ...m, completed: true } : m)
      );
    }
  };

  const unlockModule = (moduleId: number) => {
    setModules(prev =>
      prev.map(m => m.id === moduleId ? { ...m, locked: false } : m)
    );
  };

  const earnBadge = (badge: Badge) => {
    setProgress(prev => ({
      ...prev,
      badges: prev.badges.map(b => b.id === badge.id ? { ...b, earned: true } : b),
    }));
  };

  return (
    <GameContext.Provider value={{ progress, updateProgress, earnBadge, modules, unlockModule }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
