import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import img1 from "../Assets/output-onlinegiftools.gif"

const StyledBody = styled.body`
    background: linear-gradient(270deg, #76D4E9 0%, rgba(148, 23, 192, 0.80) 100%);
`

const LoadingPage = () => {
    return (
        <StyledBody>
            <h1>hi</h1>
            <img src={img1}></img>
        </StyledBody>
    )
}

export default LoadingPage;