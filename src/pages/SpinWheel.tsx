import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

interface Term {
  term: string;
  definition: string;
}

const insuranceTerms: Term[] = [
  { term: 'Premium', definition: 'The amount you pay regularly to maintain insurance coverage' },
  { term: 'Deductible', definition: 'The amount you pay before insurance covers the rest' },
  { term: 'Claim', definition: 'A request for payment under an insurance policy' },
  { term: 'Underwriting', definition: 'The process of evaluating risk and determining coverage' },
  { term: 'Beneficiary', definition: 'The person who receives insurance benefits' },
  { term: 'Coverage', definition: 'The protection provided by an insurance policy' },
  { term: 'Policy', definition: 'A contract between you and the insurance company' },
  { term: 'Co-pay', definition: 'A fixed amount you pay for covered services' },
];

const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [showDefinition, setShowDefinition] = useState(false);

  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    setShowDefinition(false);
    toast.info('Spinning... 🎡');

    setTimeout(() => {
      const randomTerm = insuranceTerms[Math.floor(Math.random() * insuranceTerms.length)];
      setSelectedTerm(randomTerm);
      setSpinning(false);
      toast.success('Click the term to see its meaning!');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/games">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to Games
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Spin to Learn</h1>
          <p className="text-muted-foreground text-lg">
            Spin the wheel to discover insurance terms and their meanings
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Wheel */}
          <div className="relative mb-12">
            <div className={`w-80 h-80 mx-auto rounded-full bg-gradient-primary shadow-glow border-8 border-white ${
              spinning ? 'animate-spin-wheel' : ''
            }`}>
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🎡</div>
                  <div className="text-white font-bold text-xl">
                    {spinning ? 'Spinning...' : 'Tap to Spin!'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
              <div className="text-5xl">👇</div>
            </div>
          </div>

          {/* Spin Button */}
          <div className="text-center mb-8">
            <Button
              size="lg"
              onClick={spinWheel}
              disabled={spinning}
              className="text-xl px-12 py-6"
            >
              {spinning ? 'Spinning...' : 'Spin the Wheel!'}
            </Button>
          </div>

          {/* Selected Term Card */}
          {selectedTerm && !spinning && (
            <div
              onClick={() => setShowDefinition(!showDefinition)}
              className="bg-card rounded-2xl p-8 shadow-card border-2 border-secondary cursor-pointer hover:shadow-glow transition-all transform hover:scale-105 animate-bounce-in"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">📖</div>
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  {selectedTerm.term}
                </h2>
                
                {showDefinition ? (
                  <div className="animate-bounce-in">
                    <p className="text-lg text-muted-foreground">
                      {selectedTerm.definition}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Click to hide definition
                    </p>
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    Click to reveal the definition
                  </p>
                )}
              </div>
            </div>
          )}

          {/* All Terms Reference */}
          <div className="mt-12 bg-muted/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-center">All Terms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {insuranceTerms.map((term, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-3 text-center text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedTerm(term);
                    setShowDefinition(true);
                  }}
                >
                  {term.term}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinWheel;
