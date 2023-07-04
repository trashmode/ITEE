import React from 'react';
import './App.css';
import './dist/main.fefce00d.css.map';
import CrossButton from './Components/button';
import crossword from "./Components/cross.png";
import tictac from "./Components/tictac.jpg";
import sudoku from "./Components/sudoku.png";
import LoadingPage from './Pages/LoadingPage';
import Backcolor from './assets/Backcolor.svg'
import { styled } from 'styled-components';
import Connectbox from './Components/Connectbox'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'

const backgroundStyled = styled.img`
backgroundColor: '#c0dfff',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
`;


const StyledImage = styled.img`
padding: 0;
height: 130vh;
width: 130vw;
background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;


function App() {
  return (
    <div className = "App">
      <BrowserRouter>
      <Header/>
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
     
    <Routes>
      <Route path = '/' element = {<Homepage />} />
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
