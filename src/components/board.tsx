import BoardSquare from "@/components/board-square.tsx";
import BoardBorders from "@/components/board-borders.tsx";
import { useEffect, useState } from "react";
import Circle from "@/components/ui/circle.tsx";
import CheckMark from "@/components/ui/check-mark.tsx";

const Board = () => {
  type Player = "circle" | "checkmark";
  type GameState = (Player | null)[][];

  const [gameState, setGameState] = useState<GameState>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [currentPlayer, setCurrentPlayer] = useState<"circle" | "checkmark">(
    "circle",
  );

  const [winner, setWinner] = useState<Player | null | "tie">(null);

  useEffect(() => {
    console.log(winner);
  }, [winner]);

  const handleClick = (row: number, col: number) => {
    if (!gameState[row][col] && !winner) {
      const copy = [...gameState];
      copy[row][col] = currentPlayer === "circle" ? "circle" : "checkmark";
      setGameState(copy);
      checkWinner(row, col);
      setCurrentPlayer(currentPlayer === "circle" ? "checkmark" : "circle");
    }
  };

  const checkLine = (
    row: number,
    col: number,
    rowStep: number,
    colStep: number,
  ) => {
    const startValue = gameState[row][col];

    if (!startValue) return false;

    for (let i = 1; i < gameState.length; i++) {
      const newRow = row + i * rowStep;
      const newCol = col + i * colStep;

      if (
        newRow < 0 ||
        newRow >= gameState.length ||
        newCol < 0 ||
        newCol >= gameState.length ||
        gameState[newRow][newCol] !== startValue
      ) {
        return false;
      }
    }

    return true;
  };

  const checkWinner = (row: number, col: number) => {
    if (
      checkLine(row, 0, 0, 1) || //check row
      checkLine(0, col, 1, 0) || // check col
      checkLine(0, 0, 1, 1) || // check diagonal
      checkLine(0, gameState.length - 1, 1, -1) // check reverse diagonal
    ) {
      setWinner(currentPlayer);
    }

    checkTie();
  };

  const checkTie = () => {
    if (!gameState.flat().includes(null)) {
      setWinner("tie");
    }
  };

  return (
    <div
      className={
        "absolute grid grid-cols-3 gap-[1%]  h-[70%] aspect-square  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
      }
    >
      <BoardBorders />
      {gameState.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <BoardSquare
            onClick={() => handleClick(rowIndex, colIndex)}
            key={`${rowIndex}-${colIndex}`}
          >
            {col === null ? null : col === "circle" ? (
              <Circle />
            ) : (
              <CheckMark />
            )}
          </BoardSquare>
        )),
      )}
    </div>
  );
};

export default Board;
