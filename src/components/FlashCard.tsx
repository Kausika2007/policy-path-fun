import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Car, Home, Clock, Users, Shield, FileText, Flame, IndianRupee, Ambulance, Briefcase, Hospital, Gift, UserX, Bike, AlertTriangle, Percent, Store, Plane, XCircle, Hourglass, UserCheck, ShieldCheck, Sparkles } from "lucide-react";
import { FlashcardData } from "@/data/flashcards";
import { cn } from "@/lib/utils";

// Import images
import mythImage from "@/assets/myth-card.png";
import scenarioImage from "@/assets/scenario-card.png";
import termImage from "@/assets/term-card.png";
import storyImage from "@/assets/story-card.png";

const iconMap = {
  "heart": Heart,
  "heart-pulse": Activity,
  "activity": Activity,
  "car": Car,
  "home": Home,
  "clock": Clock,
  "users": Users,
  "shield": Shield,
  "shield-check": ShieldCheck,
  "file-text": FileText,
  "flame": Flame,
  "indian-rupee": IndianRupee,
  "ambulance": Ambulance,
  "briefcase": Briefcase,
  "hospital": Hospital,
  "gift": Gift,
  "user-x": UserX,
  "bike": Bike,
  "alert-triangle": AlertTriangle,
  "percent": Percent,
  "store": Store,
  "plane": Plane,
  "x-circle": XCircle,
  "hourglass": Hourglass,
  "user-check": UserCheck,
  "sparkles": Sparkles
};

const imageMap = {
  "myth": mythImage,
  "scenario": scenarioImage,
  "term": termImage,
  "story": storyImage
};

const typeColors = {
  "myth": "from-violet-500 via-purple-500 to-fuchsia-500",
  "scenario": "from-cyan-500 via-blue-500 to-indigo-500",
  "term": "from-amber-500 via-orange-500 to-red-500",
  "story": "from-emerald-500 via-teal-500 to-green-500"
};

const typeBadgeColors = {
  "myth": "bg-violet-500/20 text-violet-200 border-violet-400/50",
  "scenario": "bg-cyan-500/20 text-cyan-200 border-cyan-400/50",
  "term": "bg-amber-500/20 text-amber-200 border-amber-400/50",
  "story": "bg-emerald-500/20 text-emerald-200 border-emerald-400/50"
};

interface FlashCardProps {
  card: FlashcardData;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const FlashCard = ({ card, isFavorite, onToggleFavorite }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[card.icon as keyof typeof iconMap] || Sparkles;

  const handleFlip = () => {
    // Play flip sound
    const audio = new Audio();
    audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDGH0fPTgjMGHm7A7+OZUQ0NYKvl8KthGwY4kdfy';
    audio.volume = 0.3;
    audio.play().catch(() => {});

    setIsFlipped(!isFlipped);
  };

  const cardImage = imageMap[card.type];
  const gradientClass = `bg-gradient-to-br ${typeColors[card.type]}`;
  const badgeClass = typeBadgeColors[card.type];

  return (
    <div className="flip-card w-full max-w-2xl mx-auto">
      <div className={cn("flip-card-inner relative w-full h-[550px]", isFlipped && "flip-card-flipped")}>
        {/* Front of card */}
        <Card 
          className="flip-card-front absolute w-full h-full cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-500 overflow-hidden group"
          onClick={handleFlip}
        >
          <div className={cn("w-full h-full rounded-lg p-8 flex flex-col items-center justify-center text-center relative overflow-hidden", gradientClass)}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 transition-transform hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
            >
              <Heart className={cn("w-6 h-6 transition-all", isFavorite && "fill-current scale-110")} />
            </Button>

            <Badge className={cn("absolute top-4 left-4 z-10 border animate-pulse", badgeClass)}>
              {card.type.toUpperCase()}
            </Badge>
            
            {/* Card type image */}
            <div className="mb-4 relative">
              <div className="absolute inset-0 bg-white/30 blur-xl rounded-full animate-pulse"></div>
              <img 
                src={cardImage} 
                alt={card.type}
                className="w-32 h-24 object-cover rounded-lg relative z-10 shadow-lg animate-float"
              />
            </div>

            <div className="mb-6 p-6 bg-white/20 rounded-full backdrop-blur-sm animate-bounce-in shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-20 h-20 text-white drop-shadow-lg" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4 animate-slide-up drop-shadow-lg">
              {card.front}
            </h2>
            
            <p className="text-white/90 text-sm uppercase tracking-wider font-semibold animate-pulse">
              Tap to reveal answer ✨
            </p>

            {/* Decorative elements */}
            <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-white/20 rounded-full animate-ping"></div>
            <div className="absolute top-20 right-8 w-8 h-8 border-4 border-white/20 rounded-full animate-bounce"></div>
          </div>
        </Card>

        {/* Back of card */}
        <Card 
          className="flip-card-back absolute w-full h-full cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-500 overflow-hidden"
          onClick={handleFlip}
        >
          <div className="w-full h-full rounded-lg p-8 flex flex-col bg-gradient-to-br from-background via-card to-background relative overflow-y-auto">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10 transition-transform hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
            >
              <Heart className={cn("w-6 h-6 transition-all", isFavorite && "fill-current text-destructive scale-110")} />
            </Button>

            <Badge className={cn("absolute top-4 left-4 z-10 border", badgeClass)}>
              {card.type.toUpperCase()}
            </Badge>

            <div className="flex-1 flex flex-col items-center justify-center text-center mt-8">
              <div className={cn("mb-6 p-4 rounded-full animate-bounce-in shadow-lg", `bg-gradient-to-br ${typeColors[card.type]}`)}>
                <Icon className="w-16 h-16 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-slide-up">
                {card.back.title}
              </h3>

              <p className="text-lg leading-relaxed text-foreground max-w-xl mb-6 animate-fade-in">
                {card.back.content}
              </p>

              {card.back.additionalInfo && card.back.additionalInfo.length > 0 && (
                <div className="w-full max-w-xl space-y-3 mt-4">
                  {card.back.additionalInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20 text-left animate-slide-up hover:bg-accent/20 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/90">{info}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold mt-4 text-center animate-pulse">
              Tap to flip back 🔄
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FlashCard;