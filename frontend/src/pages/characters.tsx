import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Characters = () => {
  return (
    <>
      <Header
        firstLink="/"
        firstTitle="Main Page"
        secondLink="/writters"
        secondTitle="Writters"
      />
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem'}} >
      <Breadcrumbs aria-label="breadcrumb" sx={{color: 'white'}}>
        <p style={{color: 'white', fontFamily: "Berkshire Swash"}}>First Book</p>
        <p style={{color: 'white', fontFamily: "Berkshire Swash"}}>Second book</p>
        <p style={{color: 'white', fontFamily: "Berkshire Swash"}}>Third book</p>
      </Breadcrumbs>
      </div>
      <Footer />
    </>
  );
};

export default Characters;
