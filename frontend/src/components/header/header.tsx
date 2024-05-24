import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import headerStyled from './header.styled';
import { Link } from 'react-router-dom';


const Header = () =>{

    return(
    <AppBar position="static" sx={{backgroundColor: "#937b63"}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
         <Link to={'/characters'} ><headerStyled.Text>Characters</headerStyled.Text></Link>
         <Link to={'/writters'}><headerStyled.Text>Writters</headerStyled.Text></Link>
        </Toolbar>
      </AppBar>
    )

}


export default Header;