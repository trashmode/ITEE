import React, { useState } from 'react';

const SudokuGame: React.FC = () => {
  const [board, setBoard] = useState<number[][]>([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ]);

  const handleCellChange = (row: number, col: number, value: number) => {
    const newBoard = [...board];
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  const renderBoard = () => {
    return (
      <table className="sudoku-board">
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="number"
                    value={value || ''}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, parseInt(e.target.value))}
                    style={{ width: '30px' }} // Set the width to your desired value
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

  return (
    <div>
      <h2>Sudoku Game</h2>
      {renderBoard()}
    </div>
  );
};

export default SudokuGame;
