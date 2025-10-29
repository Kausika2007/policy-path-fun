import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, Shuffle, Trophy, Star, Zap } from "lucide-react";
import FlashCard from "@/components/FlashCard";
import ProgressBar from "@/components/ProgressBar";
import Confetti from "@/components/Confetti";
import { flashcards } from "@/data/flashcards";
import { toast } from "sonner";

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState(flashcards);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasCompletedOnce, setHasCompletedOnce] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [points, setPoints] = useState(0);
  const [cardsViewed, setCardsViewed] = useState<Set<number>>(new Set());

  const currentCard = cards[currentIndex];

  useEffect(() => {
    if (currentIndex === cards.length - 1 && !hasCompletedOnce) {
      setShowConfetti(true);
      setHasCompletedOnce(true);
      toast.success("🎉 Amazing! You've completed all flashcards!", {
        description: "You're on your way to becoming an Insurance Pro!",
      });
      setTimeout(() => setShowConfetti(false), 4000);
    }
  }, [currentIndex, cards.length, hasCompletedOnce]);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setSlideDirection('left');
      playTapSound();
      
      // Award points for viewing new card
      if (!cardsViewed.has(cards[currentIndex + 1].id)) {
        setPoints(prev => prev + 10);
        setCardsViewed(prev => new Set([...prev, cards[currentIndex + 1].id]));
      }
      
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setSlideDirection(null);
      }, 50);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSlideDirection('right');
      playTapSound();
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setSlideDirection(null);
      }, 50);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setHasCompletedOnce(false);
    playTapSound();
    toast.info("Cards shuffled! 🔀", {
      description: "Ready for a new learning order",
    });
  };

  const handleToggleFavorite = () => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(currentCard.id)) {
      newFavorites.delete(currentCard.id);
      toast.info("Removed from favorites");
    } else {
      newFavorites.add(currentCard.id);
      setPoints(prev => prev + 5);
      toast.success("Added to favorites! +5 points ⭐");
    }
    setFavorites(newFavorites);
  };

  const playTapSound = () => {
    const audio = new Audio();
    audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDGH0fPTgjMGHm7A7+OZUQ0NYKvl8KthGwY4kdfy';
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const favoriteCount = favorites.size;
  const completionPercentage = Math.round(((currentIndex + 1) / cards.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/games">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to Games
          </Button>
        </Link>

        {showConfetti && <Confetti />}
        
        {/* Header */}
        <div className="w-full max-w-2xl mx-auto mb-8 text-center space-y-2 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Insurance Flashcards
          </h1>
          <p className="text-muted-foreground text-lg">
            Master insurance concepts with interactive learning
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-warning/30 shadow-lg hover:scale-105 transition-transform animate-bounce-in">
              <Star className="w-5 h-5 text-warning fill-current animate-pulse" />
              <span className="font-semibold text-warning">{favoriteCount} Favorites</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-success/30 shadow-lg hover:scale-105 transition-transform animate-bounce-in">
              <Trophy className="w-5 h-5 text-success animate-bounce" />
              <span className="font-semibold text-success">{completionPercentage}% Complete</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-primary/30 shadow-lg hover:scale-105 transition-transform animate-bounce-in">
              <Zap className="w-5 h-5 text-primary fill-current animate-pulse" />
              <span className="font-semibold text-primary">{points} Points</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 w-full max-w-2xl mx-auto animate-slide-up">
          <ProgressBar current={currentIndex + 1} total={cards.length} />
        </div>

        {/* Flashcard */}
        <div className="mb-8 w-full card-container">
          <div
            key={currentCard.id}
            className={slideDirection === 'left' ? 'card-slide-enter-right' : slideDirection === 'right' ? 'card-slide-enter-left' : ''}
          >
            <FlashCard
              card={currentCard}
              isFavorite={favorites.has(currentCard.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 justify-center items-center animate-slide-up max-w-2xl mx-auto">
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            size="lg"
            variant="outline"
            className="gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>

          <Button
            onClick={handleShuffle}
            size="lg"
            variant="secondary"
            className="gap-2"
          >
            <Shuffle className="w-5 h-5" />
            Shuffle
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            size="lg"
            className="gap-2 bg-gradient-primary border-0"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center text-sm text-muted-foreground max-w-md mx-auto">
          <p>💡 Tap the card to flip • Use navigation buttons to explore</p>
          <p className="mt-1">❤️ Mark favorites to review later</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
