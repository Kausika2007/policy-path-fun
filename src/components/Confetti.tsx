import { useEffect, useState } from "react";

interface ConfettiProps {
  trigger: boolean;
}

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
}

const colors = [
  'hsl(217, 91%, 60%)',  // primary
  'hsl(45, 93%, 58%)',   // accent
  'hsl(142, 76%, 45%)',  // success
  'hsl(280, 80%, 60%)',  // purple
  'hsl(0, 84%, 60%)',    // red
];

export const Confetti = ({ trigger }: ConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (trigger) {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 50; i++) {
        newPieces.push({
          id: Date.now() + i,
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 8 + Math.random() * 12,
        });
      }
      setPieces(newPieces);

      // Clear after animation
      setTimeout(() => setPieces([]), 3500);
    }
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            top: '-10%',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
};
