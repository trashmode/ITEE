import React from "react";
import crossword from "./cross.png"



const Button = () => {
    const mystyle = {
        color: "black",
        padding: "10px",
    };

    return(
        <a href= "https://youtube.com.au">
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