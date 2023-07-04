import React from "react";
import crossword from "./cross.png"
import { alignProperty } from "@mui/material/styles/cssUtils";

type Props = {
    img: string;
    gameTitle: string;
    link: string;
}

const Button = (props:Props) => {
    const mystyle = {
        color: "black",
        padding: "10px",
    };

    return(
    
        <a href= {props.link}>
            <div id = "card" style= {{backgroundColor: "lightblue", display:"flex", flexDirection:"column", border:"1px solid black", borderRadius:"20px", overflow:"hidden"}}>
               
                    <img src={props.img} style = {{width: "300px", height: "200px"}}/>

                <div>
                    <h1 style = {{textAlign: "center", color: "black", textDecoration:"none"}}>
                        {props.gameTitle}
                    </h1>
                </div>
            </div>
        </a>

    )
}

export default Button;