import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
}

export interface Submodule {
  id: number;
  type: 'teaching' | 'mcq' | 'quiz';
  title: string;
  completed: boolean;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  locked: boolean;
  completed: boolean;
  points: number;
  submodules: Submodule[];
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
  completeSubmodule: (moduleId: number, submoduleId: number) => void;
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

const createSubmodules = (): Submodule[] => [
  { id: 1, type: 'teaching', title: 'Learn', completed: false },
  { id: 2, type: 'mcq', title: 'Practice', completed: false },
  { id: 3, type: 'quiz', title: 'Quiz', completed: false },
];

const initialModules: Module[] = [
  { id: 1, title: 'Basics of Insurance', description: 'Foundation of insurance concepts', icon: '🛡️', locked: false, completed: false, points: 100, submodules: createSubmodules() },
  { id: 2, title: 'Life Insurance', description: 'Protecting your loved ones\' future', icon: '❤️', locked: true, completed: false, points: 150, submodules: createSubmodules() },
  { id: 3, title: 'Health Insurance', description: 'Understanding medical coverage', icon: '🏥', locked: true, completed: false, points: 150, submodules: createSubmodules() },
  { id: 4, title: 'Vehicle Insurance', description: 'Auto protection essentials', icon: '🚗', locked: true, completed: false, points: 150, submodules: createSubmodules() },
  { id: 5, title: 'Educational Insurance', description: 'Securing educational future', icon: '🎓', locked: true, completed: false, points: 150, submodules: createSubmodules() },
  { id: 6, title: 'Travel Insurance', description: 'Protection for your journeys', icon: '✈️', locked: true, completed: false, points: 150, submodules: createSubmodules() },
  { id: 7, title: 'Fraud Awareness', description: 'Protecting yourself from scams', icon: '🔒', locked: true, completed: false, points: 200, submodules: createSubmodules() },
  { id: 8, title: 'Policy Types', description: 'Understanding different policies', icon: '📋', locked: true, completed: false, points: 175, submodules: createSubmodules() },
  { id: 9, title: 'Government Schemes', description: 'Latest government insurance', icon: '🏛️', locked: true, completed: false, points: 175, submodules: createSubmodules() },
  { id: 10, title: 'Insurance Process', description: 'Complete insurance journey', icon: '🔄', locked: true, completed: false, points: 200, submodules: createSubmodules() },
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
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Validate that all modules have submodules array
        const isValid = parsed.every((m: any) => Array.isArray(m.submodules));
        if (isValid) {
          return parsed;
        }
      } catch (e) {
        console.error('Error parsing saved modules:', e);
      }
    }
    return initialModules;
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

  const completeSubmodule = (moduleId: number, submoduleId: number) => {
    setModules(prev =>
      prev.map(m => {
        if (m.id === moduleId) {
          const updatedSubmodules = m.submodules.map(s =>
            s.id === submoduleId ? { ...s, completed: true } : s
          );
          const allCompleted = updatedSubmodules.every(s => s.completed);
          return { ...m, submodules: updatedSubmodules, completed: allCompleted };
        }
        return m;
      })
    );

    // Check if module is complete and unlock next modules
    const module = modules.find(m => m.id === moduleId);
    if (module) {
      const allSubmodulesComplete = module.submodules.filter(s => s.id !== submoduleId).every(s => s.completed);
      if (allSubmodulesComplete && moduleId === 1) {
        // Unlock all other modules after completing Module 1
        for (let i = 2; i <= 10; i++) {
          unlockModule(i);
        }
      }
    }
  };

  return (
    <GameContext.Provider value={{ progress, updateProgress, earnBadge, modules, unlockModule, completeSubmodule }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
