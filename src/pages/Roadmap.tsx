import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useGame } from "@/contexts/GameContext";
import { soundEffects } from "@/utils/soundEffects";

const Roadmap = () => {
  const navigate = useNavigate();
  const { earnBadge } = useGame();

  const [position, setPosition] = useState(0);
  const [diceValue, setDiceValue] = useState(6);
  const [rolling, setRolling] = useState(false);

  // Ladders and Snakes configuration
  const ladderMap: { [key: number]: number } = {
    1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 51: 67, 71: 91, 80: 99,
  };

  const snakeMap: { [key: number]: number } = {
    17: 7, 54: 34, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 79,
  };

  // Insurance messages
  const insuranceSnakes: { [key: number]: string } = {
    17: "❌ Skipping document verification can delay your claim!",
    54: "❌ Not reading the policy terms can cause future issues.",
    62: "❌ Providing wrong information voids your policy.",
    64: "❌ Ignoring premium due date can lapse your policy.",
    87: "❌ Claiming false reports leads to rejection.",
    93: "❌ Not updating address/contact may block communication.",
    95: "❌ Missing health check-ups affects claim approval.",
    98: "❌ Ignoring nominee details causes complications.",
  };

  const insuranceLadders: { [key: number]: string } = {
    1: "🚀 Start your insurance journey with awareness and honesty!",
    4: "✅ Read the fine print before buying an insurance plan.",
    9: "✅ Pay your premium on time to keep policy active.",
    21: "✅ Review your policy annually for better benefits.",
    28: "✅ Declare all medical conditions honestly.",
    51: "✅ Use official websites or apps for renewals.",
    71: "✅ Add nominee details and update when needed.",
    80: "✅ Understand claim process clearly before filing.",
    100: "🎉 Congratulations! You can now claim your insurance successfully!",
  };

  // Create game board matrix
  const createMatrix = () => {
    const matrixArray = [];
    const n = 10;
    let value = 100;
    for (let row = 0; row < n; row++) {
      const rowMatrix = [];
      if (row % 2 === 0) {
        for (let col = 0; col < n; col++) rowMatrix.push(value--);
      } else {
        for (let col = 0; col < n; col++) rowMatrix.unshift(value--);
      }
      matrixArray.push(rowMatrix);
    }
    return matrixArray;
  };

  const board = createMatrix();

  // Roll dice
  const rollDice = () => {
    if (rolling || position === 100) return;
    
    setRolling(true);
    soundEffects.playButtonClick();
    
    const newDiceValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newDiceValue);

    setTimeout(() => {
      movePlayer(newDiceValue);
      setRolling(false);
    }, 1000);
  };

  // Move player
  const movePlayer = (dice: number) => {
    let newPosition = position + dice;
    
    if (newPosition > 100) return;

    if (newPosition === 100) {
      setPosition(100);
      showInsuranceMessage(100, true);
      setTimeout(showWinMessage, 1500);
      return;
    }

    if (ladderMap[newPosition]) {
      const finalPos = ladderMap[newPosition];
      setPosition(finalPos);
      showInsuranceMessage(newPosition, true);
    } else if (snakeMap[newPosition]) {
      const finalPos = snakeMap[newPosition];
      setPosition(finalPos);
      showInsuranceMessage(newPosition, false);
    } else {
      setPosition(newPosition);
    }
  };

  // Show insurance message
  const showInsuranceMessage = (pos: number, isLadder: boolean) => {
    const message = isLadder ? insuranceLadders[pos] : insuranceSnakes[pos];
    if (!message) return;

    toast(message, {
      description: isLadder ? "🪜 Correct Step!" : "🐍 Wrong Step!",
      duration: 1500,
    });
  };

  // Show win message
  const showWinMessage = () => {
    soundEffects.playCelebrationSound();
    
    const roadmapBadge = {
      id: 'roadmap-complete',
      name: 'Journey Complete',
      icon: '🏆',
      description: 'Complete the Insurance Roadmap',
      earned: true
    };
    earnBadge(roadmapBadge);
    
    toast.success("🎉 CONGRATULATIONS!! 🎉", {
      description: "You've completed the Insurance Roadmap!",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center" style={{
      background: "linear-gradient(to right top, #c73777, #be3d8d, #ae46a2, #9752b5, #785dc5, #5e6bcf, #3e77d4, #0081d6, #008fd1, #009ac3, #00a2b2, #39a8a1)"
    }}>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        {/* Header */}
        <div className="mb-4 md:mb-6 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-[2px_5px_8px_rgba(28,27,27,0.808)]">
            Insurance Awareness - Snake & Ladder
          </h2>
        </div>

        {/* Player Info */}
        <div className="absolute top-16 sm:top-20 md:top-24 right-4 md:right-8 bg-white/40 backdrop-blur-sm rounded-xl p-3 md:p-4 min-w-[120px] md:min-w-[140px] shadow-lg">
          <h3 className="text-lg md:text-xl font-bold text-[rgb(168,63,24)] mb-2">Player</h3>
          <p className="text-base md:text-lg">Position: <span className="font-bold">{position}</span></p>
          <p className="text-base md:text-lg">Dice: <span className="font-bold">{rolling ? "🎲" : diceValue}</span></p>
        </div>

        {/* Game Board */}
        <div 
          className="relative rounded-lg border-2 border-red-600 shadow-[0px_3px_10px_rgba(0,0,0,0.2)] overflow-hidden p-[5px]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1))",
            width: "min(550px, 90vw)",
            aspectRatio: "1",
          }}
        >
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="flex" style={{ height: "10%" }}>
              {row.map((block) => (
                <div
                  key={block}
                  data-value={block}
                  className="flex-1 flex items-center justify-center relative"
                  style={{ 
                    minHeight: "29px"
                  }}
                >
                  {/* Player piece */}
                  {position === block && (
                    <div className="absolute z-10 bg-red-600 rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center animate-bounce shadow-lg">
                      <span className="text-white text-xs sm:text-sm">🎯</span>
                    </div>
                  )}
                  
                  {/* Ladder indicator */}
                  {ladderMap[block] && (
                    <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl opacity-70">
                      🪜
                    </div>
                  )}
                  
                  {/* Snake indicator */}
                  {snakeMap[block] && (
                    <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl opacity-70">
                      🐍
                    </div>
                  )}
                  
                  {/* Block number */}
                  <span className="absolute top-0.5 left-0.5 text-[10px] sm:text-xs text-white/60 font-semibold">{block}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Dice Container */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-lg">
          <div className="text-5xl md:text-6xl">
            {rolling ? "🎲" : ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][diceValue - 1]}
          </div>
          <Button
            onClick={rollDice}
            disabled={rolling || position === 100}
            className="bg-[rgb(213,37,37)] hover:bg-red-700 text-white font-bold px-4 md:px-6 py-2 rounded-lg shadow-[0px_3px_10px_gray] border border-red-600"
          >
            {rolling ? "Rolling..." : "Roll Dice"}
          </Button>
        </div>

        {/* Back Button */}
        <Button
          onClick={() => navigate("/games")}
          variant="outline"
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
        >
          ← Back to Games
        </Button>
      </div>
    </div>
  );
};

export default Roadmap;
