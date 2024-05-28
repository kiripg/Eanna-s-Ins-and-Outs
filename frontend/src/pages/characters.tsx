import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import FirstBook from "../components/characters/FirstBook/firstBook";
import aida from "../assets/characters/aida.jpg";
import zander from "../assets/characters/zander.jpg";
import diego from "../assets/characters/diego.jpg";
import jace from "../assets/characters/jace.jpg";
import roy from "../assets/characters/roy.jpg";
import liss from "../assets/characters/lissandra.jpg";
import tillie from "../assets/characters/tillie.jpg";
import sky from "../assets/characters/sky.jpg";
import solair from "../assets/characters/solair.jpg";
import CharactersStyled from "./characters.styled";

const Characters = () => {
  const first = [
    { id: 1, Name: "Aida Ethelind", frontPic: aida },
    { id: 2, Name: "Alexander 'Zander' Theodil", frontPic: zander },
    { id: 3, Name: "Diego", frontPic: diego },
    { id: 4, Name: "Jace", frontPic: jace },
    { id: 5, Name: "Leroy 'Roy' Mustang", frontPic: roy },
    { id: 6, Name: "Lissandra Vondai", frontPic: liss },
    { id: 7, Name: "Mathilde 'Tillie' Daegrat", frontPic: tillie },
    { id: 8, Name: "Skylar 'Sky' Hemill", frontPic: sky },
    { id: 9, Name: "Solair", frontPic: solair },
  ];

  const [firstBookOpen, setFirstBookOpen] = useState(true);
  const [secondBookOpen, setSecondBookOpen] = useState(false);
  const [thirdBookOpen, setThirdBookOpen] = useState(false);

  const handleFirst = () => {
    setFirstBookOpen(true);
    setSecondBookOpen(false);
    setThirdBookOpen(false);
  };
  const handleSecond = () => {
    setSecondBookOpen(true);
    setFirstBookOpen(false);
    setThirdBookOpen(false);
  };
  const handleThird = () => {
    setThirdBookOpen(true);
    setFirstBookOpen(false);
    setSecondBookOpen(false);
  };

  return (
    <>
      <Header />
      <CharactersStyled.Page>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white" }}>
          <p style={{ cursor: "pointer", textDecoration: 'underline', fontSize: '1.2rem' }} onClick={handleFirst}>
            First Book
          </p>
          <p style={{ cursor: "pointer", textDecoration: 'underline', fontSize: '1.2rem' }} onClick={handleSecond}>
            Second book
          </p>
          <p style={{ cursor: "pointer", textDecoration: 'underline', fontSize: '1.2rem' }} onClick={handleThird}>
            Third book
          </p>
        </Breadcrumbs>
      </div>
      
      {firstBookOpen && !secondBookOpen && !thirdBookOpen && (
        <CharactersStyled.Container>
          {first.map((pj) => (
            <FirstBook key={pj.id} name={pj.Name} pic={pj.frontPic} />
          ))}
        </CharactersStyled.Container>
      )}

      {!firstBookOpen && secondBookOpen && !thirdBookOpen && (
        <CharactersStyled.Container><p style={{fontSize: '1.6rem', fontStyle:'italic'}}> The second book is still in progress... </p></CharactersStyled.Container>
        
      )}

      {!firstBookOpen && !secondBookOpen && thirdBookOpen && (
        <CharactersStyled.Container><p style={{fontSize: '1.6rem', fontStyle:'italic'}}>The third book is still in progres... </p></CharactersStyled.Container>
      )}
      </CharactersStyled.Page>
      <Footer />
    </>
  );
};

export default Characters;
