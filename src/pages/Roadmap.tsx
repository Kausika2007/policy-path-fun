import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Dices } from 'lucide-react';
import { toast } from 'sonner';
import { useGame } from '@/contexts/GameContext';

interface BoxInfo {
  type: 'normal' | 'snake' | 'ladder';
  message?: string;
  detail?: string;
  to?: number;
}

const Roadmap = () => {
  const { earnBadge, progress } = useGame();
  const [position, setPosition] = useState(0);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [rolling, setRolling] = useState(false);

  // Snake and Ladder positions (10x10 = 100 squares)
  const specialBoxes: Record<number, BoxInfo> = {
    12: {
      type: 'ladder',
      message: '✅ Reading Policy Terms',
      detail: 'Always read and understand policy terms before signing. This helps avoid surprises later!',
      to: 28
    },
    25: {
      type: 'snake',
      message: '❌ Not Disclosing Medical History',
      detail: 'Hiding medical information can lead to claim rejection. Always be honest in your applications.',
      to: 9
    },
    34: {
      type: 'ladder',
      message: '✅ Comparing Multiple Quotes',
      detail: 'Shopping around and comparing quotes helps you get the best coverage at the best price!',
      to: 52
    },
    47: {
      type: 'snake',
      message: '❌ Skipping Premium Payments',
      detail: 'Missing premium payments can cause policy lapse. Set up auto-pay to stay covered!',
      to: 21
    },
    58: {
      type: 'ladder',
      message: '✅ Regular Policy Review',
      detail: 'Reviewing your policy annually ensures your coverage matches your current needs.',
      to: 77
    },
    71: {
      type: 'snake',
      message: '❌ Buying Insufficient Coverage',
      detail: 'Inadequate coverage can leave you exposed. Calculate your actual needs before buying.',
      to: 49
    },
    83: {
      type: 'ladder',
      message: '✅ Maintaining Good Credit',
      detail: 'A good credit score can significantly reduce your insurance premiums!',
      to: 95
    },
    92: {
      type: 'snake',
      message: '❌ Not Filing Claims Properly',
      detail: 'Poor claim documentation can delay or deny your claim. Always keep proper records!',
      to: 73
    },
  };

  const rollDice = () => {
    if (rolling) return;
    
    setRolling(true);
    let rolls = 0;
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      rolls++;
      if (rolls > 10) {
        clearInterval(rollInterval);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(finalValue);
        
        if (!gameStarted && finalValue === 1) {
          setGameStarted(true);
          toast.success('Game Started! 🎮');
        } else if (!gameStarted) {
          toast.error(`You rolled ${finalValue}. Need a 1 to start!`);
        } else {
          movePlayer(finalValue);
        }
        
        setRolling(false);
      }
    }, 100);
  };

  const movePlayer = (steps: number) => {
    let newPos = position + steps;
    
    if (newPos > 100) {
      toast.info('Exact number needed to finish!');
      return;
    }

    setPosition(newPos);

    setTimeout(() => {
      const box = specialBoxes[newPos];
      
      if (box) {
        if (box.type === 'snake') {
          toast.error(box.message, {
            description: box.detail,
          });
          setTimeout(() => {
            setPosition(box.to!);
          }, 2000);
        } else if (box.type === 'ladder') {
          toast.success(box.message, {
            description: box.detail,
          });
          setTimeout(() => {
            setPosition(box.to!);
          }, 2000);
        }
      }

      if (newPos === 100) {
        toast.success('🎉 Congratulations!', {
          description: 'Now you are ready to step into insurance!',
        });
        const badge = progress.badges.find(b => b.id === 'roadmap-complete');
        if (badge) earnBadge(badge);
      }
    }, 500);
  };

  const getBoxPosition = (num: number) => {
    const row = Math.floor((num - 1) / 10);
    const col = (num - 1) % 10;
    const reverseRow = 9 - row;
    const reverseCol = row % 2 === 0 ? col : 9 - col;
    return { row: reverseRow, col: reverseCol };
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

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Insurance Roadmap</h1>
          <p className="text-muted-foreground text-lg mb-2">
            Navigate through your insurance journey
          </p>
          <p className="text-sm text-muted-foreground">
            🪜 Ladders = Good Practices | 🐍 Snakes = Mistakes to Avoid
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Game Board */}
          <div className="bg-card rounded-2xl p-4 shadow-card mb-8">
            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 100 }, (_, i) => {
                const num = 100 - i;
                const { row, col } = getBoxPosition(num);
                const box = specialBoxes[num];
                const isPlayer = position === num;

                return (
                  <div
                    key={num}
                    className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center text-xs font-semibold transition-all ${
                      isPlayer
                        ? 'bg-primary text-primary-foreground border-primary scale-110 animate-pulse-glow z-10'
                        : box?.type === 'ladder'
                        ? 'bg-success/20 border-success'
                        : box?.type === 'snake'
                        ? 'bg-destructive/20 border-destructive'
                        : num === 100
                        ? 'bg-gradient-reward border-secondary'
                        : 'bg-muted border-border'
                    }`}
                  >
                    {isPlayer && <div className="text-2xl">🎯</div>}
                    {box?.type === 'ladder' && !isPlayer && '🪜'}
                    {box?.type === 'snake' && !isPlayer && '🐍'}
                    {num === 100 && !isPlayer && '🏆'}
                    <span className={isPlayer ? 'text-xs' : ''}>{num}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Game Controls */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-6xl mb-2 animate-bounce-in">
                  {diceValue ? `🎲 ${diceValue}` : '🎲'}
                </div>
                <p className="text-sm text-muted-foreground">
                  {!gameStarted ? 'Roll a 1 to start' : 'Current roll'}
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-2">📍</div>
                <p className="text-2xl font-bold">{position}</p>
                <p className="text-sm text-muted-foreground">Your position</p>
              </div>
            </div>

            <Button
              onClick={rollDice}
              disabled={rolling || position === 100}
              size="lg"
              className="text-xl px-12 py-6"
            >
              <Dices className="mr-2" size={24} />
              {rolling ? 'Rolling...' : position === 100 ? 'Game Complete!' : 'Roll Dice'}
            </Button>

            {position === 100 && (
              <div className="text-center animate-celebrate">
                <p className="text-2xl font-bold text-primary mb-2">
                  🎉 Congratulations! 🎉
                </p>
                <p className="text-lg text-muted-foreground">
                  Now you are ready to step into insurance!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
