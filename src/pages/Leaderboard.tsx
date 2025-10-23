import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { ArrowLeft, Trophy, Medal, Award } from 'lucide-react';

const Leaderboard = () => {
  const { progress } = useGame();

  // Mock leaderboard data (in real app, would fetch from backend)
  const leaderboardData = [
    { rank: 1, username: 'InsuranceExpert', points: 850, badges: 7 },
    { rank: 2, username: 'PolicyPro', points: 720, badges: 6 },
    { rank: 3, username: 'CoverageMaster', points: 680, badges: 5 },
    { rank: 4, username: progress.username, points: progress.points, badges: progress.badges.filter(b => b.earned).length },
    { rank: 5, username: 'RiskManager', points: 520, badges: 4 },
    { rank: 6, username: 'ClaimChampion', points: 480, badges: 4 },
    { rank: 7, username: 'PremiumPayer', points: 450, badges: 3 },
    { rank: 8, username: 'DeductibleDude', points: 380, badges: 3 },
  ].sort((a, b) => b.points - a.points).map((user, idx) => ({ ...user, rank: idx + 1 }));

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="text-secondary" size={24} />;
      case 2:
        return <Medal className="text-muted-foreground" size={24} />;
      case 3:
        return <Award className="text-accent" size={24} />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

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
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
          <p className="text-muted-foreground text-lg">
            Compete with other learners and climb to the top!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-primary p-4">
              <div className="flex items-center justify-between text-white font-semibold">
                <span className="w-16">Rank</span>
                <span className="flex-1">Player</span>
                <span className="w-24 text-center">Points</span>
                <span className="w-24 text-center">Badges</span>
              </div>
            </div>

            <div className="divide-y divide-border">
              {leaderboardData.map((user, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-4 transition-colors ${
                    user.username === progress.username
                      ? 'bg-primary/5 border-l-4 border-primary'
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <div className="w-16 flex items-center justify-center">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <div className="flex-1">
                    <span className="font-semibold">
                      {user.username}
                      {user.username === progress.username && (
                        <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                          You
                        </span>
                      )}
                    </span>
                  </div>
                  
                  <div className="w-24 text-center">
                    <span className="font-bold text-primary">{user.points}</span>
                  </div>
                  
                  <div className="w-24 text-center">
                    <span className="text-muted-foreground">{user.badges} 🏅</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Complete more modules to earn points and climb the leaderboard!
            </p>
            <Link to="/modules">
              <Button size="lg">
                Continue Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
