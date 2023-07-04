import React from 'react';
import './App.css';
import './dist/main.fefce00d.css.map';
import CrossButton from './Components/button';
import crossword from "./Components/cross.png";
import tictac from "./Components/tictac.jpg";
import sudoku from "./Components/sudoku.png";

function App() {
  return (
    <div>
      <div id="card-container" style = {{display: "flex", columnGap:"20px"}}>
        <div>
          <CrossButton
          img= {crossword}
          gameTitle='Crossword'
          link="https://www.youtube.com"  />
        </div>
        <div>
          <CrossButton
          img= {tictac}
          gameTitle='Tic Tac Toe'
          link="https://www.youtube.com"
            />
        </div>
        <div>
          <CrossButton
          img= {sudoku}
          gameTitle='Sudoku'
          link="https://www.youtube.com"
            />
        </div>
      </div>
     

    <div id="wordle"></div>

    <script src="../dist/787.b7eb5c8c.chunk.js"></script>
    <script src="../dist/main.75f073d2.js"></script>
    <script src="../dist/787.b7eb5c8c.chunk.js.map"></script>
    <script src="../dist/main.75f073d2.js.map"></script>
    </div>
    
  );
}

export default App;
