import React, { useEffect } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import img1 from "../Assets/output-onlinegiftools.gif"
import useHistory from "react-router-dom";
import { useNavigate } from "react-router-dom";


const StyledBody = styled.body`
    background: linear-gradient(270deg, #76D4E9 0%, rgba(148, 23, 192, 0.80) 100%);
    display: inline-flex;
    padding: 11.9375rem 15.25rem 1.875rem 16.625rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 2.75rem;
`
const StyledImg = styled.img`
width: 50rem;
height: 37.5rem;
`

const StyledText = styled.text`
color: #FFF;
text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
font-size: 6rem;
font-family: Montserrat;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;
`

const LoadingPage = () => {
    const navigate = useNavigate();
    const loadingLink = () => {
        navigate("/Call");
    }
    return (
        <StyledBody onClick = {loadingLink}>
            <StyledText>Waiting for your pal</StyledText>
            <StyledImg src={img1}></StyledImg>
        </StyledBody>
    )
}

export default LoadingPage;