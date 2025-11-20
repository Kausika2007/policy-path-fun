import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import GameBoard from "@/components/GameBoard";
import DiceRoller from "@/components/DiceRoller";
import PlayerStats from "@/components/PlayerStats";
import InsuranceMessage from "@/components/InsuranceMessage";
import AudioControls from "@/components/AudioControls";
import { ladderMap, snakeMap, getInsuranceMessage } from "@/lib/gameLogic";
import { useGameSounds } from "@/hooks/useGameSounds";
import { useGame } from "@/contexts/GameContext";
import { Button } from "@/components/ui/button";
import { RotateCcw, ArrowLeft } from "lucide-react";

const Roadmap = () => {
  const navigate = useNavigate();
  const { earnBadge } = useGame();
  const [playerPosition, setPlayerPosition] = useState(0);
  const [lastDice, setLastDice] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<"ladder" | "snake" | "win" | null>(null);
  const [gameWon, setGameWon] = useState(false);
  
  const {
    playDiceRoll,
    playLadder,
    playSnake,
    playVictory,
    toggleMusic,
    toggleSound,
    isMusicEnabled,
    isSoundEnabled,
  } = useGameSounds();

  const handleRoll = (diceValue: number) => {
    setLastDice(diceValue);
    let newPosition = playerPosition + diceValue;

    // Can't go beyond 100
    if (newPosition > 100) {
      toast.info(`You rolled ${diceValue}, but need exactly ${100 - playerPosition} to win!`);
      return;
    }

    // Check for win
    if (newPosition === 100) {
      setTimeout(() => {
        setPlayerPosition(100);
        setMessage(getInsuranceMessage(100));
        setMessageType("win");
        setGameWon(true);
        playVictory();
        
        const roadmapBadge = {
          id: 'roadmap-complete',
          name: 'Journey Complete',
          icon: '🏆',
          description: 'Complete the Insurance Roadmap',
          earned: true
        };
        earnBadge(roadmapBadge);
        
        toast.success("🎉 You won the game!");
      }, 300);
      return;
    }

    // Check for ladder
    if (ladderMap[newPosition]) {
      const finalPosition = ladderMap[newPosition];
      setTimeout(() => {
        setPlayerPosition(finalPosition);
        setMessage(getInsuranceMessage(newPosition));
        setMessageType("ladder");
        playLadder();
        toast.success(`Ladder! Moved from ${newPosition} to ${finalPosition}`);
      }, 300);
      return;
    }

    // Check for snake
    if (snakeMap[newPosition]) {
      const finalPosition = snakeMap[newPosition];
      setTimeout(() => {
        setPlayerPosition(finalPosition);
        setMessage(getInsuranceMessage(newPosition));
        setMessageType("snake");
        playSnake();
        toast.error(`Snake! Moved from ${newPosition} to ${finalPosition}`);
      }, 300);
      return;
    }

    // Normal move
    setTimeout(() => {
      setPlayerPosition(newPosition);
      setMessage("");
      setMessageType(null);
    }, 300);
  };

  const resetGame = () => {
    setPlayerPosition(0);
    setLastDice(null);
    setMessage("");
    setMessageType(null);
    setGameWon(false);
    toast.info("Game reset! Good luck!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Button
            onClick={() => navigate("/games")}
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Games
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg text-center">
            Insurance Awareness Journey
            
          </h1>
          
          <AudioControls
            isMusicEnabled={isMusicEnabled}
            isSoundEnabled={isSoundEnabled}
            onToggleMusic={toggleMusic}
            onToggleSound={toggleSound}
          />
        </div>

        {/* Main Game Area */}
        {gameWon ? (
          /* Victory Screen - Large centered display */
          <div className="flex flex-col items-center justify-center min-h-[600px] space-y-8 animate-fade-in">
            <div className="text-center space-y-6 bg-white/20 backdrop-blur-lg rounded-3xl p-12 border-4 border-white/40 shadow-2xl max-w-3xl">
              <div className="text-9xl animate-bounce">🏆</div>
              <h2 className="text-6xl font-bold text-white drop-shadow-lg">
                POSITION 100!
              </h2>
              <h3 className="text-4xl font-bold text-yellow-300 drop-shadow-lg">
                🎉 YOU WIN! 🎉
              </h3>
              <p className="text-2xl text-white leading-relaxed max-w-2xl mx-auto">
                Congratulations! You've completed your Insurance Awareness Journey! 
                You now understand how insurance protects against life's uncertainties.
              </p>
              <div className="text-xl text-yellow-200 font-semibold">
                Remember: Being insured means being prepared for anything!
              </div>
            </div>
            
            <Button
              onClick={resetGame}
              size="lg"
              className="text-2xl px-12 py-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold shadow-2xl hover:shadow-3xl transition-all animate-pulse"
            >
              <RotateCcw className="mr-3 h-8 w-8" />
              Play Again
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Stats & Message */}
            <div className="space-y-6">
              <PlayerStats position={playerPosition} lastDice={lastDice} />
              <InsuranceMessage message={message} type={messageType} />
            </div>

            {/* Center Column - Game Board */}
            <div className="lg:col-span-1 flex justify-center items-start">
              <GameBoard playerPosition={playerPosition} />
            </div>

            {/* Right Column - Dice & Controls */}
            <div className="flex flex-col items-center justify-start space-y-6">
              <DiceRoller
                onRoll={handleRoll}
                disabled={gameWon}
                onRollStart={playDiceRoll}
              />
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white text-sm shadow-lg border border-white/30">
                <h3 className="font-bold mb-3 text-lg">How to Play:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Roll the dice to move forward</li>
                  <li>🪜 Ladders = Insurance benefits & protection</li>
                  <li>🐍 Snakes = Risks without insurance</li>
                  <li>Learn about insurance as you play!</li>
                  <li>🎯 Reach position 100 to win!</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;
