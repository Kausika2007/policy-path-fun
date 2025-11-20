import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { Trophy, Star, BookOpen, Target } from 'lucide-react';

const Home = () => {
  const { progress } = useGame();

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-4xl">🛡️</div>
            <h1 className="text-2xl font-bold text-white">SAFESURE</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="text-secondary" size={20} />
              <span className="text-white font-semibold">{progress.points} pts</span>
            </div>
            <Link to="/leaderboard">
              <Button variant="secondary" size="sm">
                <Trophy size={16} className="mr-2" />
                Leaderboard
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <div className="text-8xl mb-4">🎮📚🏆</div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Learn Insurance
            <br />
            <span className="text-secondary">Through Gaming</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Learn everything about insurance through interactive games, quizzes, and challenges.
            Earn badges, compete with others, and become an insurance expert!
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link to="/modules">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                <BookOpen className="mr-2" />
                Start Learning
              </Button>
            </Link>
            <Link to="/roadmap">
              <Button size="lg" variant="secondary">
                <Target className="mr-2" />
                Insurance Roadmap
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <Link to="/modules" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-glow">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-white mb-2">5 Learning Modules</h3>
                <p className="text-white/80">Progressive learning path with quizzes and rewards</p>
              </div>
            </Link>

            <Link to="/games" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-glow">
                <div className="text-5xl mb-4">🎡</div>
                <h3 className="text-xl font-bold text-white mb-2">Interactive Games</h3>
                <p className="text-white/80">Learning through mindblowing games</p>
              </div>
            </Link>

            <Link to="/badges" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-glow">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-white mb-2">Earn Rewards</h3>
                <p className="text-white/80">Collect badges and climb the leaderboard</p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 text-6xl animate-float opacity-20">💰</div>
      <div className="fixed bottom-20 right-10 text-6xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🏥</div>
      <div className="fixed top-1/2 right-20 text-6xl animate-float opacity-20" style={{ animationDelay: '2s' }}>🚗</div>
    </div>
  );
};

export default Home;
