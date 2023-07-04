import React from 'react';
import Connectbox from '../Components/Connectbox'
import CrossButton from "../Components/button";
import crossword from "../Components/cross.png";
import wordle from "../Components/wordle.png";
import tictac from "../Components/tictac.jpg";
import sudoku from "../Components/sudoku.png";
import Backcolor from '../assets/Backcolor.svg';
import WordlePage from '../Pages/wordle';

const Room = () => {
    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div id="card-container" style={{ display: "flex", columnGap: "20px" }}>
                <div onClick={WordlePage}>
                    <CrossButton
                        img={wordle}
                        gameTitle='Wordle'/>

                </div>
                <div>
                    <CrossButton
                        img={tictac}
                        gameTitle='Tic Tac Toe'
                    />
                </div>
                <div>
                    <CrossButton
                        img={sudoku}
                        gameTitle='Sudoku'
                    />
                </div>
            </div>
        </div>

    )
}

export default Room;