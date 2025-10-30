import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { Lock, CheckCircle, ArrowLeft, BookOpen, Brain, Trophy } from 'lucide-react';

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
          <p className="text-muted-foreground text-lg mb-2">
            Complete all 3 submodules in Module 1 to unlock others
          </p>
          <p className="text-sm text-muted-foreground">
            Each module has: 📖 Teaching → ✏️ Practice → 🏆 Quiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
              <p className="text-muted-foreground mb-4 text-sm">{module.description}</p>
              
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Progress:</p>
                <div className="flex gap-2">
                  {module.submodules.map((sub) => (
                    <div
                      key={sub.id}
                      className={`flex-1 h-2 rounded-full ${
                        sub.completed ? 'bg-success' : 'bg-muted'
                      }`}
                      title={sub.title}
                    />
                  ))}
                </div>
              </div>

              {!module.locked && (
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    <Link to={`/module/${module.id}/teaching`}>
                      <Button
                        size="sm"
                        variant={module.submodules[0].completed ? "secondary" : "default"}
                        className="w-full text-xs"
                      >
                        <BookOpen size={14} className="mr-1" />
                        Learn
                      </Button>
                    </Link>
                    <Link to={`/module/${module.id}/mcq`}>
                      <Button
                        size="sm"
                        variant={module.submodules[1].completed ? "secondary" : "default"}
                        className="w-full text-xs"
                      >
                        <Brain size={14} className="mr-1" />
                        Practice
                      </Button>
                    </Link>
                    <Link to={`/module/${module.id}/quiz`}>
                      <Button
                        size="sm"
                        variant={module.submodules[2].completed ? "secondary" : "default"}
                        className="w-full text-xs"
                      >
                        <Trophy size={14} className="mr-1" />
                        Quiz
                      </Button>
                    </Link>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    +{module.points} pts
                  </p>
                </div>
              )}

              {module.locked && (
                <p className="text-xs text-center text-muted-foreground mt-4">
                  🔒 Complete Module 1 to unlock
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modules;
