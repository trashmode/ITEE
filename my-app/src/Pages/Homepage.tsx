import React from 'react';
import Connectbox from '../Components/Connectbox'
import CrossButton from "../Components/button";
import crossword from "../Components/cross.png";
import wordle from "../Components/wordle.png";
import tictac from "../Components/tictac.jpg";
import sudoku from "../Components/sudoku.png";
import Backcolor from '../assets/Backcolor.svg';
import WordlePage from '../Pages/wordle';

const Homepage = () => {
    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Connectbox title="Connect here!" />
        </div>

    )
}

export default Homepage;