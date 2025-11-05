import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import gameBoardImg from "@/assets/game-board.jpg";

interface GameBoardProps {
  playerPosition: number;
}

const GameBoard = ({ playerPosition }: GameBoardProps) => {
  const [matrix, setMatrix] = useState<number[][]>([]);

  useEffect(() => {
    const createMatrix = () => {
      const MatrixArray: number[][] = [];
      const n = 10;
      let value = 100;
      for (let row = 0; row < n; row++) {
        const row_matrix: number[] = [];
        if (row % 2 === 0) {
          for (let col = 0; col < n; col++) row_matrix.push(value--);
        } else {
          for (let col = 0; col < n; col++) row_matrix.unshift(value--);
        }
        MatrixArray.push(row_matrix);
      }
      return MatrixArray;
    };
    setMatrix(createMatrix());
  }, []);

  return (
    <Card className="relative w-full max-w-[600px] aspect-square overflow-hidden border-4 border-primary shadow-2xl">
      <img 
        src={gameBoardImg} 
        alt="Snakes and Ladders Game Board" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 grid grid-rows-10 grid-cols-10 p-1 gap-[2px]">
        {matrix.map((row, rowIndex) => (
          row.map((block, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              data-value={block}
              className="relative flex items-center justify-center"
            >
              {playerPosition === block && (
                <div className="absolute inset-0 flex items-center justify-center z-10 animate-bounce">
                  <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-yellow-400 shadow-lg" />
                </div>
              )}
            </div>
          ))
        ))}
      </div>
    </Card>
  );
};

export default GameBoard;
