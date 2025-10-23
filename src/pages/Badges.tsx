import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { ArrowLeft, Lock } from 'lucide-react';

const Badges = () => {
  const { progress } = useGame();

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
          <h1 className="text-4xl font-bold mb-4">Your Badges</h1>
          <p className="text-muted-foreground text-lg">
            Collect all badges by completing modules and challenges
          </p>
          <div className="mt-4">
            <span className="text-2xl font-bold text-primary">
              {progress.badges.filter(b => b.earned).length} / {progress.badges.length}
            </span>
            <span className="text-muted-foreground ml-2">badges earned</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {progress.badges.map((badge) => (
            <div
              key={badge.id}
              className={`relative bg-card rounded-2xl p-8 shadow-card border-2 transition-all ${
                badge.earned
                  ? 'border-secondary shadow-glow animate-pulse-glow'
                  : 'border-border opacity-60'
              }`}
            >
              {!badge.earned && (
                <div className="absolute top-4 right-4">
                  <Lock className="text-muted-foreground" size={20} />
                </div>
              )}

              <div className={`text-6xl mb-4 text-center ${badge.earned ? 'animate-bounce-in' : 'grayscale'}`}>
                {badge.icon}
              </div>
              
              <h3 className="text-xl font-bold text-center mb-2">{badge.name}</h3>
              <p className="text-muted-foreground text-center text-sm">{badge.description}</p>
              
              {badge.earned && (
                <div className="mt-4 text-center">
                  <span className="inline-block bg-gradient-reward text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Unlocked! ✨
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badges;
