import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DefinitionModalProps {
  term: string;
  definition: string;
  points: number;
  isOpen: boolean;
  onClose: () => void;
}

export const DefinitionModal = ({ term, definition, points, isOpen, onClose }: DefinitionModalProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 50);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div
        className={`bg-card border-2 border-primary rounded-2xl shadow-2xl max-w-lg w-full p-8 transform transition-all duration-500 ${
          show ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
        style={{
          boxShadow: '0 0 60px hsl(var(--primary) / 0.6), 0 20px 80px rgba(0,0,0,0.4)',
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-primary mb-2 animate-bounce-in">
              {term}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-accent text-2xl font-bold">+{points}</span>
              <span className="text-muted-foreground">points!</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-primary/20 hover:text-primary"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-6 border border-primary/20">
            <p className="text-lg text-foreground leading-relaxed">{definition}</p>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground font-bold text-lg py-6 rounded-xl shadow-lg"
            style={{ boxShadow: '0 4px 20px hsl(var(--primary) / 0.5)' }}
          >
            Got it! Spin Again
          </Button>
        </div>
      </div>
    </div>
  );
};
