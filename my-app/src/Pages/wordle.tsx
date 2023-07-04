import React from 'react';
import Connectbox from '../Components/Connectbox'
import CrossButton from "../Components/button";
import crossword from "../Components/cross.png";
import tictac from "../Components/tictac.jpg";
import sudoku from "../Components/sudoku.png";
import Backcolor from '../assets/Backcolor.svg'

const wordle = () => {
    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{flexDirection:"row"}}>
        <iframe src="https://wordle-clone-bysubodh.netlify.app/" title="Wordle" style = {{width:"500px", height:"700px"}}></iframe>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div id="card-container" style={{ display: "flex", columnGap: "20px" }}>
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
        </div>        
        </div>

    )
}

export default wordle;