import React from 'react';
import Connectbox from '../Components/Connectbox'
import CrossButton from "../Components/button";
import crossword from "../Components/cross.png";
import tictac from "../Components/tictac.jpg";
import sudoku from "../Components/sudoku.png";
import Backcolor from '../assets/Backcolor.svg'

const Homepage = () => {
    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Connectbox title="Connect here!" />
            <div id="card-container" style={{ display: "flex", columnGap: "20px" }}>
                <div>
                    <CrossButton
                        img={crossword}
                        gameTitle='Crossword'
                        link="https://www.youtube.com" />
                </div>
                <div>
                    <CrossButton
                        img={tictac}
                        gameTitle='Tic Tac Toe'
                        link="https://www.youtube.com"
                    />
                </div>
                <div>
                    <CrossButton
                        img={sudoku}
                        gameTitle='Sudoku'
                        link="https://www.youtube.com"
                    />
                </div>
            </div>
        </div>

    )
}

export default Homepage;