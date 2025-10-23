import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Games = () => {
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
          <h1 className="text-4xl font-bold mb-4">Interactive Games</h1>
          <p className="text-muted-foreground text-lg">
            Learn insurance terms through fun, interactive games
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link to="/spin-wheel">
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all hover:scale-105 border-2 border-primary">
              <div className="text-7xl mb-4 text-center animate-float">🎡</div>
              <h2 className="text-2xl font-bold text-center mb-3">Spin the Wheel</h2>
              <p className="text-muted-foreground text-center">
                Spin to learn insurance glossary terms and their meanings
              </p>
            </div>
          </Link>

          <Link to="/flashcards">
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all hover:scale-105 border-2 border-secondary">
              <div className="text-7xl mb-4 text-center animate-float" style={{ animationDelay: '0.5s' }}>🃏</div>
              <h2 className="text-2xl font-bold text-center mb-3">Flashcards</h2>
              <p className="text-muted-foreground text-center">
                Flip through important insurance tips and unknown facts
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
