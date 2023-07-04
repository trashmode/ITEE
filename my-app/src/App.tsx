import React from 'react';
import logo from './logo.svg';
import './App.css';
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
    <Routes>
      <Route path = '/' element = {<Homepage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
