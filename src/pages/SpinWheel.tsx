import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy, Sparkles } from 'lucide-react';
import { SpinningWheel } from '@/components/SpinningWheel';
import { DefinitionModal } from '@/components/DefinitionModal';
import Confetti from '@/components/Confetti';
import { soundEffects } from '@/utils/soundEffects';

interface Term {
  id: string;
  term: string;
  definition: string;
  color: string;
}

const allInsuranceTerms: Term[] = [
  {
    id: "1",
    term: "Premium",
    definition: "The amount you pay for your insurance policy, typically monthly or annually. Think of it as your membership fee for coverage protection.",
    color: "text-[hsl(217,91%,60%)]",
  },
  {
    id: "2",
    term: "Deductible",
    definition: "The amount you must pay out-of-pocket before your insurance coverage kicks in. Higher deductibles usually mean lower premiums.",
    color: "text-[hsl(280,80%,60%)]",
  },
  {
    id: "3",
    term: "Coverage",
    definition: "The scope of protection provided by your insurance policy. This defines what risks and losses are included in your policy.",
    color: "text-[hsl(142,76%,50%)]",
  },
  {
    id: "4",
    term: "Claim",
    definition: "A formal request to your insurance company for payment of a covered loss or policy event. This initiates the reimbursement process.",
    color: "text-[hsl(45,93%,58%)]",
  },
  {
    id: "5",
    term: "Policy",
    definition: "The written contract between you and your insurance company that details the terms, conditions, and coverage of your insurance agreement.",
    color: "text-[hsl(0,84%,60%)]",
  },
  {
    id: "6",
    term: "Liability",
    definition: "Legal responsibility for damages or injuries you cause to others. Liability coverage protects you if you're found legally responsible.",
    color: "text-[hsl(190,80%,50%)]",
  },
  {
    id: "7",
    term: "Copay",
    definition: "A fixed amount you pay for a covered healthcare service, typically due at the time of service. This is separate from your deductible.",
    color: "text-[hsl(330,80%,60%)]",
  },
  {
    id: "8",
    term: "Beneficiary",
    definition: "The person or entity you designate to receive benefits from your policy, commonly used in life insurance and retirement accounts.",
    color: "text-[hsl(35,85%,55%)]",
  },
  {
    id: "9",
    term: "Underwriting",
    definition: "The process insurers use to evaluate risk and determine premiums. They assess factors like health, age, and lifestyle.",
    color: "text-[hsl(260,70%,60%)]",
  },
  {
    id: "10",
    term: "Risk Assessment",
    definition: "The evaluation process of determining the likelihood and potential severity of a loss. This helps insurers price policies appropriately.",
    color: "text-[hsl(150,80%,45%)]",
  },
  {
    id: "11",
    term: "Exclusion",
    definition: "Specific conditions or circumstances that are not covered by your insurance policy. It's crucial to understand what's excluded from your coverage.",
    color: "text-[hsl(15,90%,60%)]",
  },
  {
    id: "12",
    term: "Rider",
    definition: "An amendment or addition to an insurance policy that provides additional coverage or modifies the original policy terms.",
    color: "text-[hsl(200,75%,55%)]",
  },
];

// Shuffle array function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get random 12 terms from the full list
const getRandomTerms = () => shuffleArray(allInsuranceTerms).slice(0, 12);

const SpinWheel = () => {
  const [score, setScore] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentTerm, setCurrentTerm] = useState<(Term & { points?: number }) | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [spinsCount, setSpinsCount] = useState(0);
  const [insuranceTerms, setInsuranceTerms] = useState(() => getRandomTerms());

  const handleSpin = () => {
    if (isSpinning) return;
    
    // Generate new random terms for next spin
    setInsuranceTerms(getRandomTerms());
    
    soundEffects.playButtonClick();
    soundEffects.playSpinSound();
    setIsSpinning(true);
    setSpinsCount(prev => prev + 1);
  };

  const handleLand = (segment: Term) => {
    setIsSpinning(false);
    
    // Calculate points (random 10-50)
    const points = Math.floor(Math.random() * 41) + 10;
    setScore(prev => prev + points);
    
    // Play sounds
    soundEffects.playLandSound();
    setTimeout(() => {
      soundEffects.playPointsSound();
      soundEffects.playCelebrationSound();
    }, 300);
    
    // Show effects
    setCurrentTerm({ ...segment, points });
    setShowModal(true);
    setShowConfetti(true);
    
    setTimeout(() => setShowConfetti(false), 100);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentTerm(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[hsl(45,93%,58%)]/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {showConfetti && <Confetti />}

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link to="/games">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to Games
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 space-y-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="w-8 h-8 text-[hsl(45,93%,58%)] animate-float" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-[hsl(45,93%,58%)] to-primary bg-clip-text text-transparent">
                Insurance Buzzword Wheel
              </h1>
              <Sparkles className="w-8 h-8 text-[hsl(45,93%,58%)] animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
            <p className="text-xl text-muted-foreground">Spin to learn! Every term earns you points!</p>
          </div>

          {/* Score Display */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-card border-2 border-primary rounded-2xl px-8 py-4 shadow-glow">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-[hsl(45,93%,58%)]" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Score</p>
                  <p className="text-4xl font-bold text-primary">{score}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border-2 border-[hsl(45,93%,58%)] rounded-2xl px-8 py-4 shadow-xl" style={{ boxShadow: '0 0 30px hsl(45 93% 58% / 0.3)' }}>
              <div>
                <p className="text-sm text-muted-foreground">Spins</p>
                <p className="text-4xl font-bold text-[hsl(45,93%,58%)]">{spinsCount}</p>
              </div>
            </div>
          </div>

          {/* Wheel */}
          <div className="flex flex-col items-center gap-8">
            <SpinningWheel
              segments={insuranceTerms}
              onLand={handleLand}
              isSpinning={isSpinning}
            />

            {/* Spin Button */}
            <Button
              onClick={handleSpin}
              disabled={isSpinning}
              size="lg"
              className="relative px-12 py-8 text-2xl font-bold rounded-2xl bg-gradient-to-r from-[hsl(45,93%,58%)] via-[hsl(45,93%,68%)] to-[hsl(45,93%,58%)] text-[hsl(220,25%,10%)] hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
              style={{
                boxShadow: isSpinning 
                  ? '0 0 60px hsl(45 93% 58% / 0.8)' 
                  : '0 10px 40px hsl(45 93% 58% / 0.5)',
              }}
            >
              {isSpinning ? (
                <span className="flex items-center gap-3">
                  <span className="animate-spin">🎰</span>
                  SPINNING...
                </span>
              ) : (
                <span className="flex items-center gap-3">
                  🎯 SPIN THE WHEEL!
                </span>
              )}
            </Button>

            {/* Instructions */}
            <div className="text-center text-muted-foreground max-w-md">
              <p>Click the button to spin! Land on different insurance terms to learn their meanings and earn points. 🎉</p>
            </div>
          </div>

          {/* All Terms Reference */}
          <div className="mt-12 bg-muted/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-center">All Insurance Terms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {allInsuranceTerms.map((term) => (
                <div
                  key={term.id}
                  className="bg-card rounded-lg p-3 text-center text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  onClick={() => {
                    setCurrentTerm({ ...term, points: 0 });
                    setShowModal(true);
                  }}
                >
                  {term.term}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {currentTerm && (
        <DefinitionModal
          term={currentTerm.term}
          definition={currentTerm.definition}
          points={currentTerm.points || 0}
          isOpen={showModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SpinWheel;
