import React from "react";
import crossword from "./cross.png"
import test from "./testpage"



const Button = () => {
    const mystyle = {
        color: "black",
        padding: "10px",
    };

    return(
        <a href= "./testpage">
            <div style= {{backgroundColor: "lightblue"}}>

            <img src={crossword} />

            <h1 style = {mystyle}>
                Crossword
            </h1>

    </div>
    </a>
    )
}

export default Button;