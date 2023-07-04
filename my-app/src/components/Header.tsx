import React from 'react';
import Logo from '../assets/Logo.svg'

import {
    Box,
    AppBar,
    Toolbar,
    Typography,
  } from '@mui/material';
  import styled from "styled-components";
  


  const StyledImg1 = styled.img`
  margin-left: 1.5vw;
  margin-right: 83.5vw;
  width: 1.5rem;
`;
const StyledImg2 = styled.img`
  margin-left: 1.5vw;
  margin-right: 1.5vw;

  width: 1.5rem;
`;
const StyledImg3 = styled.img`
  margin-left: 1.5vw;
  margin-right: 33vw;

  width: 1.5rem;
`;




const Header = () => {
    return( <Box sx = {{flexGrow: 1, position: 'sticky', top: '0'}}>
        <AppBar
            position = 'static'
                sx = {{backgroundColor: 'transparent', elevation: 0, boxShadow: 'none'}}
        >
            <Toolbar>   
                <StyledImg1 src={Logo} />
                <StyledImg2 src={Logo} />
                <StyledImg3 src={Logo} />
            </Toolbar>
    </AppBar>
    </Box>
    );
} 

export default Header;
