import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface WheelSegment {
  id: string;
  term: string;
  definition: string;
  color: string;
}

interface SpinningWheelProps {
  segments: WheelSegment[];
  onLand: (segment: WheelSegment) => void;
  isSpinning: boolean;
}

export const SpinningWheel = ({ segments, onLand, isSpinning }: SpinningWheelProps) => {
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const segmentAngle = 360 / segments.length;

  useEffect(() => {
    if (isSpinning) {
      // Calculate random landing position
      const spins = 5 + Math.random() * 3; // 5-8 full rotations
      const randomAngle = Math.random() * 360;
      const totalRotation = rotation + (spins * 360) + randomAngle;
      
      setRotation(totalRotation);

      // Determine which segment we landed on
      setTimeout(() => {
        const normalizedRotation = totalRotation % 360;
        const adjustedRotation = (360 - normalizedRotation + 90) % 360; // Adjust for pointer at top
        const segmentIndex = Math.floor(adjustedRotation / segmentAngle) % segments.length;
        onLand(segments[segmentIndex]);
      }, 4000); // Match animation duration
    }
  }, [isSpinning]);

  return (
    <div className="relative w-[500px] h-[500px] max-w-full">
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-accent drop-shadow-lg" 
             style={{ filter: 'drop-shadow(0 4px 12px hsl(var(--accent) / 0.5))' }} />
      </div>

      {/* Wheel */}
      <div
        ref={wheelRef}
        className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-accent"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
          boxShadow: '0 0 60px hsl(var(--accent) / 0.6), inset 0 0 40px rgba(0,0,0,0.3)',
        }}
      >
        {segments.map((segment, index) => {
          const angle = segmentAngle * index;
          
          return (
            <div
              key={segment.id}
              className="absolute w-full h-full"
              style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: 'center',
              }}
            >
              <div
                className={cn(
                  "absolute top-0 left-1/2 w-0 h-0 origin-bottom",
                  segment.color
                )}
                style={{
                  borderLeft: '250px solid transparent',
                  borderRight: '250px solid transparent',
                  borderTop: `250px solid currentColor`,
                  transform: `translateX(-50%) rotate(${segmentAngle / 2}deg)`,
                  clipPath: `polygon(50% 0%, ${50 + Math.tan((segmentAngle / 2) * Math.PI / 180) * 50}% 100%, ${50 - Math.tan((segmentAngle / 2) * Math.PI / 180) * 50}% 100%)`,
                }}
              />
            </div>
          );
        })}

        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-accent border-4 border-background shadow-lg z-10 flex items-center justify-center">
          <div className="text-2xl font-bold text-accent-foreground">SPIN</div>
        </div>
      </div>

      {/* Outer glow ring */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: isSpinning 
            ? '0 0 80px hsl(var(--primary) / 0.8), 0 0 120px hsl(var(--accent) / 0.6)' 
            : '0 0 40px hsl(var(--primary) / 0.4)',
          transition: 'box-shadow 0.3s ease',
        }}
      />
    </div>
  );
};
