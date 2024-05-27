import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FirstBook from "../components/characters/FirstBook/firstBook";

const Characters = () => {
  return (
    <>
      <Header
      
      />
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem'}} >
      <Breadcrumbs aria-label="breadcrumb" sx={{color: 'white'}}>
        <p style={{color: 'white', fontFamily: "Berkshire Swash"}}>First Book</p>
        <p style={{color: 'white', fontFamily: "Berkshire Swash"}}>Second book</p>
        <p style={{color: 'white', fontFamily: "Berkshire Swash"}}>Third book</p>
      </Breadcrumbs>
      </div>
      <FirstBook />
      <Footer />
    </>
  );
};

export default Characters;
