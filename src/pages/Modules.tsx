import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { Lock, CheckCircle, ArrowLeft } from 'lucide-react';

const Modules = () => {
  const { modules } = useGame();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Modules</h1>
          <p className="text-muted-foreground text-lg">
            Complete Module 1 to unlock all other modules
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`relative bg-card rounded-2xl p-6 shadow-card border-2 transition-all ${
                module.locked
                  ? 'border-border opacity-60'
                  : 'border-primary hover:shadow-glow hover:scale-105'
              }`}
            >
              {module.locked && (
                <div className="absolute top-4 right-4">
                  <Lock className="text-muted-foreground" size={24} />
                </div>
              )}
              
              {module.completed && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="text-success" size={24} />
                </div>
              )}

              <div className="text-6xl mb-4">{module.icon}</div>
              
              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-muted-foreground mb-4">{module.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-secondary font-semibold">+{module.points} pts</span>
                {!module.locked && (
                  <Link to={`/module/${module.id}`}>
                    <Button size="sm">
                      {module.completed ? 'Review' : 'Start'}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modules;
