import React, { useState } from 'react';
import styled from 'styled-components';
import TicTacToe from './tictactoe';
import Sudoku from './Sudoku';


const StyledProduct = styled.div`
	display: flex;
	height: 30vw;
	width: 30vw;
	background: #fbf9f9;
	margin: 1.75vw;
	border: 1px solid black;
	border-radius: 10px;
	padding: 20px 10px;
    justify-content: center; // Center horizontally
    align-items: center; // Center vertically
`;

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <StyledProduct>
        <div className="App">
            <header className="App-header">
                {/* <h1>Choose Game</h1> */}
                {!gameStarted && (
                <button className="start-button" onClick={handleStartGame}>
                    Start Game
                </button>
                )}
                {gameStarted && <TicTacToe />}
            </header>
        </div>
    </StyledProduct>
    
  );
};

export default App;
