import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  front: string;
  back: string;
  emoji: string;
}

const flashcards: Card[] = [
  {
    front: 'Always compare multiple insurance quotes',
    back: 'Shopping around can save you up to 30% on premiums. Get at least 3 quotes before deciding!',
    emoji: '💰'
  },
  {
    front: 'Read the policy exclusions carefully',
    back: 'Knowing what\'s NOT covered is just as important as knowing what IS covered. Avoid surprises during claims.',
    emoji: '📋'
  },
  {
    front: 'Maintain a good credit score',
    back: 'Many insurers use credit scores to determine premiums. A better score can mean lower rates!',
    emoji: '⭐'
  },
  {
    front: 'Bundle policies for discounts',
    back: 'Combining auto, home, and life insurance with one company can save 15-25% on premiums.',
    emoji: '🎁'
  },
  {
    front: 'Review your coverage annually',
    back: 'Life changes! Review your insurance yearly to ensure you have adequate coverage for your current situation.',
    emoji: '📅'
  },
  {
    front: 'Higher deductibles = Lower premiums',
    back: 'If you can afford a higher out-of-pocket cost, choosing a higher deductible reduces your monthly premium.',
    emoji: '📊'
  },
  {
    front: 'Document everything for claims',
    back: 'Take photos, keep receipts, and maintain records. Good documentation speeds up claim processing.',
    emoji: '📸'
  },
  {
    front: 'Ask about available discounts',
    back: 'Many insurers offer discounts for safety features, good driving, non-smoking, and more. Always ask!',
    emoji: '🎯'
  },
];

const Flashcards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false);
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const card = flashcards[currentCard];

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
          <h1 className="text-4xl font-bold mb-4">Insurance Tips & Facts</h1>
          <p className="text-muted-foreground text-lg">
            Tap cards to reveal valuable insurance insights
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card Counter */}
          <div className="text-center mb-6">
            <span className="text-lg font-semibold text-muted-foreground">
              Card {currentCard + 1} of {flashcards.length}
            </span>
          </div>

          {/* Flashcard */}
          <div
            onClick={() => setFlipped(!flipped)}
            className="relative h-96 cursor-pointer mb-8"
            style={{ perspective: '1000px' }}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-gpu ${
                flipped ? 'rotate-y-180' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of card */}
              <div
                className="absolute w-full h-full backface-hidden bg-gradient-primary rounded-2xl shadow-glow p-8 flex flex-col items-center justify-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-8xl mb-6">{card.emoji}</div>
                <h2 className="text-2xl font-bold text-white text-center">
                  {card.front}
                </h2>
                <p className="text-white/80 mt-4 text-sm">Tap to reveal more</p>
              </div>

              {/* Back of card */}
              <div
                className="absolute w-full h-full backface-hidden bg-gradient-success rounded-2xl shadow-success p-8 flex flex-col items-center justify-center rotate-y-180"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="text-6xl mb-6">💡</div>
                <p className="text-xl text-white text-center leading-relaxed">
                  {card.back}
                </p>
                <p className="text-white/80 mt-4 text-sm">Tap to flip back</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={prevCard}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <ChevronLeft size={20} />
              Previous
            </Button>
            
            <Button
              onClick={nextCard}
              size="lg"
              className="gap-2"
            >
              Next
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {flashcards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentCard(idx);
                  setFlipped(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentCard
                    ? 'bg-primary w-8'
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
