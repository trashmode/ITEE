import React from 'react';
import styled from 'styled-components';
import { Box} from "@mui/material";
import Button, { ButtonProps } from '@mui/material/Button';
interface Prop {
    title: string;
}



const StyledComponent = styled.div`
    height: 40vh;
    width : 40vh;
	flex: 1;
	display: flex;
    right-padding: 15px;
    border-radius: 50%; /* Set border-radius to 50% for a circle */
    margin: 23vh;
    box-shadow: 3px 5px 2px silver;
    background: linear-gradient(135deg, 'transparent', #e2e2e2);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background: linear-gradient(270deg, #76D4E9 0%, rgba(148, 23, 192, 0.80) 100%);
  
    &:hover {
      transform: scale(1.4);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      transition-duration: 0.5s;
    }
  
    &:not(:hover) {
      transform: scale(1);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      transition-duration: 0.8s;
    }
  

`;


const StyledContent = styled.div`
    margin-left:5vw;
    margin-top: 10vh;
    height: 20vh;
    width : 10vw;
	padding: 1rem;
    display: flex;
    justify-content: center;
	box-sizing: border-box;
	align-items: flex-start;
`;




const Connectbox = (props: Prop) => {
    return (
        <Box>
        <StyledComponent>
                <StyledContent>
                <h1 style={{ margin: 20, cursor: 'pointer', fontSize: '180%', color: '#333', fontFamily: 'Arial,sans-serif', WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',}}>
                     {props.title}
                </h1> 
             </StyledContent> 
        </StyledComponent>
        </Box>
    )
}



export default Connectbox;