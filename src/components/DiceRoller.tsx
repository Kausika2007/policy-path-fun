import { useState } from "react";
import { Button } from "@/components/ui/button";
import dice1 from "@/assets/dice1.png";
import dice2 from "@/assets/dice2.png";
import dice3 from "@/assets/dice3.png";
import dice4 from "@/assets/dice4.png";
import dice5 from "@/assets/dice5.png";
import dice6 from "@/assets/dice6.png";

interface DiceRollerProps {
  onRoll: (value: number) => void;
  disabled: boolean;
  onRollStart?: () => void;
}

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const DiceRoller = ({ onRoll, disabled, onRollStart }: DiceRollerProps) => {
  const [currentDice, setCurrentDice] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (disabled || isRolling) return;
    
    onRollStart?.(); // Trigger sound effect
    setIsRolling(true);
    
    // Animate dice roll
    let counter = 0;
    const interval = setInterval(() => {
      setCurrentDice(Math.floor(Math.random() * 6));
      counter++;
      if (counter > 10) {
        clearInterval(interval);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(finalValue - 1);
        setIsRolling(false);
        onRoll(finalValue);
      }
    }, 100);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className={`transition-transform ${isRolling ? 'animate-spin' : ''}`}>
        <img 
          src={diceImages[currentDice]} 
          alt={`Dice showing ${currentDice + 1}`}
          className="w-24 h-24 drop-shadow-2xl"
        />
      </div>
      <Button 
        onClick={rollDice} 
        disabled={disabled || isRolling}
        size="lg"
        className="text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
      >
        {isRolling ? "Rolling..." : "Roll Dice"}
      </Button>
    </div>
  );
};

export default DiceRoller;
