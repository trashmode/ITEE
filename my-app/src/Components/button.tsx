import React from "react";
import crossword from "./cross.png"
import { alignProperty } from "@mui/material/styles/cssUtils";
import WordlePage from '../Pages/wordle';
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
    img: string;
    gameTitle: string;
}

const Button = (props:Props) => {
    const mystyle = {
        color: "black",
        padding: "10px",
    };

    const navigate = useNavigate();

    const wordle = () => {
      navigate("/wordle")
    }
  

    return(
    
            <div id = "card" onClick={wordle} style= {{backgroundColor: "lightblue", display:"flex", flexDirection:"column", border:"1px solid black", borderRadius:"20px", overflow:"hidden"}}>
               
                    <img src={props.img} style = {{width: "300px", height: "200px"}}/>

                <div>
                    <h1 style = {{textAlign: "center", color: "black", textDecoration:"none"}}>
                        {props.gameTitle}
                    </h1>
                </div>
            </div>

    )
}

export default Button;