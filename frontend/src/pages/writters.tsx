import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import WrittersComponent from "../components/writters/writtersComponent";
import WritterPictures from "../components/writters/writterPicture";
import WrittersStyled from "./writters.styled";

const Writters = () => {

  const marta = 'Marta Terán is a woman from Madrid, born in 1996. Her main role is plot management, and she is responsible for developing the personalities of more than one main character. She was one of the initiators of the project.'
  const kiri = "Kirissa Povedano is a woman born in Seville, 1998. Her job is to serve as the group's glossary, as she knows all the details of the story and ensures there are no inconsistencies. Additionally, she works on world-building. She was also one of the project's initiators."
  const ismi= 'Ismael Benlarbi is a man from Madrid, born in 1996. His job focuses on giving depth to characters and plots, adding a fresh and unique touch. He skillfully handles drama to avoid overly dramatic moments.'

  return (
    <>
      <Header
        
      />
      <WrittersStyled.Container>
       <WritterPictures /> 
      <WrittersComponent name="Marta Terán" description={marta} />
      </WrittersStyled.Container>
      <WrittersStyled.Container>
      <WrittersComponent name="Kirissa Povedano" description={kiri}/>
       <WritterPictures /> 
      </WrittersStyled.Container>
      <WrittersStyled.Container>
       <WritterPictures /> 
      <WrittersComponent name="Ismael Benlarbi" description={ismi} />
      </WrittersStyled.Container>
      <Footer />
    </>
  );
};

export default Writters;
