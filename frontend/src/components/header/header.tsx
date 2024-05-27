import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import headerStyled from './header.styled';
import { Link } from 'react-router-dom';

export interface headerProps{
  firstLink: string;
  secondLink: string;
  firstTitle: string;
  secondTitle: string;
}

const Header = (props: headerProps) =>{

    return(
    <AppBar position="static" sx={{backgroundColor: "#937b63"}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
         <Link to={props.firstLink} ><headerStyled.Text>{props.firstTitle}</headerStyled.Text></Link>
         <Link to={props.secondLink}><headerStyled.Text>{props.secondTitle}</headerStyled.Text></Link>
        </Toolbar>
      </AppBar>
    )

}


export default Header;